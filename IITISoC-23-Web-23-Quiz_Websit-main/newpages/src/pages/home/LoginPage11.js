import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./LoginPage11.module.css";
const LoginPage11 = () => {
  return (
    <div className={styles.loginPage1}>
      <Button className={styles.component1} variant="primary">
        About us
      </Button>
      <div className={styles.component2} id="logog">
        <div className={styles.component2Child} />
        <div className={styles.logo}>LOGO</div>
      </div>
      <Button className={styles.component11} variant="primary">
        Button
      </Button>
      <div className={styles.contactUs}>Contact us</div>
      <div className={styles.loginPage1Child} />
      <div className={styles.quizzyliciousWrapper} id="title">
        <div className={styles.quizzylicious}>Quizzylicious</div>
      </div>
      <div className={styles.text}>{` `}</div>
      <div className={styles.loginPage1Item} />
      <div className={styles.loginPage1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.mathematics}>MATHEMATICS</div>
      <div className={styles.text1} />
      <div className={styles.physics}>PHYSICS</div>
      <div className={styles.chemistry}>CHEMISTRY</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-9.svg" />
      <div className={styles.login}>Login</div>
      <div className={styles.quote}>Quote</div>
      <Button className={styles.rectangleButton} variant="primary" id="admin">
        Button
      </Button>
      <div className={styles.areYouAn}>Are you an Admin? Login</div>
      <Button
        className={styles.loginPage1Child1}
        variant="primary"
        id="sign up"
      >
        Button
      </Button>
      <div className={styles.signUp}>Sign up</div>
      <div className={styles.loginPage1Child2} />
    </div>
  );
};

export default LoginPage11;
