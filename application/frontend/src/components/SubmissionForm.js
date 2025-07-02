import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmissionForm = ({ submission, onReset }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    age: '',
    address: '',
    preferred_contact: 'Email'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (submission) {
      setFormData(submission);
    } else {
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        age: '',
        address: '',
        preferred_contact: 'Email'
      });
    }
    setErrors({});
  }, [submission]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.full_name.trim()) errs.full_name = 'Full name is required';

    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email format';
    }

    if (!formData.phone_number.trim()) {
      errs.phone_number = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      errs.phone_number = 'Must be 10 digits';
    }

    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      errs.age = 'Age is required';
    } else if (isNaN(age) || age < 18 || age > 120) {
      errs.age = 'Age must be between 18 and 120';
    }

    if (!formData.preferred_contact) {
      errs.preferred_contact = 'Please select a contact method';
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (submission) {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/submissions/${submission.id}`, formData);
        alert('Updated!');
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/submissions`, formData);
        alert('Submitted!');
      }

      onReset();
      window.location.reload();
    } catch (err) {
      alert('Error submitting form');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      {errors.full_name && <div className="error">{errors.full_name}</div>}

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <input
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        placeholder="Phone"
      />
      {errors.phone_number && <div className="error">{errors.phone_number}</div>}

      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        type="number"
      />
      {errors.age && <div className="error">{errors.age}</div>}

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <select name="preferred_contact" value={formData.preferred_contact} onChange={handleChange}>
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="Both">Both</option>
      </select>
      {errors.preferred_contact && <div className="error">{errors.preferred_contact}</div>}

      <button type="submit">{submission ? 'Update' : 'Submit'}</button>
      {submission && <button type="button" onClick={onReset}>Cancel</button>}
    </form>
  );
};

export default SubmissionForm;