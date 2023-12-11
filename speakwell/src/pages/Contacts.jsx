import Button from "../components/Button";
import styles from "../pages/Contacts.module.scss";
import Header from "../components/Header";
import Model from 'react-modal';
import {useState} from 'react';

const Contacts = () => {

    const handleSubmit = () => {
        console.log('form-submitted')
        setVisible(false);
    }
    const [visible, setVisible] = useState(false)
    return (
        <>
        <Header/>
        <div className={styles.letsTalk}>
            <h3>Bendraukime</h3>
            <p>Mūsų darbo esmė – suburti geriausius specialistus į komandą, suteikti jiems galimybę tobulėti ir kurti. Įvertiname kiekvieno indėlį, sukuriame laisvės atmosferą bei padedame atskleisti talentus. Stengiamės taikyti efektyviausius mokymo metodus, kad kiekvienas mūsų mokinys galėtų pasiekti iškeltus tikslus mokydamasis užsienio kalbos ir pagerintų savo gyvenimo kokybę. Domina paslaugos? Teiraukitės!</p>
           <Button label="rašykite užklausą" type="button" onClick={()=>setVisible(true)}/>
           <Model isOpen={visible}> 
<h2>užklausa</h2>
<input type="text" placeholder="Jūsų vardas *"/>
<input type="email" placeholder="El.paštas *" />
<input type="number" placeholder="Telefonas *" />
<input type="text" placeholder="Paslauga,kuri jus domina" />
<input type="text" placeholder="Kitos akutalios paslaugos" />
<input type="text" placeholder="Įmonė" />
<input type="text" placeholder="Jūsų žinutė *" />

<Button label="siųsti" type="submit" onClick={handleSubmit}></Button>
           </Model>
        </div>
        <div className={styles.contactsContainer}>
    <div className={styles.propsTo}>
        <h3>Rekvizitai</h3>
        <p>UAB Alfabet education</p>
        <span>Įmonės kodas:</span><p>304065518</p>
        <span>Adresas:</span><p>Žalgirio g. 90, LT-09300</p>
        <span>Tel.:</span><p>+37061636052</p>
        <span>El. p.:</span><p>info@alfabet.lt</p>
        <span>Bankas:</span><p>Luminor Bank AS Lietuvos skyrius</p>
        <p>A/S LT104010051003466414</p>
        <p>Banko kodas 40100</p>

    </div>

    <div className={styles.propsTo}>
<h3>Mus rasite</h3>
<p>Žalgirio g. 90, Vilnius, Lietuva</p>
<p>+37061636052</p>
<p>info@alfabet.lt</p>
<h3>Darbo laikas:</h3>
<p>
I-V: 8.00-20.00
VI: 10.00-14.00
VII: Nedirbame
</p>
<p>Kursai, pamokos, testavimas vyksta:
I–VI: jums paskirtu arba susitartu laiku.</p>
    </div>

    <div className={styles.propsTo}>
        <h3>kaip atvykti?</h3>
        <p>Esame lengvai pasiekiami viešuoju transportu (stotelė – “Žalgirio”), o važiuojantys automobiliu ras vietos šalia esančioje automobilų parkavimo aikštelėje!</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.337609032154!2d25.27557487763092!3d54.70368317271403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96aafadaa549%3A0xe3f7471852400fc5!2s%C5%BDalgirio%20g.%2090%2C%2009300%20Vilnius!5e0!3m2!1slt!2slt!4v1702248355030!5m2!1slt!2slt" 
        width="600" height="450"
        allowFullScreen
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title="responsive google map"></iframe>
    </div>
    </div>
    </>
    )
}

export default Contacts;