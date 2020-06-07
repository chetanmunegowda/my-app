import React from 'react';
import './App.css';
import Header from "./Header";
import Education from "./Education";
import Accomplishments from "./Accomplishments";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";
import Summary from "./Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className="first-col-container">
          <Summary />
          <WorkHistory />
          <Education />
          <Accomplishments />
        </div>
        <div className="second-col-container">
          <PersonalInfo />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
