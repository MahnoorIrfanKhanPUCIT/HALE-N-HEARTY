const StudyBox = ({ task, hour, index, handleDelete }) => {
  return (
    <div className="d-flex justify-content-center align-items-center ms-5">
      <div className="d-flex study-box m-4">
        <h5>{task}</h5>
        <h5>{hour}</h5>
      </div>
      <button className="delete-btn" onClick={() => handleDelete(index)}>
        ❌
      </button>
    </div>
  );
};

export default StudyBox;
