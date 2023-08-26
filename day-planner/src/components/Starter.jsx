import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const Starter = ({ name, setName, gender, setGender, handleClick }) => {
  return (
    <div className="starter d-flex flex-column justify-content-center align-items-center container w-50 pb-5 mt-5">
      <h1 className="pt-2 display-2">Nice to meet you</h1>
      <div class="input-group mb-3 w-50 mt-5">
        <span class="input-group-text" id="basic-addon1">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="What's your name?"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <select
        className="form-select w-50 mt-3"
        aria-label="Default select example"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <h4 className="mt-5">Create the life you 🤍</h4>
      <button className="next-btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faGreaterThan} />
      </button>
    </div>
  );
};

export default Starter;
