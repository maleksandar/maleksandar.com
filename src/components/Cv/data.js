const projects = [
  {
    key: 0,
    timeSpan: '02/2019 – 04/2020',
    positionTitle: 'Senior UI Engineer',
    employer: 'Grid Dynamics, Belgrade',
    shortDescription: 'Widget board integrated with multiple banking services relevant for financial advisors.',
    responsibilities: [
      'Development of a widget board that presents data from various sources relevant for Financial Advisors.',
      'Team Lead responsibilities, such as estimations and workload planning.',
      'Refactoring and reviewing code.',
      'Conducting demos'
    ],
    achievements: [
      'Fixing the old state management flow system of the application and introducing a new flux-like pattern and persistent browser caching system.',
      'Made design and architecture decisions that enabled us to decouple our code from the old legacy part of the app. This boosted our productivity and improved the quality of the application.',
      'The estimations were very accurate and the customer was very pleased that we were able to deliver the product on time and in good quality.',
      'Developed a customizable HTTP caching mechanism that reduced the load on the server side.'
    ],
    technologies: [
      'JavaScript',
      'Angular (2+)',
      'HTML',
      'SCSS',
      'TFS',
      'Git',
      'Visual Studio Code',
      'Jenkins',
      'Typescript',
      'Cypress'
    ],
  },
  {
    key: 1,
    timeSpan: '10/2018 – 02/2019',
    positionTitle: 'Advanced Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    shortDescription: 'Web interface and machine-local UI for boring machines including an application for 3D presentation of pipelines and boring paths for placing cables and pipes underground.',
    responsibilities: [
      'Mentoring younger colleagues in various areas of software engineering.',
      'Communication and clarification of requirements with a client and mathematics specialists',
      'Refactoring and reviewing code.',
      'Conducting demos'
    ],
    achievements: [
      'Took a part in mentoring younger colleagues and clarifying the communications and potential problems between the engineering team and a team of Mathematicians leveraging my mathematical background.',
      'Implemented most of the math-heavy calculations for the presentation logic of the map viewing (using map-box API) and optimized the number of calls towards 3rd party APIs.',
      'Introduced good practices for responsive design development.'
    ],
    technologies: [
      'JavaScript',
      'Aurelia',
      'HTML',
      'SCSS',
      'ASP.NET Web API',
      'Git',
      'Visual Studio',
      'Visual Studio Code',
      'Azure',
      'Typescript',
      'Jest'
    ],
  },
  {
    key: 2,
    timeSpan: '08/2018 – 10/2018',
    positionTitle: 'Advanced Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    shortDescription: 'Development of User Interface for utility tools on CNC machines, such as calculators, converters, pdf readers.',
    responsibilities: [
      'Writing Unit and Integration tests.',
      'Mentoring engineers from the client side in areas of software engineering and SCRUM.',
      'Creating POC examples in order to determine viability of certain functionalities and development strategy of the product.',
      'Communication and clarification of requirements with a customer.'
    ],
    achievements: [
      'Took the initiative in collaboration with the engineers from the client’s side and helped them become more productive.',
    ],
    technologies: [
      'JavaScript',
      'Typescript',
      'Angular (2+)',
      'HTML',
      'SCSS',
      'ASP.NET Web API',
      'Git',
      'Jira',
      'Visual Studio Code',
      'Azure',
      'Protractor',
      'Docker',
      'Kubernetes'
    ],
  },
  {
    key: 3,
    timeSpan: '08/2018 – 09/2018',
    positionTitle: 'Advanced Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    shortDescription: 'Internal technical consultant for FE technologies and best practices.',
    responsibilities: [
      'Mentoring engineers from the client side in areas of frontend development.',
      'Creating POC examples in order to determine viability of certain functionalities and development strategy of the product.',
      'Conducting training sessions',
      'Code reviews'
    ],
    achievements: [
      'Trained two people with virtually no previous experience with FE development to be mostly independent in their daily work.',
    ],
    technologies: [
      'JavaScript',
      'Angular (2+)',
      'HTML',
      'CSS',
      'Typescript',
    ],
  },
  {
    key: 4,
    timeSpan: '01/2018 – 07/2018',
    positionTitle: 'Professional Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    shortDescription: 'UI interface for operating a gas-powered power plant.',
    responsibilities: [
      'Refactoring and translating legacy code from non-modular Angular.js code to typescript and webpack.',
      'Constant integration of new features.',
      'Coaching other engineers in FE technologies, mainly Typescript, ES6+, and webpack.',
      'Complete rewrite of critical parts of the system.',
      'Refactoring and code reviews.',
      'Unit and integration testing.'
    ],
    achievements: [
    ],
    technologies: [
      'JavaScript',
      'Angular.js',
      'Typescript',
      'Jasmine',
      'Webpack',
      'HTML',
      'CSS',
    ],
  },
];

export default { projects };

// eslint-disable-next-line no-unused-vars
const data = `

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
`;

// eslint-disable-next-line no-unused-vars
const done = `
<p><b>02/2019 – 04/2020</b>, <i>Senior UI Engineer, Grid Dynamics, Belgrade</i></p>


Widget board integrated with multiple banking services relevant for financial advisors.

Responsibilities:
Development of a widget board that presents data from various sources relevant for Financial Advisors.
Team Lead responsibilities, such as estimations and workload planning.
Refactoring and reviewing code.
Conducting demos.
Fixing the old state management flow system of the application and introducing a new flux-like pattern and persistent browser caching system.

Achievements:
Took a Team Lead role and a responsibility for most of the estimations. 
Made design and architecture decisions that enabled us to decouple our code from the old legacy part of the app. This boosted our productivity and improved the quality of the application.
The estimations were very accurate and the customer was very pleased that we were able to deliver the product on time and in good quality.
Developed a customizable HTTP caching mechanism that reduced the load on the server side.

Technologies: JavaScript, Ramda, Angular (2+), HTML, SCSS, TFS, Git, Visual Studio Code, Jenkins, Typescript, Cypress


10/2018 – 02/2019, Advanced Software Engineer, Zühlke Engineering d.o.o., Belgrade
Web interface and machine-local UI for boring machines including an application for 3D presentation of pipelines and boring paths for placing cables and pipes underground.

Responsibilities:
Mentoring younger colleagues in various areas of software engineering.
Refactoring and reviewing code.
Conducting demos.
Communication and clarification of requirements with a client and Mathematics Specialists.

Achievements:
Took a part in mentoring younger colleagues and clarifying the communications and potential problems between the engineering team and a team of Mathematicians leveraging my mathematical background.
Implemented most of the math-heavy calculations for the presentation logic of the map viewing (using map-box API) and optimized the number of calls towards 3rd party APIs.
Introduced good practices for responsive design development.

Technologies: JavaScript, Aurelia, HTML, SCSS, ASP.NET Web API, Jira, Git, Visual Studio, Visual Studio Code, Azure, Typescript, Jest


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

`;