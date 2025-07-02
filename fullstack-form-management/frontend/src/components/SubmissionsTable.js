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
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>All Submissions</h2>
      {submissions.length > 0 ? (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={th}>Full Name</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Age</th>
              <th style={th}>Address</th>
              <th style={th}>Preferred Contact</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td style={td}>{s.full_name}</td>
                <td style={td}>{s.email}</td>
                <td style={td}>{s.phone_number}</td>
                <td style={td}>{s.age}</td>
                <td style={td}>{s.address}</td>
                <td style={td}>{s.preferred_contact}</td>
                <td style={td}>
                  <button onClick={() => onEdit(s)} style={editBtn}>Edit</button>
                  <button onClick={() => handleDelete(s.id)} style={deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: '#888' }}>No submissions available.</p>
      )}
    </div>
  );
};

const th = {
  padding: '12px',
  border: '1px solid #ddd',
  textAlign: 'left',
  fontWeight: 'bold',
};

const td = {
  padding: '12px',
  border: '1px solid #ddd',
};

const editBtn = {
  padding: '6px 12px',
  marginRight: '10px',
  backgroundColor: '#1976D2',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const deleteBtn = {
  padding: '6px 12px',
  backgroundColor: '#D32F2F',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default SubmissionsTable;