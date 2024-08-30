import React, { useState, useRef, useEffect, useContext } from 'react';
import './Resume.css'
import htmlLogo from '/icons/html.png'
import cssLogo from '/icons/css.png'
import jsLogo from '/icons/js.png'
import reactLogo from '/icons/react.svg'
import wordpressLogo from '/icons/wordpress.png'
import pythonLogo from '/icons/python.png'
import flaskLogo from '/icons/flask.png'
import djangoLogo from '/icons/django.png'
import phpLogo from '/icons/php.png'
import sqlLogo from '/icons/sql.png'
import mysqlLogo from '/icons/mysql.png'
import sqliteLogo from '/icons/sqlite.png'
import firebaseLogo from '/icons/firebase.png'
import awsLogo from '/icons/aws.webp'
import googlecloudLogo from '/icons/googlecloud.png'
import cpanelLogo from '/icons/cpanel.png'
import gitLogo from '/icons/git.png'
import { useTranslation } from 'react-i18next'
import ThemeContext from '../../ThemeContext';

function Box_resume({ skillName, text, img, percentage, icon }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [progress, setProgress] = useState(percentage || 0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          entry.target.classList.add('is-visible');
          
        }
      });
    });

    observer.observe(progressRef.current);   


    return () => observer.disconnect();
  }, []); // Arreglo de dependencias vacío

  return (
    <div className={`Box_resume ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
      <img src={img} alt={skillName} />
      <h2>{skillName}</h2>
      <p>{text}</p>
      <div className="progress-bar" ref={progressRef}>
        <span className="progress-text">
            <span>{progress}/100
            </span>
            <span>{icon}</span>
            </span>
        <span
          className="progress-fill"
          style={{ width: `${progress}%` }}
        >
            <span className="progress-fill-child">
            </span>
        </span>
      </div>
    </div>
  );
}

function Resume() {
  const { t } = useTranslation();

  return (
    <div id="resume" className="main-box Resume">
      <h2>{t('Resume_h2')}</h2>
      <h3>{t('Resume_h3_front')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="HTML" text={`${4} ${t('Years')}`} img={htmlLogo} percentage={90} icon="🔥" />
        <Box_resume skillName="CSS" text={`${4} ${t('Years')}`} img={cssLogo} percentage={90} icon="🔥" />
        <Box_resume skillName="JS" text={`${3} ${t('Years')}`} img={jsLogo} percentage={70} icon="" />
        <Box_resume skillName="React" text={`${2} ${t('Years')}`} img={reactLogo} percentage={50} icon="" />
        <Box_resume skillName="Wordpress" text={`${4} ${t('Years')}`} img={wordpressLogo} percentage={75} icon="" />
      </div>
      <h3>{t('Resume_h3_back')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="Python" text={`${3} ${t('Years')}`} img={pythonLogo} percentage={70} icon="🔥" />
        <Box_resume skillName="Flask" text={`${3} ${t('Years')}`} img={flaskLogo} percentage={70} icon="🔥" />
        <Box_resume skillName="Django" text={`${">1"} ${t('Year')}`} img={djangoLogo} percentage={50} icon="" />
        <Box_resume skillName="PHP" text={`${3} ${t('Years')}`} img={phpLogo} percentage={40} icon="" />
      </div>
      <h3>{t('Resume_h3_db')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="SQL" text={`${3} ${t('Years')}`} img={sqlLogo} percentage={70} icon="" />
        <Box_resume skillName="MySQL" text={`${3} ${t('Years')}`} img={mysqlLogo} percentage={60} icon="" />
        <Box_resume skillName="SQLite" text={`${2} ${t('Years')}`} img={sqliteLogo} percentage={70} icon="" />
        <Box_resume skillName="Firebase" text={`${1} ${t('Year')}`} img={firebaseLogo} percentage={50} icon="" />
      </div>
      <h3>{t('Resume_h3_devops')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="AWS" text={`${1} ${t('Year')}`} img={awsLogo} percentage={30} icon="" />
        <Box_resume skillName="Google Cloud" text={`${1} ${t('Year')}`} img={googlecloudLogo} percentage={30} icon="" />
        <Box_resume skillName="cPanel" text={`${3} ${t('Years')}`} img={cpanelLogo} percentage={80} icon="" />
        <Box_resume skillName="Git" text={`${3} ${t('Years')}`} img={gitLogo} percentage={60} icon="" />
      </div>
    </div>
  );
}

export default Resume;