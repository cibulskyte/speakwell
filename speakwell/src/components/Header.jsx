import image from '../images/Logo.jpg';
import {PATHS} from "../routes/consts";
import {Link} from 'react-router-dom';
import styles from "../components/Header.module.scss";
import {useNavigate} from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
    }
return (
    <>
    <div className={styles.Header}>
    <div className={styles.leftSide}>
        <img src={image} alt="logo" onClick={handleLogoClick}/>
    </div>
    <div className={styles.rightSide}>
    <Link to={PATHS.AboutUs}>Apie mus</Link>
    <Link to={PATHS.Contacts}>Kontaktai</Link>
    <Link to={PATHS.Programs}>Programos</Link>
         </div>
    </div>
        </>
)
}

export default Header;