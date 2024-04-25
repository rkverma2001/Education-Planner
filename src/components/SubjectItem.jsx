import "../styles/SubjectItem.css";

const SubjectItem = ({ subject, updateHours }) => {
  return (
    <div className="subject-item">
      <span className="subject-name">
        {subject.name} - {subject.hours} hours
      </span>

      <div className="hours-controls">
        <button
          onClick={() => updateHours(subject.name, -1)}
          className="hour-btn"
        >
          -
        </button>
        <span className="hours">{subject.hours}</span>
        <button
          onClick={() => updateHours(subject.name, 1)}
          className="hour-btn"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SubjectItem;
