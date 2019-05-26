import React, { useState, useEffect, Fragment } from "react";
import * as faceapi from "face-api.js";

const WebCam = function() {
  let videoDimensions = {
    height: "500px",
    width: "667px"
  };

  let styles = {
    video: {
      height: videoDimensions.height,
      width: videoDimensions.width
    },
    canvas: {
      position: "absolute",
      top: 0,
      left: 0
    }
  };

  let videoEL;
  let canvasEL;
 
  const [video, setVideo] = useState(false);

  const requestCameraAccess = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then(function(stream) {
          videoEL.srcObject = stream;
          setVideo(true);
        })
        .catch(function(error) {
          console.log(`Something went wrong! ${error}`);
          setVideo(false);
        });
    }
  };

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri("./models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("./models");
    await faceapi.nets.faceRecognitionNet.loadFromUri("./models");

    console.log("models loaded");
  };

  const onPlay = async () => {
    const displaySize = {
      width: videoDimensions.width.replace("px", ""),
      height: videoDimensions.height.replace("px", "")
    };

    // resize the overlay canvas to the input dimensions
    // should only be done once
    faceapi.matchDimensions(canvasEL, displaySize);

    const detections = await faceapi
      .detectAllFaces(videoEL) //detect face from video element
      .withFaceLandmarks()  //detect face landmark ... might not need to use this
      .withFaceDescriptors(); //this will return an array of numbers that describes your face


    // resize the detected boxes and landmarks in case your displayed image has a different size than the original
    const resizedResults = faceapi.resizeResults(detections, displaySize);

    if (!detections.length) {
      console.log('none!')
      setTimeout(() => onPlay());
      return
    }

    const labels = ['glen','brenda']

    const labeledFaceDescriptors = await Promise.all(
      labels.map(async label => {
        // fetch image data from urls and convert blob to HTMLImage element
        const imgUrl = `images/${label}.jpg`
        const img = await faceapi.fetchImage(imgUrl)
        
        // detect the face with the highest score in the image and compute it's landmarks and face descriptor
        const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        
        if (!fullFaceDescription) {
          throw new Error(`no faces detected for ${label}`)
        }
        
        const faceDescriptors = [fullFaceDescription.descriptor]
        return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
      })
    )

    // 0.6 is a good distance threshold value to judge
    // whether the descriptors match or not
    const maxDescriptorDistance = 0.6
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)

    const results = detections.map(fd => faceMatcher.findBestMatch(fd.descriptor));

    results.forEach((bestMatch, i) => {
      const box = detections[i].detection.box;
      const text = bestMatch.toString();
      const drawBox = new faceapi.draw.DrawBox(box, { label: text });
      drawBox.draw(canvasEL);
    })

    setTimeout(() => onPlay());
  };

  useEffect(() => {
    if (!video) {
      requestCameraAccess();
      loadModels().catch(res => console.log(res));
    }
  });

  return (
    <div style={styles.container}>
      <video
        autoPlay={true}
        onLoadedMetadata={onPlay}
        ref={video => {
          videoEL = video;
        }}
        style={styles.video}
        muted
      />
      <canvas
        ref={canvas => {
          canvasEL = canvas;
        }}
        style={styles.canvas}
      />
    </div>
  );
};

export default WebCam;
