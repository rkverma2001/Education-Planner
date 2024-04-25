import { useEffect, useState } from "react";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";
import "./App.css";

const App = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("subjects");
    if (data) {
      setSubjects(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, newSubject]);
  };

  const updateHours = (name, delta) => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject.name === name) {
        return { ...subject, hours: Math.max(0, subject.hours + delta) };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
  };

  return (
    <div className="app">
      <h1>Education Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} updateHours={updateHours} />
    </div>
  );
};

export default App;
