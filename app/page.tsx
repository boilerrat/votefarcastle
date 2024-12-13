import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Vote Farcastle!',
  description: 'Support Farcastle governance tools with Warpcast integration.',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <strong>Farcastle Governance Tools</strong>: Vote to bring Warpcast governance to life!
        </p>
        <p>
          Access the frame API at{' '}
          <a href="/api" style={{ fontWeight: 'bold' }}>
            <code>localhost:3000/api</code>
          </a>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          src="/Octantframe.png"
          alt="Farcastle"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className={styles.links}>
        <a href="/api/dev" className={styles.card}>
          Frame Endpoint &rarr;
        </a>
      </div>
    </main>
  );
}
