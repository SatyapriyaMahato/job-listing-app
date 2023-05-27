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
  const removeAll  = () =>{
    setFilterTags([]);
  }
  
  const [jobsData] = useState(JobsData);

  return (
    <>
      {filterTags.length > 0 && <Filter filterTags={filterTags} removeFIlterTag = {removeFIlterTag} removeAll = {removeAll}/>}
      <JobCard jobsData={jobsData} clickedTags = {addFilterTags}/>
      <Attributes />
    </>
  );
}


export default App;
