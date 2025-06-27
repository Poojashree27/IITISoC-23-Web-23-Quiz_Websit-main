import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./LoginPage11.module.css";
const LoginPage11 = () => 
  {
    
  
  return (
    <div className={styles.loginPage1}> {/*bg img*/}
 <Button className={styles.component11} variant="primary">
        contact
      </Button>
      <Button className={styles.component1} variant="primary">
        About us 
      </Button>
     
      <div className={styles.component2} > 
      
      {/* logo position*/}
        <div className={styles.component2Child}>  </div>

     
        
        {/*logo dimensions*/}
        <div className={styles.logo}>
        <image src="\public\log.png"/>
          </div> {/*logo img*/}
    <image src="\public\login-page--1@3x.png"/>
      </div>
      
     
      <div className={styles.loginPage1Child} />
      <div className={styles.quizzyliciousWrapper} > 
        <div className={styles.quizzylicious}>Quizzylicious</div> {/*position*/}
      </div>
     

      <div className={styles.loginPage1Item} />
      <div className={styles.loginPage1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.mathematics}>MATHEMATICS</div>
      <div className={styles.text1} />
      <div className={styles.physics}>PHYSICS</div>
      <div className={styles.chemistry}>CHEMISTRY</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-9.svg" />
      
      <div className={styles.quote}>
        <span>Try  Test    Analyse     Learn..</span></div>
      <Button className={styles.rectangleButton} variant="primary" >
        Are you an admin?Login
      </Button>
      
      <Button
        className={styles.loginPage1Child1}
        variant="primary"
        
      >
        Sign up

      </Button>
      <div className={styles.signUp}></div>
      <Link to ="/home">
      <Button
        className={styles.loginPage1Child2}
        variant="primary"
        
      >
        Login

      </Button>
      </Link>
      <div className={styles.loginPage1Child2} />

<div className="xd">
<image src="\public\log.png"/>
</div>

    </div>
  );
};

    
export default LoginPage11;
