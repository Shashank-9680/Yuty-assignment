import React, { useState, useEffect } from "react";

const CameraPage = ({ onCapture, uploadedImage, setUploadedImage }) => {
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(false);
  const videoRef = React.useRef(null);

  const startCamera = async () => {
    setUploadedImage(null);
    setCapturedImage(false);

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      videoRef.current.srcObject = mediaStream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL("image/png");
    setCapturedImage(true);
    onCapture(imageDataUrl);
    stopCamera();
  };

  const resetCapture = () => {
    setCapturedImage(false);
    setUploadedImage(null);
    startCamera();
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null); // Set stream to null after stopping
    }
  };

  useEffect(() => {
    if (uploadedImage) {
      stopCamera(); // Stop the camera if an image is uploaded
    }
  }, [uploadedImage]); // Dependency array ensures this effect runs only when uploadedImage changes

  return (
    <div className="w-full h-full relative">
      <div className="h-full w-full">
        {uploadedImage || capturedImage ? (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={uploadedImage}
              alt="Captured"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="h-full w-full object-cover -scale-x-[1]"
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-1/2">
        {!uploadedImage && !capturedImage && !stream && (
          <button onClick={startCamera}>Start Camera</button>
        )}

        {stream && !capturedImage && (
          <button onClick={captureImage}>Capture</button>
        )}
        {capturedImage && <button onClick={resetCapture}>Retake</button>}
      </div>
    </div>
  );
};

export default CameraPage;
