import React, { useRef, useEffect } from 'react';
import Project from './Project';
import data from './data';

const Cv = () => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef}>

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
<h3>Experience</h3>

  {data.projects.map((p) => <Project key={p.key} projectData ={p} />)}

08/2018 – 10/2018, Advanced Software Engineer, Zühlke Engineering d.o.o., Belgrade
Development of User Interface for utility tools on CNC machines, such as calculators, converters, pdf readers.

Responsibilities:
Writing Unit and Integration tests.
Mentoring engineers from the client side in areas of software engineering and scrum.
Creating POC examples in order to determine viability of certain functionalities and development strategy of the product.
Communication and clarification of requirements with a customer.

Achievements:
Took the initiative in collaboration with the engineers from the client’s side and helped them become more productive.

Technologies: JavasScript, Typescript, Angular 5, SCSS, HTML, ASP.NET Web API, Jira, Git, Protractor, Docker, Kubernetes


08/2018 – 09/2018, Advanced Software Engineer, Zühlke Engineering d.o.o., Belgrade
Project: Internal technical consultant for FE technologies and best practices.

Responsibilities:
Mentoring for less experienced developers from the client side
POC implementations
Conducting training sessions
Code reviews

Technologies: JavaScript, Angular, CSS, Typescript, ES6+


01/2018 – 07/2018, Professional Software Engineer, Zühlke Engineering d.o.o., Belgrade
UI interface for operating a gas-powered power plant.

Responsibilities:
Refactoring and translating legacy code from non-modular Angular.js code to typescript and webpack
Constant integration of new features.
Coaching other engineers in FE technologies, mainly Typescript, ES6+, and webpack.
Complete rewrite of critical parts of the system.
Refactoring and code reviews.
Unit and integration testing

Technologies: JavaScript, Angular, HTML, CSS, Webpack, Typescript, Jasmine


03/2017 – 12/2017, Professional Software Engineer, Zühlke Engineering d.o.o., Belgrade
Web Interface for online greeting card creation tool and image editor

Responsibilities:
Implementation of responsive web interface for greeting card creation tool and image editor.
Implementation of logic for dealing with text formatting and image manipulation.
Optimizing and ensuring that the software works properly on a vast area of devices and browsers.
Unit and integration testing

Technologies: JavaScript, Typescript, CSS, HTML, TFS, Visual Studio code, Jasmine


03/2016 ​- 09/2016, Professional Software Engineer, Zühlke Engineering d.o.o., Belgrade
Platform for organizing events for a major sport oriented organization.

Responsibilities:
Development and maintenance of the platform written in .NET and Angular.js stack
Unit and integration testing
Requirements clarifications
Code reviews

Technologies: C#, ASP.NET MVC, ASP.NET Web API, Angular.js, JS core (ES5), Jasmine

09/2015 ​- 03/2016, Professional Software Engineer, Zühlke Engineering d.o.o., Belgrade
Platform for underwriters in the insurance company.

Responsibilities:
Backend Development and maintenance of the platform written in .NET
Unit and integration testing
Requirements clarifications
Code reviews

Technologies: C#, ASP.NET Web API, RavenDB, MSTEST, TeamCity, Octopus
Education and Certificates
2012 – 2015, Bachelor of Science in Informatics, Mathematical Faculty, University of Belgrade, Serbia
2016 – 2020 (expected), Master of Science in Informatics, Mathematical Faculty, University of Belgrade, Serbia
2016, Professional Scrum Developer I, Scrum.org (https://www.scrum.org/user/148027)
        </div>
);
};

export default Cv;
