import Card from "./Card";

const Cards = ({ handleCardSelect }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-4 pt-3">
      <div className="row ">
        <Card
          heading={"HEALTH"}
          emoji={"medical-check"}
          handleCardSelect={handleCardSelect}
        />
        <Card
          heading={"STUDY"}
          emoji={"open-book"}
          handleCardSelect={handleCardSelect}
        />
      </div>
      <div className="row">
        <Card
          heading={"MEDITATION"}
          emoji={"meditation"}
          handleCardSelect={handleCardSelect}
        />
        <Card
          heading={"MOTIVATION"}
          emoji={"hobbies"}
          handleCardSelect={handleCardSelect}
        />
      </div>
    </div>
  );
};

export default Cards;
