import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography>{job.location}</Typography>
        <Typography>{job.description}</Typography>
        <Button variant="contained" color="primary">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
