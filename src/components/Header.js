import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Header.module.scss'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/portfolio" className={styles.navLink}>Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

