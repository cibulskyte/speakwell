
import React, { useState } from 'react';
import styles from '../pages/CourseRegistration.module.scss';
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import { PATHS } from "../routes/consts";

const CourseRegistration = (props) => {
    const [selectedOption, setSelectedOption] = useState('month');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
    const selectedProgram = props.location && props.location.state ? props.location.state.selectedProgram : null;

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Form data:', formData);
        console.log('Selected program:', selectedProgram);

        
        setShowSuccessMessage(true);

    
        setTimeout(() => {
            navigate(PATHS.Programs);
        }, 2000); 
    };

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.cardInformation}>
                {showSuccessMessage ? (
                    <div className={styles.successMessage}>
                        <p>Registracija sėkminga! Grįžtama atgal...</p>
                    </div>
                ) : (
                    <div className={styles.informationBlock}>
                        <h3>Registracija į kursus </h3>
                
                    </div>
                )}

                {!showSuccessMessage && (
                    <div className={styles.inputBlock}>
                        <input type="text" name="name" placeholder="Jūsų vardas *" onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="El.paštas *" onChange={handleInputChange} />
                        <input type="tel" name="phone" placeholder="+370 XXXXXXXX *" onChange={handleInputChange} />
                    </div>
                )}

                {!showSuccessMessage && (
                    <div className={styles.radionInputBlock}>
                        <input
                            type="radio"
                            id="month"
                            name="course"
                            value="month"
                            checked={selectedOption === 'month'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="month">Mėnesio kaina 130 eurų</label>

                        <input
                            type="radio"
                            id="all"
                            name="course"
                            value="all"
                            checked={selectedOption === 'all'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="all">Kurso kaina 390 eurų</label>
                    </div>
                )}

                {!showSuccessMessage && (
                    <Button label="Siųsti" type="submit" onClick={handleSubmit} />
                )}

            </div>
        </>
    );
};

export default CourseRegistration;
