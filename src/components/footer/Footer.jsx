import React, { useContext } from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../ThemeContext';
import reactLogo from '/icons/react.svg'

function Contact() {
    const { t } = useTranslation();

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
    return (
        <div className="Footer">
            <p className={isDarkMode ? 'light-mode' : 'dark-mode' }>
                {t('Footer_text')}
                <img src={reactLogo} className="logo react" alt="React logo" />
            </p>
        </div>
    );
}
  
export default Contact;