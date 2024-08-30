import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div id="home" className="main-box">
      <div className="About">
        <h1>{t('About_h1')}</h1>
        <p>{t('About_p')}</p>
      </div>
      <div id="about-me" className="About-box">
      <h2>{t('About_h2')}</h2>
      <p>{t('About_text')}</p>
      </div>
    </div>
  );
}

export default About;
