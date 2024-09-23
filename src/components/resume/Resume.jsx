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
import cpanelLogo from '/icons/cpanel.png'
import gitLogo from '/icons/git.png'
import mongoLogo from '/icons/mongodb.svg'
import nodeLogo from '/icons/node.webp'
import { useTranslation } from 'react-i18next'
import ThemeContext from '../../ThemeContext';

function Box_resume({ skillName, img }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  

  return (
    <div className={`Box_resume ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
      <img src={img} alt={skillName} />
      <h4>{skillName}</h4>
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
        <Box_resume skillName="HTML"img={htmlLogo} />
        <Box_resume skillName="CSS" img={cssLogo} />
        <Box_resume skillName="JS" img={jsLogo} />
        <Box_resume skillName="React" img={reactLogo} />
        <Box_resume skillName="Wordpress" img={wordpressLogo} />
      </div>
      <h3>{t('Resume_h3_back')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="Python" img={pythonLogo}/>
        <Box_resume skillName="Flask" img={flaskLogo} />
        <Box_resume skillName="Django" img={djangoLogo} />
        <Box_resume skillName="PHP" img={phpLogo} />
        <Box_resume skillName="Node.js" img={nodeLogo} />
      </div>
      <h3>{t('Resume_h3_db')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="MySQL" img={mysqlLogo} />
        <Box_resume skillName="SQLite" img={sqliteLogo} />
        <Box_resume skillName="Firebase" img={firebaseLogo} />
        <Box_resume skillName="MongoDB" img={mongoLogo} />
      </div>
      <h3>{t('Resume_h3_devops')}</h3>
      <div className="Resume-row">
        <Box_resume skillName="cPanel" img={cpanelLogo} />
        <Box_resume skillName="Git" img={gitLogo} />
      </div>
    </div>
  );
}

export default Resume;