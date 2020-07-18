import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './Cv.module.scss';
import Experience from './Experience';

const Cv = () => (
    <div>
    <Typography className={styles['section__heading']} variant="h5" component="h4">
      Summary:
    </Typography>
    <Typography variant="body2" color="textPrimary" component="p">
    Software engineer with a strong focus on quality and maintainability.
      From a technical perspective, mostly focused on Angular stack running on high-end enterprise solutions.
      Other than coding he has relevant experience in mentoring other engineers, team organization responsibilities and consulting.
      Highly proficient in speaking English and has solid communication skills.
      Has 5 years of professional experience in the IT industry.
    </Typography>
    <Typography variant="h5" component="h4" className={styles['section__heading']}>
      Technical Skills:
    </Typography> <Typography variant="body2" color="textPrimary" component="div">

    <ul>
        <li>Programming languages: JavaScript, Typescript, HTML, CSS, C#</li>
        <li>Frameworks and libraries: Angular.js, Angular 2+, Rx.js, React</li>
        <li>Platforms: Mac OS X, Windows 10, Linux</li>
        <li>Automation and Testing tools: Selenium WebDriver (C#), Jasmine, Jest, Protractor, Karma</li>
        <li>Databases: MongoDB, MS SQLServer, RavenDB</li>
        <li>Issue Tracking: Jira, TFS</li>
    </ul>
    </Typography>

    <Experience/>
</div>);

export default Cv;
