import React, { useState } from "react";

import AcceptanceModel from "./AcceptanceModel";
import PersonalizeModel from "./PersonalizeModel";
import NameModal from "./NameModal";
import SubmissionModel from "./SubmissionModel";

const Models = ({ closeModal }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const handleCapture = (image) => {
    setUploadedImage(image); // Set captured image in the state
  };
  console.log(uploadedImage);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setUploadedImage(reader.result);
    };
  };

  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  const forwardModal = () => {
    if (step == 5) {
      closeModal();
    } else {
      setStep(step + 1);
    }
  };

  const ModalMap = {
    1: AcceptanceModel,
    2: PersonalizeModel,
    3: NameModal,
    4: SubmissionModel,
  };

  const ModalComponent = ModalMap[step];
  return (
    <>
      {
        <ModalComponent
          forwardModal={forwardModal}
          closeModal={closeModal}
          name={name}
          setName={setName}
          handleCapture={handleCapture}
          setUploadedImage={setUploadedImage}
          uploadedImage={uploadedImage}
          handleFileChange={handleFileChange}
        />
      }
    </>
  );
};

export default Models;
