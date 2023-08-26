import { useState } from "react";

const HabitBox = ({ text, handleCheck }) => {
  const [checked, setChecked] = useState(false);

  function toggleCheck() {
    setChecked(!checked);
    handleCheck(!checked);
  }
  return (
    <div className="d-flex habit-box m-4">
      <p className="pt-2">{text}</p>
      <span>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
      </span>
    </div>
  );
};

export default HabitBox;
