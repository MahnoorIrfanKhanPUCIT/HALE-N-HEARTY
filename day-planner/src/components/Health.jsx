import { useState } from "react";
import HabitBox from "./HealthBox";

const healthyHabits = [
  { text: "Drink water", checked: false },
  { text: "Personal hygiene", checked: false },
  { text: "Proper planned meals", checked: false },
  { text: "Vitamins and supplements", checked: false },
  { text: "Eating fruits", checked: false },
  { text: "Walk and excercise", checked: false },
];

const Health = () => {
  const [checkCount, setCheckCount] = useState(0);

  function handleCheck(checked) {
    setCheckCount(checkCount + (checked ? 1 : -1));
    console.log(checkCount);
  }

  return (
    <div>
      <div className="health-columns">
        <div className="health-column">
          {healthyHabits.slice(0, 3).map((habit) => (
            <HabitBox text={habit.text} handleCheck={handleCheck} />
          ))}
        </div>
        <div className="health-column">
          {healthyHabits.slice(3, 6).map((habit) => (
            <HabitBox text={habit.text} handleCheck={handleCheck} />
          ))}
        </div>
      </div>
      <h4>Successsfully completed {checkCount} practices</h4>
    </div>
  );
};

export default Health;
