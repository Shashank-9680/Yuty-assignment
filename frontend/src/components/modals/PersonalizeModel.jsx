import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { item2 } from "../../utils/data";
import { Link } from "react-router-dom";
import CameraPage from "../camera/CameraPage";
const PersonalizeModel = ({
  closeModal,
  forwardModal,
  uploadedImage,
  setUploadedImage,
  handleCapture,
  handleFileChange,
}) => {
  const inputRef = React.useRef(null);
  // const [uploadedImage, setUploadedImage] = useState(null);
  // const handleCapture = (image) => {
  //   setUploadedImage(image); // Set captured image in the state
  // };
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setUploadedImage(URL.createObjectURL(file));
  //   console.log(uploadedImage);
  // };

  return (
    <div className="absolute bg-black-dark w-full h-full bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white w-[40rem] h-[26rem] rounded-2xl p-4 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 p-2 cursor-pointer"
          onClick={closeModal}
        >
          <RxCross2 color="black" />
        </div>
        <h1 className="text-black-pure font-serif mb-2 font-semibold text-2xl text-center">
          Yuty
        </h1>
        <div className="flex w-full h-[18rem]">
          <div className="bg-black-pure w-2/5 relative">
            <CameraPage
              onCapture={handleCapture}
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
            />
          </div>
          <div className="w-3/5 border border-black-pure  text-black-pure relative ">
            <p className="text-center font-semibold font-serif">CAMERA TIPS</p>
            <div className="border-t border-black-pure"></div>
            <div className="mt-1">
              <p className="text-xs px-4 py-2 font-medium">
                Help Yuty make more accurate recommendations by doing the
                following:
              </p>
            </div>
            <div className="w-[70%] ml-[3rem]">
              <ol className="list-decimal text-black-pure text-xs font-medium">
                {Object.values(item2).map((item) => (
                  <li key={item} className="py-1">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="absolute w-full bottom-0 border-t-2 border-grey-dark">
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
                ref={inputRef}
              />
              {uploadedImage ? (
                <p
                  className="text-center font-serif font-semibold cursor-pointer"
                  onClick={forwardModal}
                >
                  Next
                </p>
              ) : (
                <p
                  className="text-center font-serif font-semibold cursor-pointer"
                  onClick={() => inputRef.current.click()}
                >
                  Upload Image
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-right p-2 text-sm">
          <Link to="/">
            <p className="font-semibold text-black-pure">
              Skip Selfie &#12297;
            </p>
          </Link>
        </div>
        <div className="bg-[#ccc] absolute left-0 bottom-0 w-full text-center">
          <p className="text-black-pure">
            Powered By{" "}
            <span className="font-bold text-xl text-black-pure">Yuty</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalizeModel;
