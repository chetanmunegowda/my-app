import React from 'react';
import './Accomplishments.css'

export default class Accomplishments extends React.Component {
  render () {
    const accomplishments = [
      'Third best project award at 1871 Competition for LiveEquipd, an online marketplace for durable and nondurable medical equipment',
      'Impactful award for project Change, a web application that provides public, a simple and transparent platform to transform the lives of individuals through unnoticeable donations'
     ];

    return (
      <div className="accomplishments-container">
        <h2>Accomplishments</h2>
        <ul className="accomplishments-container-item">
          {
            accomplishments.map((val, index) => (
              <li key={index}>{val}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
