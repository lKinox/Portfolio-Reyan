import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';
import { useLottie } from "lottie-react";
import aboutAnimation from "/src/components/animations/about_animation.json";

const Animation = () => {
  const options = {
    animationData: aboutAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="main-box">
      <div className="About">
        <h1>{t('About_h1')}</h1>
        <h3>{t('About_p')}</h3>
        <ul>
          <li><a href="https://github.com/lKinox" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/reyan-jimenez-750bb7238/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:reyanjimenez@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        </ul>
        <a className="CV-button" href="/public/doc/CV.pdf" target="_blank" rel="noopener noreferrer">
          {t('About_button')}
          <span class="material-symbols-outlined">download</span>
        </a>
        <a className="CV-button-mob" href="/public/doc/CV.pdf" download="Reyan_Jimenez_CV.pdf" target="_blank" rel="noopener noreferrer">
          {t('About_button')}
          <span class="material-symbols-outlined">download</span>
        </a>
      </div>
      <div id="about-me" className="About-box">
        <h2>{t('About_h2')}</h2>
        <div className="About-box-row">
          <div className="About-box-col1">
            <Animation />
          </div>
          <div className="About-box-col2">
            <p>{t('About_text_1')}</p>
            <p>{t('About_text_2')}</p>
            <p>{t('About_text_3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
