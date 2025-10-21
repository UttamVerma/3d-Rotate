import styles from "../styles/Banner.module.css";
import logo from "../assets/images/2.png";
import code from "../assets/images/code.png";
import bg from "../assets/images/bg.png";
import bg2 from "../assets/images/bg2.png";
import rock1 from "../assets/images/rock1.png";
import rock2 from "../assets/images/rock2.png";
import rock3 from "../assets/images/rock3.png";

const Banner = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <h1>Smile</h1>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.author}>
          <h3>CIRCLE</h3>
          <img src={code} alt="Code" />
        </div>
      </header>

      <div className={styles.banner}>
        <div className={styles.product}>
          <div className={styles.soda} style={{ "--url": `url(${bg})` }}></div>
          <div className={styles.soda} style={{ "--url": `url(${bg2})` }}></div>
        </div>
        <div className={styles.rock}>
          <img src={rock1} alt="Rock 1" />
          <img src={rock2} alt="Rock 2" />
          <img src={rock3} alt="Rock 3" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
