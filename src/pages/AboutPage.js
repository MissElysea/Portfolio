import React from 'react';
import styles from '../pages/AboutPage.module.scss';
import About from '../components/About';

export function AboutPage() {

  return (
    <div>
      <div className={styles.aboutPage}>
        <About />
      </div>
    </div>
  );
}

export default AboutPage;



