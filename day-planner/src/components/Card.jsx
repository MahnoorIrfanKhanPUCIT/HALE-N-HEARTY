const Card = ({ heading, emoji, handleCardSelect }) => {
  const handleClick = () => {
    handleCardSelect(heading);
  };

  return (
    <div className="col-md-6 mb-5 ps-5" onClick={handleClick}>
      <div className="card" style={{ width: "20rem", height: "15rem" }}>
        <div className="card-body">
          <h3 className="mb-3">{heading}</h3>
          <img src={`/${emoji}.png`} alt="emoji-img" className="card-img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
