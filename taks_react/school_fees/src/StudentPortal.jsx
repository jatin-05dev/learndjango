 import React, { useState } from 'react';
import './Student.css';

const StudentPortal = ({ students, saveToLocal }) => {
  const [idInput, setIdInput] = useState('');
  const [user, setUser] = useState(null);

  const checkDues = () => {
    const found = students.find(s => s.id === idInput);
    if (found) {
      setUser(found);
    } else {
      alert("Not Found!");
    }
  };

  return (
    <div className="student-container">

      {!user ? (
        <div className="login-box">
          <h2>Student Login</h2>

          <input
            placeholder="Enter ID"
            onChange={(e) => setIdInput(e.target.value)}
          />

          <button onClick={checkDues}>
            Check Dues
          </button>
        </div>
      ) : (
        <div className="details-box">
          <h3>{user.name}</h3>
          <p>Class: {user.class}</p>
          <p>ID: {user.id}</p>

          <hr />

          <p>
            <b>Remaining Fees:</b> ₹{user.totalFees - user.paidFees}
          </p>

          {user.status === 'Pending' ? (
            <button onClick={() => {
              const updated = students.map(s =>
                s.id === user.id
                  ? { ...s, status: 'Done', paidFees: s.totalFees }
                  : s
              );

              saveToLocal(updated);
              setUser({ ...user, status: 'Done', paidFees: user.totalFees });

              alert("Fees Paid!");
            }}>
              Pay Now
            </button>
          ) : (
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Paid Fully
            </p>
          )}
        </div>
      )}

    </div>
  );
};

export default StudentPortal;