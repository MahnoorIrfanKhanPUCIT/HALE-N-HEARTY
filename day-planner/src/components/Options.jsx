import Health from "./Health";
import Motivation from "./Motivation";
import Meditation from "./Meditation";
import Study from "./Study";

const Options = ({ name, gender, isSelected, handleBackToCards }) => {
  return (
    <div>
      <div className="d-flex flex-column w-50 text-start m-4">
        <div className="d-flex flex-row">
          {gender === "" ? (
            <img src="/boy.png" alt="boy-img" className="genderImage" />
          ) : gender === "male" ? (
            <img src="/boy.png" alt="woman-img" className="genderImage" />
          ) : gender === "female" ? (
            <img src="/woman.png" alt="woman-img" className="genderImage" />
          ) : (
            <img
              src="/transgender.png"
              alt="transgender-img"
              className="genderImage"
            />
          )}
          <h1 className="pt-2 display-4 m-4">Hi {name}</h1>
        </div>
        <h3 className="ms-4">Dream it... Wish it... Do it...</h3>
        {isSelected && (
          <button onClick={handleBackToCards} className="btn back-btn">
            Back
          </button>
        )}
      </div>
      {isSelected === "" ? (
        <div>
          <p></p>
        </div>
      ) : isSelected === "HEALTH" ? (
        <Health />
      ) : isSelected === "STUDY" ? (
        <Study />
      ) : isSelected === "MEDITATION" ? (
        <Meditation />
      ) : isSelected === "MOTIVATION" ? (
        <Motivation />
      ) : null}
    </div>
  );
};

export default Options;
