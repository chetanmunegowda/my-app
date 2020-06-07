import React from 'react';
import './WorkHistory.css'

export default class WorkHistory extends React.Component {
  render () {
    const workHistoryTimeline = [{
      dateRange: '2017-03 - Current',
      position: 'Software Engineer',
      title: 'SemanticBits, LLC, Herndon, VA',
      responsibilities: [
        'SemanticBits provides solutions to complex problems for commercial, academic, and government organizations',
        'Develop critical features for CMS Web Interface under the Quality Payment Program for the performance year 2018, 2019 and 2020',
        'Develop HTML, CSS and JavaScript pages for user interaction using Angular and Node framework',
        'Integrate AWS web services like S3, SQS, SNS to CMS WI using AWS library',
        'Generate reports using google analytics',
        'Integrate code changes, test code changes, and document code changes using tools like Git, JIRA and Confluence',
        'Practice agile development methodologies'
      ]}, {
      dateRange: '2015-08 - 2016-07',
      position: 'Software Developers',
      title: 'Egen Solutions, Inc, Naperville, IL',
      responsibilities: [
        'Developed the product which helps companies to understand and act on their data through the platform that defines data-driven insight',
        'Developed various modules for Asset Performance Management application in HTML, CSS, JavaScript, and Java using Angular JS and Spring Hibernate framework',
        'Written automation test scripts using Selenium framework'
      ]}, {
      dateRange: '2010-08 - 2014-07',
      position: 'Senior Systems Engineer',
      title: 'Infosys Limited, Bangalore, Karnataka',
      responsibilities: [
        'Developed Corporate Loan Origination banking product which helps banks in India to simplify their loan origination process',
        'Automated the loan origination workflow process by developing various modules like Checklist, Needslist, and Financial Monitoring so that, bank users work time is reduced by nearly 60-70%',
        'Supported the product for two years by code fixes and enhancements for the inclusion in future code releases and patches'
      ]}

    ];

    return (
      <div className="work-history-container">
        <h2>Work History</h2>
        {
          workHistoryTimeline.map((historyItem, index) => (
            <div className="work-history-container-item" key={index}>
              <p>{historyItem.dateRange}</p>
              <div className="work-history-container-item">
                <div className="work-history-container-item-info">
                  <p>{historyItem.position}</p>
                  <p>{historyItem.title} </p>
                  <ul>
                    {
                      historyItem.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
