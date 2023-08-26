import React, { useState } from "react";
import ScratchCard from "./ScratchCard";

const motivationalQuotes = [
  "Believe in yourself and all that you are...",
  "The only limit to our realization of tomorrow...",
  "Success is not final, failure is not fatal...",
  "Your time is limited, don't waste it living someone else's life...",
];

const Motivation = () => {
  const [revealedIndices, setRevealedIndices] = useState([]);

  const handleReveal = (index) => {
    if (!revealedIndices.includes(index)) {
      setRevealedIndices([...revealedIndices, index]);
    }
  };

  return (
    <div className="hobbies-container">
      <h3 className="mb-5">Here goes some motivation for you...</h3>
      <div className="scratch-card-list">
        {motivationalQuotes.map((quote, index) => (
          <ScratchCard
            key={index}
            onScratch={() => handleReveal(index)}
            isRevealed={revealedIndices.includes(index)}
          >
            {revealedIndices.includes(index) ? (
              <div className="revealed-quote">
                <h6>{quote}</h6>
              </div>
            ) : (
              <div className="hidden-quote">
                <h6>Tap to Reveal</h6>
              </div>
            )}
          </ScratchCard>
        ))}
      </div>
    </div>
  );
};

export default Motivation;
