import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { item1 } from "../../utils/data";
const AcceptanceModel = ({ closeModal, forwardModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setError(false);
  };
  return (
    <div className="absolute bg-black-dark w-full h-full bg-opacity-50 z-10 flex justify-center items-center">
      <div className="bg-white w-[40rem] h-[24rem] rounded-2xl p-4 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 p-4 cursor-pointer"
          onClick={closeModal}
        >
          {" "}
          <RxCross2 color="black" />
        </div>
        <h1 className="text-black-pure font-serif mb-5 font-semibold text-2xl text-center">
          Yuty
        </h1>
        <div>
          <p className="font-serif text-xs text-center text-black-pure font-medium">
            As we live and breathe, we change and evolve, as do our beauty
            routines. Discover your perfect match based on you, today.
          </p>
        </div>
        <div className="w-full ml-[17rem] max-w-max mt-4 font-semibold text-sm">
          <ol className="list-decimal text-black-pure">
            {Object.values(item1).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="px-4 mt-5 flex gap-2">
          <input
            type="checkbox"
            id="termsCheckbox"
            className="rounded border"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="termsCheckbox"
            className="text-black-pure text-xs font-medium"
          >
            I grant YUTYBAZAR Limited the right to use my age, race, image,
            likeness and/or pictures of me for internal research purposes
            including the ability to update our Yuty algorithm to improve
            analysis and product recommendations. Please read Terms and
            Conditions.
          </label>
        </div>
        <div className="flex justify-center mt-3 rounded-md">
          <button
            className="px-4 py-2 border-[1px] border-black-pure text-black-pure font-bold"
            onClick={isChecked ? forwardModal : () => setError(true)}
          >
            START
          </button>
        </div>
        {error && (
          <p className="text-red text-center mb-2">
            Please click on the Checkbox
          </p>
        )}
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

export default AcceptanceModel;
