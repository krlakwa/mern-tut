import React from 'react';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = (props, context) => (
  <div className={styles.nav}>
    <ul className={styles['nav__list']}>
      <li><Link to="/home" className={styles['nav__element']}>Home</Link></li>
      <li><Link to="/posts" className={styles['nav__element']}>Posts</Link></li>
      <li><Link to="/about" className={styles['nav__element']}>About</Link></li>
    </ul>
  </div>
);

export default Navigation;