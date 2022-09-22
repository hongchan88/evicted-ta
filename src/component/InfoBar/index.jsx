import React from 'react';
import styles from './styles.module.scss';
import { GrFormNext } from 'react-icons/gr';

const InfoBar = ({ info }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.icon}>{info[0]}</div>
      <div className={styles.text}>
        <p>{info[1]}</p>
        <p>{info[2]}</p>
      </div>
      <div className={styles.arrowIcon}>
        <GrFormNext />
      </div>
    </div>
  );
};

export default InfoBar;
