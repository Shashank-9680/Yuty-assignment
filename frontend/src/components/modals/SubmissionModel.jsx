import React from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const SubmissionModel = ({ closeModal, name, uploadedImage }) => {
  const handleSubmit = async () => {
    try {
      const data = {
        imageData: uploadedImage,
        name: name,
      };

      await axios.post("http://localhost:8080/api/upload", data, {
        "Content-Type": "multipart/form-data",
      });
      alert("Succesfull Submitted");
      closeModal();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error! Please try again");
      closeModal();
    }
  };
  return (
    <div className="absolute bg-black-dark w-full h-full bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white w-[40rem] h-[25rem] rounded-2xl p-4 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 p-4 cursor-pointer"
          onClick={closeModal}
        >
          {" "}
          <RxCross2 color="black" />
        </div>
        <h1 className="text-black-pure font-serif mb-3 font-semibold text-2xl text-center">
          Yuty
        </h1>
        <div className="text-center flex  flex-col items-center gap-2">
          <p className="text-black-pure text-2xl font-serif">
            Please verify your details
          </p>

          <div>
            <p className="text-black-pure text-xl font-medium">
              Hello {name} How are You!{" "}
            </p>
          </div>
          <div className="h-[10rem] bg-black-pure flex justify-center w-[50%] inset-0 object-cover">
            <img src={uploadedImage} alt="" srcset="" />
          </div>
          <div className="flex justify-center mt-3 rounded-md">
            <button
              className="px-3 py-1 border-[1px] border-black-pure text-black-pure font-bold"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModel;
