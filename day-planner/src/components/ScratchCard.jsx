import React from "react";

const ScratchCard = ({ children, onScratch, isRevealed }) => {
  const handleScratch = () => {
    if (!isRevealed) {
      onScratch();
    }
  };

  return (
    <div className="scratch-card-container">
      <div className="scratch-card-wrapper">
        <div
          className={`scratch-card ${isRevealed ? "revealed" : ""}`}
          onClick={handleScratch}
        >
          {children}
        </div>
        {!isRevealed && <div className="scratch-layer" />}
      </div>
    </div>
  );
};

export default ScratchCard;
