 import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import AdminPortal from './AdminPortal';
import StudentPortal from './StudentPortal';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('school_students')) || [];
    setStudents(saved);
  }, []);

  const saveToLocal = (data) => {
    setStudents(data);
    localStorage.setItem('school_students', JSON.stringify(data));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-cyan-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin" element={<AdminPortal students={students} saveToLocal={saveToLocal} />} />
          <Route path="/student" element={<StudentPortal students={students} saveToLocal={saveToLocal} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;