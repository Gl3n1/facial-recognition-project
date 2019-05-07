import React, { useState, useEffect, Fragment } from "react";
import * as faceapi from "face-api.js";

// import mtcnnModel from '../../weights/mtcnn_model-weights_manifest.json';
// import faceModel from '../../weights/face_recognition_model-weights_manifest.json';

const WebCam = function() {
  let styles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "40%",
    height: "40%"
  };

  let videoDOM;
  let canvasDOM;

  const [video, setVideo] = useState(false);

  const requestCameraAccess = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then(function(stream) {
          videoDOM.srcObject = stream;
          setVideo(true);
        })
        .catch(function(error) {
          console.log(`Something went wrong! ${error}`);
          setVideo(false);
        });
    }
  };

  const detectFace = async (video, canvas) => {
    try {
      await faceapi.loadMtcnnModel("./models");
      await faceapi.loadFaceRecognitionModel("./models");

      const mtcnnForwardParams = {
        // limiting the search space to larger faces for webcam detection
        minFaceSize: 200
      };

      const mtcnnResults = await faceapi.mtcnn(video, mtcnnForwardParams);

      faceapi.drawDetection(
        canvas,
        mtcnnResults.map(res => res.faceDetection),
        { withScore: false }
      );
      faceapi.drawLandmarks(
        canvas,
        mtcnnResults.map(res => res.faceLandmarks),
        { lineWidth: 4, color: "red" }
      );
    } catch (err) {
      console.log(`Trouble loading models. ${err}`);
    }
  };

  const onPlay = () => {
    console.log("hi");
  };

  useEffect(() => {
    if (!video) {
      const video = videoDOM;
      const canvas = canvasDOM;
      requestCameraAccess();
      detectFace(video, canvas);
    }
  });

  return (
    <Fragment>
      <video
        autoPlay={true}
        onPlay={onPlay()}
        style={styles}
        ref={video => {
          videoDOM = video;
        }}
        muted
      />
      <canvas
        ref={canvas => {
          canvasDOM = canvas;
        }}
        style={styles}
      />
    </Fragment>
  );
};

export default WebCam;
