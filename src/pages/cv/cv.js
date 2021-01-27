// // @flow strict
import React, { useRef, useEffect } from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import Cv from '../../components/Cv';
import { useSiteMetadata } from '../../hooks';
import styles from './Cv.module.scss';

const CvPage = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });
  const pageTitle = `CV - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar/>
      <div ref={pageRef} className={styles['cv']}>
          <div className={styles['cv__inner']}>
            <Cv/>
          </div>
      </div>
    </Layout>
  );
};

export default CvPage;
