import React, { useContext } from 'react';
import './Work.css';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../ThemeContext';
import flaskIcon from '/icons/flask.png';
import firebaseIcon from '/icons/firebase.png';

function Box_work_back({ name, type, url, text, img, tools }) {
    const { isDarkMode } = useContext(ThemeContext);
    const toolsArray = tools.split(' ');
    const imgArray = img.split(' ');

    return (
      <div id={name} className={`Box_work_back ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
        <div className="Box_work_back_row">
          <div className="img_work_back">
              {imgArray.map((img) => (
                <img src={img} alt={name} />
              ))}
              
          </div>
          <a href={url} target="_blank"><h2>{name}</h2></a>
          <h3>{type}</h3>
          <p>{text}</p>
        </div>
        <ul>
          {toolsArray.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    );
}

function Work_back() {
    const { t } = useTranslation();
  
    return (
      <div className="main-box">
        <div id="work" className="Work">
          <div className="Work-row-back">
            <Box_work_back name="Kalld" type="Web app" text ={t('Work_back_kall')} url="https://github.com/lKinox/Kalld" img={flaskIcon} tools="Flask Telnyx Python HTML CSS JS Git"/>
            <Box_work_back name="APIRest + JWT + Firebase" type="API" text ={t('Work_back_apirest')} url="https://github.com/lKinox/APIRest-Flask-JWT-Firebase" img={`${flaskIcon} ${firebaseIcon}`} tools="Flask Python Firebase"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Work_back;