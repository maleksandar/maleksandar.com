import React from 'react';
import Typography from '@material-ui/core/Typography';

import Filter from './Filter';
import styles from './Experience.module.scss';
import data from '../data';
import Project from './Project';

const Experience = () => (
    <>
        <div className={styles['experience__header']}>
            <Typography variant="h5" component="h4">
                Experience:
            </Typography>
            <Filter/>
        </div>
        {data.projects.map((p) => <Project key={p.key} projectData ={p} />)}
    </>
);

export default Experience;