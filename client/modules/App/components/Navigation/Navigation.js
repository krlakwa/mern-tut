import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = (props, context) => (
  <div className={styles.nav}>
    <ul className={styles['nav--list']}>
      <li><Link to="/home" className={styles['nav--list__element']}>Home</Link></li>
      <li><Link to="/posts" className={styles['nav--list__element']}>Posts</Link></li>
      <li><Link to="/about" className={styles['nav--list__element']}>About</Link></li>
    </ul>
  </div>
);

Navigation.PropTypes = {

};

export default Navigation;