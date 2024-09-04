import React, { useContext } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import CV from "/src/components/doc/CV.pdf";

function Contact() {
    const { t } = useTranslation();
  
    return (
      <div className="main-box">
        <div id="contact" className="Contact">
          <h2>{t('Contact_h2')}</h2>
          <h1>{t('Contact_text')}</h1>
          <div className="Contact-row">
            <a href="https://github.com/lKinox" target='_blank'>Github</a>
            <a href="https://www.linkedin.com/in/reyan-jimenez-750bb7238/" target='_blank'>LinkedIn</a>
            <a href="mailto:reyanjimenez@gmail.com" target='_blank'>Email</a>
            <a href="https://wa.me/584122532702" target='_blank'>Whatsapp</a>
          </div>
          <h2>reyanjimenez@gmail.com</h2>
          <a className="CV-button" href={CV} target="_blank" rel="noopener noreferrer">
            {t('About_button')}
            <span class="material-symbols-outlined">download</span>
          </a>
          <a className="CV-button-mob" href={CV} download="Reyan_Jimenez_CV.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer">
            {t('About_button')}
            <span class="material-symbols-outlined">download</span>
          </a>
        </div>
      </div>
    );
  }
  
  export default Contact;