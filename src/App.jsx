import React from 'react';
import './App.css';
import './components/components.css'
import ProjectCard from './components/components.js';
import VideoBackground from './components/videoBackground.js';
import video from './assets/Gradient_5.mp4';

function App() {
     return (
          <div className="App">
               <VideoBackground src={video} />
               <div className='SeanPletan'>Shami</div>
               <div className='buffer'></div>
               <div className='projectsHeading'>PROJECTS</div>
               <div className='projects'>
                    <ProjectCard cardTitle="CARDTITLE" cardText="CARDTEXT" imgName="escher" colorClass="orange" href="/three.html"/>
                    <ProjectCard cardTitle="CARDTITLE" cardText="CARDTEXT" imgName="griffith" colorClass="blue"/>
                    <ProjectCard cardTitle="CARDTITLE" cardText="CARDTEXT" imgName="bosch" colorClass="purple"/>
                    <ProjectCard cardTitle="CARDTITLE" cardText="CARDTEXT" imgName="bosch" colorClass="orange"/>
                    <ProjectCard cardTitle="CARDTITLE" cardText="CARDTEXT" imgName="bosch" colorClass="blue"/>
               </div>
               <div className='buffer'></div>
          </div>
     );
}

export default App;
