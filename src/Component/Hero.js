import React from 'react';
import styles from './Hero.module.css';

export default function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src='https://thumbs.dreamstime.com/b/dot-globe-connections-network-logo-template-dot-globe-connections-network-logo-template-vector-140086589.jpg'height='150px' width='150px' alt="Hero Image" />
      </div>
      <div className={styles.heroData}>
        <h1>Hero Title</h1>
        <p>Hero Text</p>
        <button>Hero Button</button>
      </div>
    </section>
  );
}