import { useState } from "react";
import "../styles/SubjectForm.css";

const SubjectForm = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject || hours <= 0) return;
    addSubject({ name: subject, hours: parseInt(hours, 10) });
    setSubject("");
    setHours("");
  };

  return (
    <form onSubmit={handleSubmit} className="subject-form">
      <input
        type="text"
        placeholder="Enter subject name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-btn">
        Add Subject
      </button>
    </form>
  );
};

export default SubjectForm;
