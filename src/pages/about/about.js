import React, { useRef, useEffect } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './About.module.scss';

import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
// import Page from '../../components/Page/Page';

const AboutPage = () => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const pageTitle = `About - ${siteTitle}`;
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });
  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar/>
      <div ref={pageRef} className={styles['about']}>
        <div className={styles['about__inner']}>
          <h2>About this site:</h2>
          <p>
I’m not religious about technology choices, but I do have opinions and preferences.
Sometimes I enjoy discussing them, at other times I will refer you towards a blog post online
that supports my views about the issue. Hopefully, over time, most of those references will lead you
to this site.

Besides occasional blog posts, I will use this site to maintain my CV in the format that is for me
easiest to maintain.

Quite frankly, I actually started working on this site because I hate updating my CV. Using some
generic word template looks way too cheap, and using Latex to generate some nice PDF is just too
painful for me.
          </p>
          <h2>About me:</h2>
          <p>
I am a software engineer specialized in frontend technologies.
I’m currently on master studies at the Faculty of Mathematics at the University of Belgrade.

I worked mostly in software engineering companies that were service oriented,
therefore I developed software for many different clients and business areas such as insurance,
major sports organizations, banks, heavy machine building industry, and many more.
Also, I worked as a full stack web developer in .NET,
so developing and designing REST APIs are not the things that are unknown to me.

Currently, I work as a senior UI engineer at Grid Dynamics in Belgrade.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
