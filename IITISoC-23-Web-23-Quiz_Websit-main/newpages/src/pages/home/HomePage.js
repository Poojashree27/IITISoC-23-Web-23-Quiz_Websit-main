import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homePage}>
         <div className={styles.profileContainer}>
          <Link to="/prof">
            <img 
              src="/ellipse-2@2x.png" 
              alt="Profile" 
              className={styles.profileIcon} 
            />
          </Link>
        </div>

        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.logo}>QUIZZYlicious</div>
          <nav className={styles.navLinks}>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
            <Link to="/about" className={styles.navLink}>About us</Link>
            <div className={styles.authButtons}>
              <Link to="/admin-login" className={styles.adminLink}>Are you an admin?</Link>
              <Link to="/login" className={styles.loginButton}>Login</Link>
              <Link to="/signup" className={styles.signupButton}>Sign up</Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>WELCOME TO QUIZZYLICIOUS!</h1>
            <p className={styles.welcomeSubtitle}>Try Test Analyse Learn...</p>
          </div>

          {/* Subject Buttons */}
          <div className={styles.subjectButtons}>
            <Link to="/frame-6" className={styles.subjectLink}>
              <Button className={`${styles.subjectButton} ${styles.physics}`} variant="primary">
                PHYSICS
              </Button>
            </Link>
            
            <Link to="/list-of-topics-page-for-chem" className={styles.subjectLink}>
              <Button className={`${styles.subjectButton} ${styles.chemistry}`} variant="primary">
                CHEMISTRY
              </Button>
            </Link>
            
            <Link to="/list-of-topics-page-for-maths" className={styles.subjectLink}>
              <Button className={`${styles.subjectButton} ${styles.maths}`} variant="primary">
                MATHEMATICS
              </Button>
            </Link>
          </div>

          {/* Trending Topics */}
          <div className={styles.trendingSection}>
            <h2 className={styles.trendingTitle}>TRENDING TOPICS!</h2>
            <div className={styles.topicGrid}>
              <div className={styles.topicCard}>
                <img src="/rectangle-18@2x.png" alt="Topic 1" className={styles.topicImage} />
              </div>
              <div className={styles.topicCard}>
                <img src="/rectangle-21@2x.png" alt="Topic 2" className={styles.topicImage} />
              </div>
              <div className={styles.topicCard}>
                <img src="/rectangle-24@2x.png" alt="Topic 3" className={styles.topicImage} />
              </div>
              <div className={styles.topicCard}>
                <img src="/rectangle-25@2x.png" alt="Topic 4" className={styles.topicImage} />
              </div>
              <div className={styles.topicCard}>
                <img src="/rectangle-26@2x.png" alt="Topic 5" className={styles.topicImage} />
              </div>
            </div>
          </div>
        </main>

        {/* Profile Button */}
       
        {/* Footer Graphics */}
        
      </div>
    </div>
  );
};

export default HomePage;