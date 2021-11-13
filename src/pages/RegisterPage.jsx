import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBg}>
        <div className={styles.imgWrapper}>
          <div className={styles.img} />
          <p className={styles.appName}>Finance App</p>
        </div>

        <div className={styles.formWrapper}>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
