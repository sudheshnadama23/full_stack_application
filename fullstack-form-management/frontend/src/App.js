import React, { useState } from 'react';
import SubmissionForm from './components/SubmissionForm';
import SubmissionsTable from './components/SubmissionsTable';

function App() {
  const [editingSubmission, setEditingSubmission] = useState(null);

  return (
    <div className="App">
     <h1 style={{
  textAlign: 'center',
  marginTop: '30px',
  fontSize: '2rem',
  color: '#333',
  borderBottom: '2px solid #4CAF50',
  paddingBottom: '10px',
  maxWidth: '600px',
  margin: '30px auto'
}}>
  Form Management
</h1>
      <SubmissionForm submission={editingSubmission} onReset={() => setEditingSubmission(null)} />
      <SubmissionsTable onEdit={setEditingSubmission} />
    </div>
  );
}

export default App;