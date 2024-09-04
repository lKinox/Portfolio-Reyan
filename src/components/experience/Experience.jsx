import React, {useContext } from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../ThemeContext';
import codingsteamLogo from '/icons/codingsteam.svg'
import posastudioLogo from '/icons/posastudio.webp'
import elitellcaLogo from '/icons/elitellca.png'
import waopressLogo from '/icons/waopress.png'
import upworkLogo from '/icons/upwork.png'
import deafulLogo from '/icons/code.png'

function Box_experience({ year, exp_name, position, description, url, project, tools, image }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const toolsArray = tools.split(' ');
  const { t } = useTranslation();

  return (
    <div className="Box_experience">
      <div className={isDarkMode ? 'light-mode' : 'dark-mode' }>
        <div className="Box_experience_first">
        <h4>{year}</h4>
        <h3>{exp_name}</h3>
        <h4>{position}</h4>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        {project && (
          <h4>{t('Project_dest')} <a href={`#${project}`}>{project}</a></h4>
        )}
        <ul>
          {toolsArray.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
          </ul>
        </div>
      </div>
      <div className="Box_experience_last">
        <img src={image} alt={exp_name} />
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useTranslation();

  return (
    <div className="main-box">
      <div id="experience" className="Experience">
        <h2>{t('Experience_h2')}</h2>
        <p>{t('Experience_text')}</p>
      </div>
      <div className="Experience-row">
          <Box_experience year={t("Freelance_years")} exp_name="Freelance" position={t('Web_developer_full')} description="" url="https://acortar.link/wgSybK" tools="HTML CSS JS PHP Wordpress Python Flask WebDesign" image={upworkLogo} />
          <Box_experience year="03/2024 - 06/2024" exp_name="Waopress" position={t('Web_developer_full')} description={t('Waopress_text')} url="https://waopress.com" project="Ginqo" tools="HTML CSS JS PHP Wordpress Flutter Firebase cPanel WebDesign" image={waopressLogo} />
          <Box_experience year="08/2023 - 04/2024" exp_name="Trifecta" position={t('Web_developer_full')} description={t('Trifecta_text')} url="" project="Kalld" tools="HTML CSS JS PHP Wordpress Python Flask SQLite Bootstrap cPanel WHM WebDesign" image={deafulLogo} />
          <Box_experience year="01/2023 - 10/2023" exp_name="Elitellca" position={t('Web_developer_full')} description={t('Elitellca_text')} url="https://elitellca.com/" project="Elitellca" tools="HTML CSS JS PHP Wordpress Python Flask SQLite Bootstrap WebDesign" image={elitellcaLogo} />
          <Box_experience year="06/2022 - 01/2023" exp_name="Posa Studio Creativo" position={t('Web_developer_full')} description={t('PosaStudio_text')} url="https://www.comunicacionvisual.com" tools="HTML CSS JS PHP Wordpress MySQL Bootstrap WebDesign" image={posastudioLogo} />
          <Box_experience year="04/2022 - 08/2022" exp_name="Coding Steam" position={t('Web_developer')} description={t('CodeStream_text')} url="https://codingsteam.com" project="CodingSteam" tools="HTML CSS JS" image={codingsteamLogo} />
      </div>
    </div>
  );
}

export default Experience;