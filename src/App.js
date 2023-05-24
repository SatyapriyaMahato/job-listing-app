import './App.css';
import jobsData from './data.json';


function App() {
  return (
    <div className="App">
      <div className="filter div-shadow">
        <div className="filter-tags" id="fiter-tags">
          <button type="button" className="filter-button">
            <span className="button__text">Download</span>
            <span className="button__icon">
              <img src="./images/icon-remove.svg" alt="cross icon" />
            </span>
          </button>
        </div>
        <div className="clear-button">
          <button className='btn-clear'>Clear</button>
        </div>
      </div>
      {
        jobsData.map(job => {
          return (
            <div className="job div-shadow" key={job.id}>
              <div className="job-info">
                <div className="company-logo">
                  <img src={job.logo} alt="company logo" />
                </div>
                <div className="post-info">
                  <div className="company-name">
                    <p className="name">{job.company}</p>
                    {job.new && <button className="new">NEW!</button>}
                    {job.featured && <button className="featured">FEATURED</button>}
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
                {job.languages.map(language => {
                  return (
                    <button className="tag" key={language}>{language}</button>
                  )
                })}
                {job.tools.map(tool => {
                  return (
                    <button className="tag" key={tool} >{tool}</button>
                  )
                })}
                <button className="tag" >{job.role}</button>
                <button className="tag" >{job.level}</button>
              </div>

            </div>
          )
        })
      }
      <div classNmae="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/SatyapriyaMahato">Satyapriya Mahato</a>.
      </div>
    </div>
  );
}


export default App;
