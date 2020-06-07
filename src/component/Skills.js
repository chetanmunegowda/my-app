import React from 'react';
import './Skills.css'

export default class Skills extends React.Component {
  render () {
    const skillObj = [
      'Development of UI in Redux, RxJs and Ngrx Store design patterns using Angular Framework',
      'Development of restful services using Node.js, Sequelize framework, lodash, AWS SDK library',
      'Write unit and automated test scripts using Jasmine, Mocha, Chai, Karma, JUnit and Selenium frameworks'
    ];

    const softwareObj = [
      'Visual Studio Code',
      'Git',
      'Google Analytics',
      'Sequel Pro',
      'MS Excel',
      'Terminal',
      'Slack',
      'JIRA',
      'Confluence'
    ];

    const languageObj = ['HTML', 'JavaScript', 'MySql', 'CSS', 'Unix'];

    const interestsObj = ['Volunteer, Listen to Indian Classical Music, Cook, Travel, Watch Movies, Read Books, and Learn new technologies'];

    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <ul>
        {
          skillObj.map((skill, index) => <li key={index}>{skill}</li>)
        }
        </ul>

        <h2>Software</h2>
        <ul>
          {
            softwareObj.map((software, index) => <li key={index}>{software}</li>)
          }
        </ul>

        <h2>Languages</h2>
        <ul>
        {
          languageObj.map((language, index) => <li key={index}>{language}</li>)
        }
        </ul>

       <h2>Interests</h2>
        <ul>
        {
          interestsObj.map((interest, index) => <li key={index}>{interest}</li>)
        }
        </ul>
      </div>
    );
  }
}
