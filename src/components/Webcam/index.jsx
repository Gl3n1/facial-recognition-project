import React, { useState, useEffect, Fragment } from "react";
import * as faceapi from "face-api.js";

import glen from "../../faces/glen.jpg";

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
  let imageEL;

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

    // draw detections into the canvas
    faceapi.draw.drawDetections(canvasEL, resizedResults);
    faceapi.draw.drawFaceLandmarks(canvasEL, resizedResults);

    if (!detections.length) {
      console.log('none!')
      setTimeout(() => onPlay());
      return
    }

    // create FaceMatcher with automatically assigned labels
    // from the detection results for the reference image
    // should only be done once
    const faceMatcher = new faceapi.FaceMatcher(detections);

    const results = await faceapi
      .detectAllFaces(imageEL)
      .withFaceLandmarks()
      .withFaceDescriptors();

    console.log(results)

    let text = [];

    results.forEach(fd => {
      const bestMatch = faceMatcher.findBestMatch(fd.descriptor)
      console.log(bestMatch.toString())
      text = [bestMatch.toString()]
    })

    const anchor = { x: resizedResults[0].alignedRect.box.x, y: resizedResults[0].alignedRect.box.y }
    // see DrawTextField below
    const drawOptions = {
      anchorPosition: 'TOP_LEFT',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
    const drawBox = new faceapi.draw.DrawTextField(text, anchor, drawOptions)
    drawBox.draw(canvasEL)

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
      <img
        ref={image => {
          imageEL = image;
        }}
        src={glen}
        alt="me"
        width="100%"
      />
    </div>
  );
};

export default WebCam;
