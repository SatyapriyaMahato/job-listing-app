import React, { useState } from 'react';
import Filter from './components/Filter';
import JobCard from './components/JobCard';
import Attributes from './components/Attributes';
import JobsData from './data.json';


const App = () => {
  // storinhg filtering tags
  const [filterTags, setFilterTags] = useState([]);

  const addFilterTags = (tag) => {
    !filterTags.includes(tag) && setFilterTags([...filterTags, tag]);
  }

  // remove filtering tags
  const removeFIlterTag = (tag) => {
    setFilterTags(current => current.filter(tags => {
      return tags !== tag;
    })
    );
  }

  // remove  all filtering tags
  const removeAll = () => {
    setFilterTags([]);
  }

  const [jobsData] = useState(JobsData);

  return (
    <>
      {/* Filter bar */}
      {filterTags.length > 0 && <Filter filterTags={filterTags} removeFIlterTag={removeFIlterTag} removeAll={removeAll} />}


      {/* job cards */}
      {jobsData.map((jobs) => {

        let jobTags = [jobs.role, jobs.level, ...(jobs.languages) || [], ...(jobs.tools) || []];

        // returns true or false if jobTgas are found in the filterTags
        let filterJobs = (jobTags, filterTags) => filterTags.every((value) => jobTags.includes(value));

        // returns filtered jobCards if there is filterTags
        return filterTags.length === 0 ? (
          <div key={jobs.id}>
            <JobCard
              jobsData={jobs}
              jobTags={jobTags}
              clickedTags={addFilterTags}
            />
          </div>

        ) : (
          filterJobs(jobTags, filterTags) && (
            <JobCard
              jobsData={jobs}
              jobTags={jobTags}
              clickedTags={addFilterTags}
            />

          )
        );

      })}

      <Attributes />
    </>
  );
}



export default App;
