import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';   


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          // Header
          Nav_home: 'Inicio',
          Nav_about: 'Sobre Mí',
          Nav_resume: 'Habilidades',
          Nav_experience: 'Experiencia',
          Nav_work: 'Trabajos',
          Nav_contact: 'Contacto',
          // Header

          // About
          About_h1: 'Hola, soy Reyan',
          About_p: 'Desarrollador web full-stack',
          About_button: 'Descargar CV',
          About_h2: "Sobre mí",
          About_text_1: "Tengo 24 años, soy de Venezuela. Inicié en el mundo del desarrollo web de manera autodidacta haciendo cursos y experimentando por mi cuenta.",
          About_text_2: "Tengo mas de 2 años de experiencia desarrollando para empresas y de manera freelance con diferentes tecnologías. Me gusta aprender nuevas herramientas que pueda integrar a mi trabajo y mejorar en los conocimientos que tengo.",
          About_text_3: "Mi hobbie es la música y mi instrumento favorito es el piano 🎹",
          // About

          // Resume
          Resume_h2: 'Resumen',
          Resume_h3_front: 'Front-End:',
          Years: 'Años',
          Year: 'Año',
          Resume_h3_back: 'Back-End:',
          Resume_h3_db: 'Bases de Datos:',
          Resume_h3_devops: 'Otras herramientas',
          // Resume

          // Experience
          Experience_h2: 'Experiencia',
          Experience_text: '¡Conoce algunas de mis experiencias trabajando con empresas y freelance!',
          Web_developer: "Desarrollador web",
          Web_developer_full: "Desarrollador Web Full-Stack",
          CodeStream_text: "Encargado en desarrollar y corregir errores de maquetación, estilos y código js",
          PosaStudio_text: "Encargado en desarrollar y dar mantenimiento a websites de la empresa y de los clientes. Mejorar y dar mantenimiento a aplicación administrativa de la empresa.",
          Elitellca_text: "Encargado en desarrollar y dar mantenimiento a websites de la empresa y de los clientes. Desarrollar aplicaciones de la empresa y para los clientes.",
          Trifecta_text: "Encargado en desarrollar y dar mantenimiento a websites de la empresa y de los clientes. Desarrollar aplicaciones de la empresa y para los clientes. Dar mantenimiento al servidor dedicado de la empresa.",
          Waopress_text: "Encargado de desarrollar websites y dar soporte a clientes de la empresa. Crear plugins y código a medida dedicado a WordPress.",
          Freelance_text: "Diferentes tipos de proyectos.",
          Freelance_years: "2022 - Presente",
          Project_dest: "Proyecto descatado:",
          // Experience

          // Work
          Work_h2: 'Trabajos',
          Work_text: '¡Estos son algunos proyectos destacados que he realizado!',
          Work_back_kall: 'Una aplicación web desarrollada con Flask que utiliza la plataforma Telnyx para ofrecer una gestión flexible y escalable de las comunicaciones salientes. La aplicación incluye envío masivo de SMS, llamadas con IVR habilitado y registro detallado de llamadas.',
          Work_back_apirest: 'Esta API REST, construida con Flask y protegida con JWT (JSON Web Tokens), usa como base de datos a Firebase. Proporciona funcionalidades básicas de registro, inicio de sesión y gestión de usuarios.',
          Work_back_appscrap: 'Esta aplicación web está desarrollada con React y NodeJS con Express. Recupera información de la base de datos usando Atlas MongoDB que a su vez recibe los datos de mi proyecto back-end "API Scrapy + MongoDB". El objetivo de esta aplicación es comparar precios de productos de los marketplace de supermercados',
          Work_back_apiscrap: 'Esta API, construida con Flask usando la librería Scrapy y MongoDB como sistema de base de datos. Tiene como objetivo extraer datos de productos de marketplaces de supermercados y enviar los datos a la base de datos en MongoDB',
          // Work

          // Contact
          Contact_h2: 'Contacto',
          Contact_text: 'Trabajemos Juntos',
          // Contact

          // Footer
          Footer_text: 'Diseñado y desarrollado por ReyanJ',
          // Footer
        },
      },
      en: {
        translation: {
          // Header
          Nav_home: 'Home',
          Nav_about: 'About me',
          Nav_resume: 'Skills',
          Nav_experience: 'Experience',
          Nav_work: 'Works',
          Nav_contact: 'Contact',
          // Header

          // About
          About_h1: "Hi, I'm Reyan",
          About_p: 'Full-stack web developer',
          About_button: 'Download CV',
          About_h2: "About me",
          About_text_1: "I am 24 years old, I am from Venezuela. I started in the world of web development as a self-taught person, taking courses and experimenting on my own.",
          About_text_2: "I have more than 2 years of experience developing for companies and as a freelancer with different technologies. I like to learn new tools that I can integrate into my work and improve the knowledge I have.",
          About_text_3: "My hobby is music and my favorite instrument is the piano. 🎹",
          // About

          // Resume
          Resume_h2: 'Resume',
          Resume_h3_front: 'Front-End:',
          Years: 'Years',
          Year: 'Year',
          Resume_h3_back: 'Back-End:',
          Resume_h3_db: 'Data bases:',
          Resume_h3_devops: 'Other tools',
          // Resume

          // Experience
          Experience_h2: 'Experience',
          Experience_text: 'Check out some of my experiences working with companies and freelance!',
          Web_developer: "Web Developer",
          Web_developer_full: "Full-Stack Web Developer",
          CodeStream_text: "Responsible for developing and correcting layout, style and js code errors",
          PosaStudio_text: "Responsible for developing and maintaining company and client websites. Improving maintenance of the company's administrative application.",
          Elitellca_text: "Responsible for developing and maintaining company and client websites. Developing company and client applications.",
          Trifecta_text: "Responsible for developing and maintaining company and client websites. Developing company and client applications. Maintaining the company's dedicated server.",
          Waopress_text: "Responsible for developing websites and supporting the company's clients. Responsible for creating plugins and custom code dedicated to WordPress.",
          Freelance_text: "Different types of projects.",
          Freelance_years: "2022 - Present",
          Project_dest: "Featured project:",
          // Experience

          // Work
          Work_h2: 'Jobs',
          Work_text: 'These are some of the highlights of my projects!',
          Work_back_kall: 'A web application built with Flask that utilizes the Telnyx platform to offer flexible and scalable outbound communication management. The application features bulk SMS sending, IVR-enabled calls, and detailed call logging.',
          Work_back_apirest: 'This REST API, built with Flask and secured with JWT (JSON Web Tokens), uses Firebase as its database. It provides basic registration, login, and user management functionality.',
          Work_back_appscrap: 'This web application is developed with React and NodeJS with Express. It retrieves information from the database using Atlas MongoDB which in turn receives the data from my back-end project "Scrapy API + MongoDB". The goal of this application is to compare product prices from supermarket marketplaces.',
          Work_back_apiscrap: 'This API, built with Flask using the Scrapy library and MongoDB as a database system, aims to extract product data from supermarket marketplaces and send the data to the MongoDB database.',
          // Work

          // Contact
          Contact_h2: 'Contact',
          Contact_text: "Let's Work Together",
          // Contact

          // Footer
          Footer_text: 'Designed and Developed by ReyanJ',
          // Footer
        },
      },
    },
  });

export default i18n;