import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionsTable = ({ onEdit }) => {
  const [submissions, setSubmissions] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/submissions`);
      setSubmissions(res.data);
    } catch (err) {
      console.error('Error fetching submissions:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/submissions/${id}`);
      fetchData(); // refresh list
    } catch (err) {
      console.error('Error deleting submission:', err);
    }
  };

  return (
    <div>
      <h2>All Submissions</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Address</th>
            <th>Preferred Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((s) => (
            <tr key={s.id}>
              <td>{s.full_name}</td>
              <td>{s.email}</td>
              <td>{s.phone_number}</td>
              <td>{s.age}</td>
              <td>{s.address}</td>
              <td>{s.preferred_contact}</td>
              <td>
                <button onClick={() => onEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s.id)} style={{ marginLeft: '10px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionsTable;