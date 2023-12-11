import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from '../src/Components/absences/Navbar';
import HomePage from '../src/Components/absences/Homepage';
import SignUpStudent from '../src/Components/absences/SignUpStudent';
import Login from '../src/Components/absences/Login';
import SignUpTeacher from '../src/Components/absences/SignUpTeacher';
import AbsencePage from '../src/Components/absences/absence';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Homepage" element={<HomePage />} />
          <Route path="/signup/student" element={<SignUpStudent />} />
          <Route path="/signup/teacher" element={<SignUpTeacher />} />
          <Route path="/login" element={<Login />} />
          <Route path="/absence" element={<AbsencePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;




