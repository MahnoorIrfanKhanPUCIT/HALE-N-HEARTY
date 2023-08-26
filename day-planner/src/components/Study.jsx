import { useState } from "react";
import StudyBox from "./StudyBox";

const Study = () => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState(0);
  const [studyList, setStudyList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!task || hour <= 0) return;

    setStudyList([...studyList, { task, hour }]);

    setTask("");
    setHour(0);
  }

  function handleDelete(index) {
    setStudyList(studyList.filter((_, i) => i !== index));
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="study">
        <h3 className="mb-5">
          Add your study tasks and timing along with them.
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter study subject..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter number of hours..."
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Add
          </button>
        </form>
        <div>
          {studyList.length > 0 && (
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
              <div className="d-flex study-box studySub-box ms-1">
                <h5>SUBJECTS</h5>
                <h5>HOURS</h5>
              </div>
            </div>
          )}
          {studyList.map((study, index) => (
            <StudyBox
              key={index}
              task={study.task}
              hour={study.hour}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Study;
