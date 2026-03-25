 import React, { useState } from 'react';
import './Admin.css';

const AdminPortal = ({ students, saveToLocal }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [pass, setPass] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ id: '', name: '', class: '', totalFees: '' });

  const handleDelete = (id) => {
    if (window.confirm("Delete karna hai?")) {
      const updated = students.filter(s => s.id !== id);
      saveToLocal(updated);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = students.map(s =>
        s.id === editingId ? { ...s, ...form, totalFees: Number(form.totalFees) } : s
      );
      saveToLocal(updated);
      setEditingId(null);
    } else {
      if (students.find(s => s.id === form.id)) {
        alert("ID already exists");
        return;
      }

      saveToLocal([
        ...students,
        { ...form, totalFees: Number(form.totalFees), paidFees: 0, status: 'Pending' }
      ]);
    }

    setForm({ id: '', name: '', class: '', totalFees: '' });
  };

  // 🔐 LOGIN
  if (!isLogged) {
    return (
      <div className="login-box">
        <h3>Admin Login</h3>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={() => pass === "admin123" ? setIsLogged(true) : alert("Wrong Password")}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="admin-container">

      {/* FORM */}
      <div className="form-box">
        <h3>{editingId ? 'Update Student' : 'Add Student'}</h3>

        <form onSubmit={handleSubmit}>
          <input
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            placeholder="ID"
            disabled={!!editingId}
            required
          />

          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            required
          />

          <input
            value={form.class}
            onChange={(e) => setForm({ ...form, class: e.target.value })}
            placeholder="Class"
            required
          />

          <input
            type="number"
            value={form.totalFees}
            onChange={(e) => setForm({ ...form, totalFees: e.target.value })}
            placeholder="Fees"
            required
          />

          <button>
            {editingId ? 'Update' : 'Save'}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ id: '', name: '', class: '', totalFees: '' });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* TABLE */}
      <div className="table-box">
        <h3>Student List</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Fees</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>
                  {s.name} <br />
                  <small>ID: {s.id}</small>
                </td>

                <td>₹{s.totalFees}</td>

                <td style={{ color: s.status === 'Done' ? 'green' : 'red' }}>
                  {s.status}
                </td>

                <td>
                  {s.status === 'Done' ? (
                    <button onClick={() => handleDelete(s.id)}>Delete</button>
                  ) : (
                    <button onClick={() => { setEditingId(s.id); setForm(s); }}>
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && <p>No students found</p>}
      </div>
    </div>
  );
};

export default AdminPortal;