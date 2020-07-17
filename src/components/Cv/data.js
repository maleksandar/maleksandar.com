const projects = [
  {
    key: 0,
    timeSpan: '02/2019 – 04/2020',
    positionTitle: 'Senior UI Engineer',
    employer: 'Grid Dynamics, Belgrade',
    title: 'Banking System - Widget Board',
    shortDescription: 'Development of widget board integrated with multiple banking services relevant for financial advisors.',
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
    title: 'Boring Machines - Math Visualization & User Interface',
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
    title: 'CNC Machines - User Interface',
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
    title: 'Frontend Consultant',
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
    title: 'Power Plant - User Interface',
    shortDescription: 'UI interface development for operating a gas-powered power plant.',
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
  {
    key: 5,
    timeSpan: '03/2017 – 12/2017',
    positionTitle: 'Professional Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    title: 'Online Image and Photo Editor',
    shortDescription: 'Web Interface for online greeting card creation tool and image editor.',
    responsibilities: [
      'Implementation of responsive web interface for greeting card creation tool and image editor.',
      'Implementation of logic for dealing with text formatting and image manipulation.',
      'Optimizing and ensuring that the software works properly on a vast area of devices and browsers.',
      'Unit and integration testing.',
      'Code reviews.',
    ],
    achievements: [
    ],
    technologies: [
      'JavaScript',
      'Angular.js',
      'Typescript',
      'Jasmine',
      'CSS',
      'HTML',
      'TFS',
      'Visual Studio code'
    ],
  },
  {
    key: 6,
    timeSpan: '03/2016 ​- 09/2016',
    positionTitle: 'Professional Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    title: 'Event Organization Platform',
    shortDescription: 'Platform for organizing events for a major sport oriented organization.',
    responsibilities: [
      'Development and maintenance of the platform written in .NET and Angular.js stack.',
      'Unit and integration testing.',
      'Requirements clarifications.',
      'Code reviews.',
    ],
    achievements: [
    ],
    technologies: [
      'C#',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'Jasmine',
      'Angular.js',
      'JS core (ES5)',
      'Visual Studio'
    ],
  },
  {
    key: 7,
    timeSpan: '09/2015 ​- 03/2016',
    positionTitle: 'Professional Software Engineer',
    employer: 'Zühlke Engineering d.o.o., Belgrade',
    title: 'Insurance Underwriting Platform',
    shortDescription: 'Platform for underwriters in the insurance company.',
    responsibilities: [
      'Backend Development and maintenance of the platform written in .NET tech stack.',
      'Unit and integration testing.',
      'Requirements clarifications.',
      'Code reviews.',
    ],
    achievements: [
    ],
    technologies: [
      'C#',
      'RavenDB',
      'ASP.NET Web API',
      'MSTEST',
      'TeamCity',
      'Octopus',
      'Visual Studio'
    ],
  },
];

export default { projects };
