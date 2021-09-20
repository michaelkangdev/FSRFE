import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Jobs } from './components/Jobs';
import './App.css';
import { JobTable } from './components/JobTable';


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://54.153.139.15/jobs').then(
      response => response.json().then(data => {
        setJobs(data);
      })
    );


  }, []);
  

  return (
    <div className="App">
      <Container>
        <JobTable jobs={jobs} />
      </Container>
    </div>
  );
}

export default App;
