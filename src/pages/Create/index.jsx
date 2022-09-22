import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
const Create = (props) => {
  return (
    <main>
      <div className={styles.leftWrapper}>
        <div className={styles.imgContainer}>
          <img src='/img/landingImg.png' width='100%' height='100%' />
        </div>
        <div className={styles.description}>
          <div>
            <h3>Submit your details</h3>
          </div>
          <div className={styles.inputWrapper}>
            <label>Event name</label>
            <input />
            <label>Start and End Time/date</label>
            <input />
            <label>Location name</label>
            <input />
            <label>Event photo</label>
            <input type='file' />
          </div>
          {/* <div className={styles.inviteInfo}>
            <div className={styles.text}>
              <span>14 responses &#x2022; </span>
              <span>see guests</span>
            </div>
            <div className={styles.btn}>
              <span>🤝 Invite</span>
            </div>
          </div> */}
          <div className={styles.btnWrapper}>
            <Link to='/event' style={{ textDecoration: 'none' }}>
              <div className={styles.createEventBtn}>
                <span>NEXT</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Create;
