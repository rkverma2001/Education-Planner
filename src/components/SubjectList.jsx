import SubjectItem from "./SubjectItem";
import "../styles/SubjectList.css";

const SubjectList = ({ subjects, updateHours }) => {
  return (
    <div className="subject-list">
      {subjects.map((subject, index) => (
        <SubjectItem key={index} subject={subject} updateHours={updateHours} />
      ))}
    </div>
  );
};

export default SubjectList;
