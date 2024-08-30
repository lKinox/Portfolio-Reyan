import React, { useContext } from 'react';
import './Work.css';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../ThemeContext';
import ginqoscreen from '/images/ginqo.jpeg';
import dantdiver from '/images/dantdiver.jpeg';
import fmpinilla from '/images/fmpinilla.jpeg';
import bood from '/images/bood.jpeg';
import Work_back from './Work_back';

function Box_work({ name, type, url, img, tools }) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const toolsArray = tools.split(' ');

    return (
      <div id={name} className={`Box_work ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
        <img src={img} alt={name} />
        <a href={url} target="_blank"><h2>{name}</h2></a>
        <h3>{type}</h3>
        <ul>
          {toolsArray.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    );
}

function Work() {
    const { t } = useTranslation();
  
    return (
      <div className="main-box">
        <div id="work" className="Work">
          <h2>{t('Work_h2')}</h2>
          <p>{t('Work_text')}</p>
          <div className="Work-row">
            <Box_work name="Ginqo" type="Web site" url="https://ginqopetfood.com" img={ginqoscreen} tools="WordPress PHP HTML CSS JS"/>
            <Box_work name="DantDive" type="Web site" url="https://dantdiver.com/" img={dantdiver} tools="WordPress PHP HTML CSS JS WebDesign"/>
            <Box_work name="FMPinilla" type="Web site" url="https://fmpinilla.com/" img={fmpinilla} tools="WordPress HTML CSS JS WebDesign"/>
            <Box_work name="BOOD" type="Web site" url="https://proyect-bood.vercel.app/" img={bood} tools="HTML CSS JS WebDesign"/>
            
          </div>
          <Work_back />
        </div>
      </div>
    );
  }
  
  export default Work;