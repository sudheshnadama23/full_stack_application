import React, { useState } from 'react';
import SubmissionForm from './components/SubmissionForm';
import SubmissionsTable from './components/SubmissionsTable';

function App() {
  const [editingSubmission, setEditingSubmission] = useState(null);

  return (
    <div className="App">
      <h1>Form Management</h1>
      <SubmissionForm submission={editingSubmission} onReset={() => setEditingSubmission(null)} />
      <SubmissionsTable onEdit={setEditingSubmission} />
    </div>
  );
}

export default App;