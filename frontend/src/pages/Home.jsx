import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/header/Header.jsx";
import AcceptanceModel from "../components/modals/AcceptanceModel.jsx";
import Models from "../components/modals/Models.jsx";
const Home = () => {
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);
  return (
    <div className="relative w-screen h-screen">
      {acceptModalOpen && (
        <Models
          closeModal={() => {
            setAcceptModalOpen(false);
          }}
        />
      )}
      <Header />
      <div className="flex justify-center items-center flex-wrap">
        <ProductCard setAcceptModalOpen={setAcceptModalOpen} />
      </div>
    </div>
  );
};

export default Home;
