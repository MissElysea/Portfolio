import React from 'react';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const handleEnterClick = (websiteURL) => {
    window.location.href = websiteURL;
  };

  return (
    <div>
      <h1 className={styles.projectHeading}>Projects</h1>
      <div className={styles.projectContainer}>
        <div className={styles.projectItem}>
          <img
            src="https://i.imgur.com/CwfJgOs.png"
            alt="hangman"
            className={styles.hangmanImage}
            onClick={() => handleEnterClick('https://misselysea.github.io/Hangman/')}
          />
        </div>
        <div className={styles.projectItem}>
          <img
            src="https://i.imgur.com/jTnFOJd.png"
            alt="buckets and beyond"
            className={styles.bucketsImage}
            onClick={() => handleEnterClick('http://buckets-and-beyond.tech/')}
          />
        </div>
        <div className={styles.projectItem}>
          <img
            src="https://i.imgur.com/VVfPFj6.png"
            alt="ninety4hair"
            className={styles.ninetyImage}
            onClick={() => handleEnterClick('https://ninety4hair.elyseacrawford.me/')}
          />
        </div>
      </div>
    </div>
  );
}


