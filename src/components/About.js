import React from 'react';
import styles from './About.module.scss';
import { useNavigate } from 'react-router-dom'; 

export default function About() {
  const navigate = useNavigate(); 

  const handleEnterClick = () => {
    navigate('/portfolio'); 
  };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.intro}>
        <div className={styles.textContent}>
          <p>Hi, my name is</p>
          <h2>Elysea Crawford</h2>
          <p className={styles.buildText}>I build cool things for the web</p>
          <p className={styles.boldText}>I'm a full-stack developer with a strong focus on front-end design and back-end solutions.
            <br />
          I'm passionate about creating visually appealing and practical solutions for clients.
         </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="https://i.imgur.com/TpHHREf.jpg" alt="Profile" className={styles.profileImage} />
          <button className={styles.enterButton} onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
