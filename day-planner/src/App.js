import Starter from "./components/Starter";
import Cards from "./components/Cards";
import Options from "./components/Options";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [isViewingContent, setIsViewingContent] = useState(false);

  function handleClick() {
    if (name !== "" && gender !== "") {
      setIsClicked(true);
    }
  }

  function handleCardSelect(selectedCard) {
    setIsSelected(selectedCard);
  }

  function handleBackToCards() {
    setIsViewingContent(false);
    setIsSelected("");
  }

  return (
    <div>
      {isClicked ? (
        <div>
          <Options
            name={name}
            gender={gender}
            isSelected={isSelected}
            handleCardSelect={handleCardSelect}
            handleBackToCards={handleBackToCards}
          />
          {isSelected === "" && (
            <Cards
              isSelected={isSelected}
              handleCardSelect={handleCardSelect}
            />
          )}
        </div>
      ) : (
        <Starter
          name={name}
          setName={setName}
          gender={gender}
          setGender={setGender}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
