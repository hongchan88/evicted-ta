import React from 'react';
import styles from './styles.module.scss';
import { GrFormNext } from 'react-icons/gr';
import InfoBar from '../../component/InfoBar';
import { Link } from 'react-router-dom';
const Landing = (props) => {
  const infoText = [
    ['🗓', '18 August 6:00PM', 'to 19 August 1:00PM UTC + 10'],
    ['📍', 'Street name', '301 Rowes Lane, WA , 7183'],
    ['🔗', 'Link', 'netflix.com'],
  ];
  return (
    <main>
      <section className={styles.leftSection}>
        <div className={styles.leftWrapper}>
          <div className={styles.imgContainer}>
            <img src='/img/landingImg.png' width='100%' height='100%' />
          </div>
          <div className={styles.description}>
            <div>
              <h3>Movie night</h3>
              <span>👋 Hosted by </span>{' '}
              <span className={styles.name}> Elysia</span>
            </div>
            <div className={styles.inviteInfo}>
              <div className={styles.text}>
                <span>14 responses &#x2022; </span>
                <span className={styles.guests}>see guests</span>
              </div>
              <div className={styles.btn}>
                <span>🤝 Invite</span>
              </div>
            </div>
            <div className={styles.infoContainer}>
              {infoText.map((info) => {
                return <InfoBar info={info} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.rightWrapper}>
          <div className={styles.text}>
            <div className={styles.heading}>
              <p>Imagine if</p>
              <p className={styles.textGradient}>Snapchat</p>
              <p>had events</p>
            </div>
            <p className={styles.description}>
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <Link to='/create' style={{ textDecoration: 'none' }}>
            <div className={styles.createEventBtn}>
              <span>🎉 Create my event</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Landing;
