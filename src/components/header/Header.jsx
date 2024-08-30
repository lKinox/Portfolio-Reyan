import { useContext, useState, useEffect } from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import './Header.css'
import ThemeContext from '../../ThemeContext';
import Cookies from 'js-cookie';

function Header() {
  const initialLanguage = Cookies.get('language') || 'es';

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const [language, setLanguage] = useState(initialLanguage);
  

  useEffect(() => {
    Cookies.set('language', language, { expires: 365 });
  }, [language]);

  useEffect(() => {
    Cookies.set('darkMode', isDarkMode.toString(), { expires: 365 });
  }, [isDarkMode]);

  const { t } = useTranslation();

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleNav = () => {
    setIsEnabled(!isEnabled);
  };


  return (
    <header className="App-header">
      <h3>Reyan J.</h3>
      <div className="sc-block">
        <ul className={isDarkMode ? 'light-mode' : 'dark-mode' } >
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#home">{t('Nav_home')}</a></li>
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#about-me">{t('Nav_about')}</a></li>
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#resume">{t('Nav_resume')}</a></li>
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#experience">{t('Nav_experience')}</a></li>
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#work">{t('Nav_work')}</a></li>
            <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#contact">{t('Nav_contact')}</a></li>
        </ul>
        <button type="button"onClick={toggleTheme} className={isDarkMode ? 'light-mode' : 'dark-mode' }>
            {isDarkMode ? <span class="material-symbols-outlined light-mode">dark_mode</span> : <span class="material-symbols-outlined dark-mode">light_mode</span>}
        </button>
        <div className={`language-switch ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
            <button type="button" className={language === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')}>ES</button>
            <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
            <span className={`language-box ${language === 'en' ? 'right' : ''}`}></span>
        </div>
      </div>
      <div className={`nav-sec ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
        <button type="button"onClick={toggleTheme}>
              {isDarkMode ? <span class="material-symbols-outlined light-mode">dark_mode</span> : <span class="material-symbols-outlined dark-mode">light_mode</span>}
        </button>
        <div onClick={toggleNav} class="nav-mob-btn">
          <span class="material-symbols-outlined">menu</span>
        </div>
        <div className={`nav-mob ${isEnabled ? 'enable' : 'disable'}`}>
          <div onClick={toggleNav} class="nav-mob-btn">
            <span class="material-symbols-outlined">close</span>
          </div>
          <div className='nav-mob-menu'>
            <ul className={isDarkMode ? 'light-mode' : 'dark-mode' } >
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#home">{t('Nav_home')}</a></li>
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#about-me">{t('Nav_about')}</a></li>
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#resume">{t('Nav_resume')}</a></li>
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#experience">{t('Nav_experience')}</a></li>
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#work">{t('Nav_work')}</a></li>
              <li><a className={isDarkMode ? 'light-mode' : 'dark-mode' } href="#contact">{t('Nav_contact')}</a></li>
            </ul>
            <div className={`language-switch ${isDarkMode ? 'light-mode' : 'dark-mode' }`}>
              <div className='langES'>
                <button type="button" className={language === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')}>ES</button>
              </div>
              <div className='langEN'>
                <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
              </div>
              
              <span className={`language-box ${language === 'en' ? 'right' : ''}`}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header