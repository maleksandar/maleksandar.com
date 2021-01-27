import React from 'react';
import Typography from '@material-ui/core/Typography';
import PrintIcon from '@material-ui/icons/Print';

import styles from './Cv.module.scss';
import Experience from './Experience';

function showPrintDialog() {
  window.print();
}
const Cv = () => (
  <div className={styles['cv__wrapper']}>
    <div> <button className={styles['print-button']} onClick={showPrintDialog}> <span className={styles['print-button__label']}> Print </span> <PrintIcon/> </button></div>
    <div className={styles['print__header']}>
    <Typography className={styles['section__heading']} variant="h4" component="h4">
      Aleksandar Milosavljević
      <Typography variant="body2" color="textPrimary" component="div">
        alemilosav@gmail.com | +381 69 54 56 209 | Belgrade, Serbia
      </Typography>
    </Typography>
    </div>
    <Typography className={styles['section__heading']} variant="h5" component="h4">
      Summary:
    </Typography>
    <Typography className={styles['section__body']} variant="body2" color="textPrimary" component="p">
    Software engineer with a strong focus on quality and maintainability. Recently, involved with more management-oriented roles.
      From a technical perspective, focused mostly on Angular stack running on high-end enterprise solutions.
      Other than coding, has relevant experience in mentoring other engineers, team organization responsibilities, and consulting.
      Highly proficient in speaking English with solid communication skills.
      Has 5 years of professional experience in the IT industry.
    </Typography>
    <Typography variant="h5" component="h4" className={styles['section__heading']}>
      Technical Skills:
    </Typography> <Typography variant="body2" color="textPrimary" component="div">
      <ul>
          <li>Programming languages: JavaScript, Typescript, C#</li>
          <li>Frameworks and libraries: Angular.js, Angular (2+), Rx.js, React</li>
          <li>Platforms: Windows 10, Linux, Mac OS X</li>
          <li>Automation and Testing tools: Selenium, Jasmine, Jest, Protractor, Karma</li>
          <li>Databases: MongoDB, MS SQLServer, RavenDB</li>
          <li>Issue Tracking: Jira, TFS</li>
      </ul>
    </Typography>

    <Experience/>
    <Typography variant="h5" component="h4" className={styles['section__heading']}>
      Education and Certificates:
    </Typography> <Typography variant="body2" color="textPrimary" component="div">
      <ul>
      <li>Mathematical Faculty, University of Belgrade
          <ul>
            <li>
              MSc. in Informatics [2016 - present]
            </li>
            <li>
              BSc. in Informatics [2012 - 2015]
            </li>
          </ul>
        </li>
        <li>Professional SCRUM Developer I
          <ul>
            <li>
              <a href="https://www.scrum.org/user/148027">Scrum.org</a>
            </li>
          </ul>
        </li>
      </ul>
    </Typography>
    <div className={styles['print__note']}>
      <p>
        <i>Note:</i> This CV was generated from a webpage. Most recent version of this CV can be found at <a href="https://maleksandar.com/cv">maleksandar.com/cv</a>.
      </p>
    </div>
  </div>);

export default Cv;
