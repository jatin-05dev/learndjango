 import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [view, setView] = useState('landing'); 
  const [tables, setTables] = useState([]);
  const [userName, setUserName] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [passInput, setPassInput] = useState('');

  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('restro_master'));
    if (saved) {
      setTables(saved);
    } else {
      const defaultTables = [
        { id: 1, name: "Table 1", capacity: 4, status: "Available", bookedBy: "", menu: "Pasta" },
        { id: 2, name: "Table 2", capacity: 2, status: "Available", bookedBy: "", menu: "Pizza" }
      ];
      setTables(defaultTables);
      localStorage.setItem('restro_master', JSON.stringify(defaultTables));
    }
  }, []);

  const updateStorage = (data) => {
    setTables(data);
    localStorage.setItem('restro_master', JSON.stringify(data));
  };

  const handleBooking = (id) => {
    if (!userName) return alert("Enter name");

    const updated = tables.map(t =>
      t.id === id ? { ...t, status: 'Reserved', bookedBy: userName } : t
    );
    updateStorage(updated);
  };

  const handleLeave = (id) => {
    const updated = tables.map(t =>
      t.id === id ? { ...t, status: 'Available', bookedBy: '' } : t
    );
    updateStorage(updated);
  };

  return (
    <div className="container">

      <h1>Bhojan App</h1>

      {/* NAV */}
      <div className="nav">
        <button onClick={() => setView('landing')}>Home</button>
        <button onClick={() => setView('user')}>User</button>
        <button onClick={() => setView('admin')}>Admin</button>
      </div>

      {/* LANDING */}
      {view === 'landing' && (
        <div className="box">
          <h2>Welcome to Bhojan</h2>
          <button onClick={() => setView('user')}>Book Table</button>
        </div>
      )}

      {/* ADMIN */}
      {view === 'admin' && (
        <div className="box">
          {!isAdminLoggedIn ? (
            <>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassInput(e.target.value)}
              />
              <button onClick={() => {
                if (passInput === ADMIN_PASSWORD) setIsAdminLoggedIn(true);
                else alert("Wrong Password");
              }}>
                Login
              </button>
            </>
          ) : (
            <>
              <h3>Add Table</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.target);

                const newTable = {
                  id: Date.now(),
                  name: f.get('name'),
                  capacity: f.get('capacity'),
                  menu: f.get('menu'),
                  status: "Available",
                  bookedBy: ""
                };

                updateStorage([...tables, newTable]);
                e.target.reset();
              }}>
                <input name="name" placeholder="Table Name" required />
                <input name="capacity" type="number" placeholder="Seats" required />
                <input name="menu" placeholder="Menu" required />
                <button>Add</button>
              </form>

              <h3>All Tables</h3>
              {tables.map(t => (
                <div key={t.id} className="card">
                  <p><b>{t.name}</b> ({t.capacity})</p>

                  <p style={{color: t.status === 'Reserved' ? 'red' : 'green'}}>
                    Status: {t.status}
                  </p>

                  <p>
                    Booked By: {t.bookedBy ? t.bookedBy : "None"}
                  </p>

                  <button onClick={() => updateStorage(tables.filter(x => x.id !== t.id))}>
                    Delete
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* USER */}
      {view === 'user' && (
        <div className="box">
          <input
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {tables.map(t => (
            <div key={t.id} className="card">
              <h3>{t.name}</h3>
              <p>Seats: {t.capacity}</p>
              <p>Menu: {t.menu}</p>

              {t.status === 'Available' ? (
                <button onClick={() => handleBooking(t.id)}>Book</button>
              ) : (
                t.bookedBy === userName ? (
                  <button onClick={() => handleLeave(t.id)}>Cancel</button>
                ) : (
                  <p style={{color: "red"}}>Already Booked</p>
                )
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default App;