
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
import {PATHS} from "../routes/consts";
import styles from "../pages/Programs.module.scss"
import {useState} from 'react';
import Header from "../components/Header";

const App = () => {

    const navigate = useNavigate();
    const [selectedProgram, setSelectedProgram] = useState(null)

        const handleRegistrationClick = (program) => {
            console.log('handleRegistrationClick triggered')
            setSelectedProgram(program)
            navigate(PATHS.CourseRegistration, {state: {selectedProgram:program}})
          }
            const handleTestClick = () => {
                navigate(PATHS.Test)
        }    
  return (
    <>
    <Header/>

    <div className={styles.cardContainer}>
    <div className={styles.programCard}>

      <Card
        title="Bendrinė šnekamoji anglų kalba | A1"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Bendrinė šnekamoji anglų kalba | A2"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Bendrinė šnekamoji anglų kalba | B1"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Bendrinė šnekamoji anglų kalba | B2"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Bendrinė šnekamoji anglų kalba | C1"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Specializuota anglų kalba | B1"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>
    

    <div className={styles.programCard}>
      <Card
        title="Specializuota anglų kalba | B2"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>

    <div className={styles.programCard}>
      <Card
        title="Specializuota anglų kalba | C1"
        startDate=" Kursų pradžia: 2023-09-18"
        schedule="Tvarkaraštis: I ir III 17:30-19:00 arba II ir IV 17:30 - 19:00"
        location="Vieta: Žalgirio g.90, Vilnius arba nuotoliu"
        />
        <div className={styles.button}>
        <div className="button-section">{<Button label="Registruotis" onClick={handleRegistrationClick}/>}</div>
        <div className="button-section">{<Button label="Testas" onClick={handleTestClick}/>}</div>
        </div>
    </div>
    </div>
</>
  );
};

export default App;





