import React from 'react';
import './Education.css'

class Education extends React.Component {
  render () {
    const educationInfo = [{
      gradDate: 'Dec 2016',
      degree: 'Master of Science',
      field: 'Information Technology And Management',
      college: 'Illinois Institute of Technology',
      place: 'Chicago, IL'
    }, {
      gradDate: 'Jun 2010',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      college: 'Bangalore Institute of Technology',
      place: 'Bangalore'
    }];

    return (
      <div className="education-container">
        <h2>Education</h2>
        {
          educationInfo.map((educationItem, index) => (
            <div className="education-container-item" key={index}>
              <p>{educationItem.gradDate}</p>
              <div className="education-container-item-degree">
                <b>{educationItem.degree}: {educationItem.field}</b>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Education;
