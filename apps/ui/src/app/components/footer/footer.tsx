import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles['footer-container']}>
      <footer className={styles['footer']}>
        <div className={styles['footer-element']}>
           Kiko Penetrante. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
