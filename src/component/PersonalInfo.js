import React from 'react';
import './PersonalInfo.css'

export default class PersonalInfo extends React.Component {
  render () {
    const personalInfo = {
      address: '13665 Legacy Circle, Apt K Herndon, VA, 20171',
      phone: '(571) 376-3134',
      email: 'chetanmunegowda@gmail.com'
    };
    return (
      <div className="personal-info-container">
        <h2>Personal Info</h2>
        <p>
          <span>
            <b>Address</b><br/>{personalInfo.address}
          </span>
        </p>
        <p>
           <span>
            <b>Phone</b><br/>{personalInfo.phone}
          </span>
        </p>
        <p>
          <span>
            <b>E-mail</b><br/>{personalInfo.email}
          </span>
        </p>
      </div>
    );
  }
}
