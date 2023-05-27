import React from 'react';

const JobCard = ({ jobsData, clickedTags }) => {
    return (
        <>
            {jobsData.map((job) => {
                const tags = [job.role, job.level, ...job.languages, ...job.tools];
                return (
                    <div className="job" key={job.id}>
                        <div className="job-info">
                            <div className="company-logo">
                                <img src={job.logo} alt="company logo" />
                            </div>
                            <div className="post-info">
                                <div className="company-name">
                                    <p className="name">{job.company}</p>
                                    {job.new && <button className="btn new">NEW!</button>}
                                    {job.featured && <button className="btn featured">FEATURED</button>}
                                </div>
                                <div className="job-title">
                                    <h1>{job.position}</h1>
                                </div>
                                <div className="job-criteria">
                                    <ul>
                                        <li className="days"><span>{job.postedAt}</span></li>
                                        <li><span className="time">{job.contract}</span></li>
                                        <li><span className="location">{job.location}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="job-tags">
                            {tags.map(tag => {
                                return (
                                    <button className="btn tag" key={tag} onClick={() => clickedTags(tag)}>{tag}</button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default JobCard;

