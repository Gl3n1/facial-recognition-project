import React, {useState, Fragment} from "react";

const WebCam = function() {
  let styles = {
    video: {
      height: "50vh",
      width: "100vw",
      backgroundColor: "yellow"
    }
  };

  let videoDOM;

  const [video, setVideo] = useState(false);

  const requestCameraAccess = () => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
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

  if(!video) {
    requestCameraAccess();
  }

  return (
    <Fragment>
      <video 
        autoPlay={true} 
        style={styles.video} 
        ref={video => {videoDOM = video}}
        />
    </Fragment>
  );
};

export default WebCam;
