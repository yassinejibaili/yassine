
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AbsencePage = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [students, setStudents] = useState([]);
  const history = useNavigate();

  

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/students?year=${selectedYear}&department=${selectedDepartment}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedDepartment]);

  const handleAbsenceSubmit = () => {
    const absentStudents = students.filter((student) => student.absent);
    console.log('Selected absent students:', absentStudents);
    history('/dashboard'); 
  };

  return (
    <div>
      <h2>Absence Page</h2>

      <div className="form-group">
        <label>Select Year:</label>
        <select
          className="form-control"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value="first">First Year</option>
          <option value="second">Second Year</option>
        </select>
      </div>

      <div className="form-group">
        <label>Select Department:</label>
        <select
          className="form-control"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="devdigital">Développement Digital</option>
          <option value="infra">Infrastructure Digital</option>
          <option value="gestion">Gestion des Entreprises</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Studying Matter</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.fullName}</td>
              <td>{student.studyingMatter}</td>
              <td>
                <input
                  type="radio"
                  name={`absent-${student.id}`}
                  value="Yes"
                  onChange={() => console.log(`${student.fullName} is absent`)}
                />{' '}
                Yes
                <input
                  type="radio"
                  name={`absent-${student.id}`}
                  value="No"
                  onChange={() => console.log(`${student.fullName} is not absent`)}
                />{' '}
                No
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="btn btn-primary" onClick={handleAbsenceSubmit}>
        Submit
      </button>
    </div>
  );
};

export default AbsencePage;
