import React from 'react';


import Project from './Project';
import data from './data';
import Filter from './Filter';
import styles from './Cv.module.scss';

const Cv = () => (
    <div>

    Senior UI Developer

    <h3>Summary</h3>
    <p>
      Software engineer with a strong focus on quality and maintainability.
      From a technical perspective, mostly focused on Angular stack running on high-end enterprise solutions.
      Other than coding he has relevant experience in mentoring other engineers, team organization responsibilities and consulting.
      Highly proficient in speaking English and has solid communication skills.
      Has 5 years of professional experience in the IT industry.
    </p>

    <h3>Technical skills:</h3>
    <ul>
        <li>Programming languages: JavaScript, Typescript, HTML, CSS, C#</li>
        <li>Frameworks and libraries: Angular.js, Angular 2+, Rx.js, React</li>
        <li>Platforms: Mac OS X, Windows 10, Linux</li>
        <li>Automation and Testing tools: Selenium WebDriver (C#), Jasmine, Jest, Protractor, Karma</li>
        <li>Databases: MongoDB, MS SQLServer, RavenDB</li>
        <li>Issue Tracking: Jira, TFS</li>
    </ul>
    <div className={styles['experience__header']}><h3>Experience:</h3><Filter/></div>
    {data.projects.map((p) => <Project key={p.key} projectData ={p} />)}
</div>);

export default Cv;
