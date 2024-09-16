import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const ApplyForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', resume: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation message
    alert("Application Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Apply for Job</Typography>
      <TextField label="Name" fullWidth onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <TextField label="Email" fullWidth onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <TextField type="file" fullWidth onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  );
};

export default ApplyForm;
