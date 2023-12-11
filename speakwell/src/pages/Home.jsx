import image from '../images/Logo.jpg';
import styles from "./Home.module.scss";
import {Link} from "react-router-dom";
import {PATHS} from "../routes/consts";
import Login from '../pages/Login';
const Home = () => {

    return (
        <>
        <div className={styles.wrapper}>
        <div className={styles.container}><img src={image} alt="logo" /></div>
        <div className={styles.link}>
       <Link to={PATHS.Login}>Pradėti</Link>
        </div>
        </div>
        </>
    )
}

export default Home
