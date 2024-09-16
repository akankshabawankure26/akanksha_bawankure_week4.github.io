import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import JobList from '../components/JobList';

const JobBoard = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    job.location.includes(locationFilter) &&
    job.type.includes(jobTypeFilter)
  );

  const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter locationFilter={locationFilter} setLocationFilter={setLocationFilter} jobTypeFilter={jobTypeFilter} setJobTypeFilter={setJobTypeFilter} />
      <JobList jobs={paginatedJobs} />

      <div>
        {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
