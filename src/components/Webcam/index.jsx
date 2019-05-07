import React, {useState, useEffect, Fragment} from "react";
import * as faceapi from 'face-api.js';

// import mtcnnModel from '../../weights/mtcnn_model-weights_manifest.json';
// import faceModel from '../../weights/face_recognition_model-weights_manifest.json';

const WebCam = function() {
  let styles = {
    video: {
      height: "50vh",
      width: "100vw",
      backgroundColor: "yellow"
    }
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
          setVideo(false)
        });
    }
  };

 const detectFace = async () => {

  try {
    await faceapi.loadMtcnnModel('./models');
    // await faceapi.loadFaceRecognitionModel('../../weights/face_recognition_model-weights_manifest.json');
  } catch(err) {
    console.log(`Trouble loading models. ${err}`)
  }
    

    // const mtcnnForwardParams = {
    //   // limiting the search space to larger faces for webcam detection
    //   minFaceSize: 200
    // }
    
    // const mtcnnResults = await faceapi.mtcnn(videoDOM, mtcnnForwardParams)
    
    // faceapi.drawDetection(canvasDOM, mtcnnResults.map(res => res.faceDetection), { withScore: false })
    // faceapi.drawLandmarks(canvasDOM, mtcnnResults.map(res => res.faceLandmarks), { lineWidth: 4, color: 'red' })    
  }

  useEffect(()=>{
    if(!video) {
      requestCameraAccess();
      detectFace();
    }
  })

  return (
    <Fragment>
      <video 
        autoPlay={true} 
        style={styles.video} 
        ref={video => {videoDOM = video}}
        />
      <canvas 
        ref={canvas => {canvasDOM = canvas}}
      />
    </Fragment>
  );
};

export default WebCam;
