
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/submissions').then(res => setData(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Submissions</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Age</th><th>Preferred Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry.id}>
              <td>{entry.full_name}</td>
              <td>{entry.email}</td>
              <td>{entry.phone_number}</td>
              <td>{entry.age}</td>
              <td>{entry.preferred_contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
