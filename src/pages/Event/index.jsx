import React from 'react';
import InfoBar from '../../component/InfoBar';
import styles from './styles.module.scss';

const Event = (props) => {
  const infoText = [
    ['🗓', '18 August 6:00PM', 'to 19 August 1:00PM UTC + 10'],
    ['📍', 'Street name', 'Suburb, State, Postcode'],
  ];
  return (
    <main>
      <section className={styles.leftSection}>
        <div className={styles.infoWrapper}>
          <div>
            <h3>Birthday Bash</h3>
            <span>Hosted by </span> <span className={styles.name}> Elysia</span>
          </div>
          {infoText.map((info) => {
            return <InfoBar info={info} />;
          })}
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.imgWrapper}>
          <img src='img/event.png' width='100%' />
        </div>
      </section>
    </main>
  );
};

export default Event;
