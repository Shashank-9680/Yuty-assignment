import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const NameModal = ({ closeModal, forwardModal, name, setName }) => {
  const [warningText, setWarningText] = useState(null);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="absolute bg-black-dark w-full h-full bg-opacity-50 z-10 flex justify-center items-center">
      <div
        className="bg-white w-[40rem] h-[19rem] rounded-2xl p-4 relative overflow-hidden"
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
      >
        <div
          className="absolute right-0 top-0 p-2 cursor-pointer"
          onClick={closeModal}
        >
          {" "}
          <RxCross2 color="black" />
        </div>
        <h1 className="text-black-pure font-serif mb-2 font-semibold text-2xl text-center">
          Yuty
        </h1>
        <div className="flex flex-col justify-center items-center gap-7">
          <div className="text-center p-2">
            <p className="text-black-pure text-2xl font-serif">
              Enter The Name
            </p>
          </div>
          <div className="flex justify-center items-center bg-white">
            <input
              type="text"
              name="text"
              className="block p-2.5 w-[18rem] bg-white text-sm rounded-lg border  text-black-pure outline-none "
              placeholder="Enter Name"
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          {warningText && (
            <p className="text-red text-sm font-medium text-center -my-4">
              {warningText}
            </p>
          )}
          <button
            className="text-black-pure border border-grey-dark   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={() =>
              name.length == 0
                ? setWarningText("Please enter the name")
                : forwardModal()
            }
          >
            Next
          </button>
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

export default NameModal;
