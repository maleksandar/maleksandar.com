import React from 'react';

const Project = ({ projectData }) => (
    <div>
        <p>
           <b>{projectData.timeSpan}</b>, <i>{projectData.positionTitle}, {projectData.employer}</i>
        </p>
        <p>
            {projectData.shortDescription}
        </p>

        <p>Responsibilities:</p>
        <ul>
            {projectData.responsibilities.map((r) => (<li key={r}>{r}</li>))}
        </ul>

        <p>Achievements:</p>
        <ul>
            {projectData.achievements.map((a) => (<li key={a}>{a}</li>))}
        </ul>

        <p>Technologies:</p>
            {projectData.technologies.map((t) => (<span key={t}>{t}, </span>))}

    </div>
);

export default Project;
