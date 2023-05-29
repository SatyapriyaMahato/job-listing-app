import React from 'react';

const JobCard = ({ jobsData, jobTags, clickedTags }) => {

    return (

        <div className="job" key={jobsData.id}>
            <div className="job-info">
                <div className="company-logo">
                    <img src={jobsData.logo} alt="company logo" />
                </div>
                <div className="post-info">
                    <div className="company-name">
                        <p className="name">{jobsData.company}</p>
                        {jobsData.new && <button className="btn new">NEW!</button>}
                        {jobsData.featured && <button className="btn featured">FEATURED</button>}
                    </div>
                    <div className="job-title">
                        <h1>{jobsData.position}</h1>
                    </div>
                    <div className="job-criteria">
                        <ul>
                            <li>{jobsData.postedAt}</li>
                            <li>{jobsData.contract}</li>
                            <li>{jobsData.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="job-tags">
                {jobTags && Array.isArray(jobTags) && jobTags.map((tag, index) => {
                    return (
                        <button className="btn tag" key={index} onClick={() => clickedTags(tag)}>{tag}</button>
                    )
                })}

            </div>
        </div>

    )
}

export default JobCard;

