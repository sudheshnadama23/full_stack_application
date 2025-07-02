import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/submissions')
      .then(res => setData(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Submissions</h2>
      {data.length > 0 ? (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Age</th>
              <th style={th}>Preferred Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.map(entry => (
              <tr key={entry.id}>
                <td style={td}>{entry.full_name}</td>
                <td style={td}>{entry.email}</td>
                <td style={td}>{entry.phone_number}</td>
                <td style={td}>{entry.age}</td>
                <td style={td}>{entry.preferred_contact}</td>
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

export default SubmissionTable;