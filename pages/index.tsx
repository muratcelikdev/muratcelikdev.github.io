import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murat Çelik - Frontend Developer</title>
        <meta name="description" content="Murat Çelik - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming <span>Soon!</span>
        </h1>
      </main>
    </div>
  );
};

export default Home;
