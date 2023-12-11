import styles from "../pages/AboutUs.module.scss";
import Header from "../components/Header";

const AboutUs = () => {
    return (
        <>
        <Header/>
        <div className={styles.aboutUsContainer}>
            
             <div>
        <h3>Speakwell misija</h3>
        <p>„„Alfabet““ misija ir vertybės – tai mūsų koordinačių sistema, pagrįsta supratimu, kokia turėtų būti geriausia tarptautinė kalbų mokykla. Mus vienija noras tobulėti, o į priekį veda tikslas, kad anglų kalbos mokymosi patirtis turi būti dinamiška, įkvepianti. Siekiame, kad kiekvienas kursų dalyvis, pasiekęs norimą rezultatą, galėtų drąsiai ištarti: Now I can!</p>
        <span>TURIME DAUGIAU NEI 25 TOP DĖSTYTOJUS, TARP JŲ – IR GIMTAKALBIUS</span>
        <ul>
            <li>MOKYMŲ KOKYBĖ – MŪSŲ RAKTINIS ŽODIS</li>
            <li>EFEKTYVŪS INTERNETINIAI KURSAI</li>
            <li>PASAULYJE PRIPAŽINTA MOKOMOJI MEDŽIAGA</li>

        </ul>
        </div>
       
        </div>
        </>
    )
}

export default AboutUs;