// // @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Cv from '../components/Cv';
import { useSiteMetadata } from '../hooks';
import styles from './Cv.module.scss';

const IndexTemplate = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const pageTitle = `CV - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar/>
      <div className={styles['cv']}>
          
          <div className={styles['cv__inner']}>
            <h1 className={styles['cv__title']}>CV</h1>
            <Cv/>
          </div>
      </div>
    </Layout>
  );
};

export default IndexTemplate;

// export default class CV extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }