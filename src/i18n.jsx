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
          Nav_work: 'Trabajo',
          Nav_contact: 'Contacto',
          // Header

          // About
          About_h1: 'Hola, Soy Reyan',
          About_p: 'Desarrollador web full-stack',
          About_h2: "Sobre mí",
          About_text: "Me apasiona el desarrollo web y la informática en general. Tengo habilidades para el front-end y el back-end, soy detallista con los desarrollos que hago y me gusta que sean profesionales y útiles. Mi lenguaje favorito para programar es Python, aunque de igual manera sé usar PHP. Tengo un nivel alto en maquetación (HTML) y estillos (CSS), sé usar JS para crear funcionalidades y animaciones en los desarrollos que hago. Para las bases de datos me gusta usar MySQL, SQLite y Firebase. Además constantemente me encuentro aprendiendo nuevas herramientas que me permitan mejorar los trabajos que hago y expandir mis capacidades para realizar cosas más complejas. A parte de la programación, me gustan mucho las matemáticas y la música.",
          // About

          // Resume
          Resume_h2: 'Resumen',
          Resume_h3_front: 'Front-End:',
          Years: 'Años',
          Year: 'Año',
          Resume_h3_back: 'Back-End:',
          Resume_h3_db: 'Bases de Datos:',
          Resume_h3_devops: 'DevOps',
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
          Nav_work: 'Work',
          Nav_contact: 'Contact',
          // Header

          // About
          About_h1: "Hi, I'm Reyan",
          About_p: 'Full-stack web developer',
          About_h2: "About me",
          About_text: "I'm passionate about web development and computing in general. I have front-end and back-end skills, I'm very detail-oriented with the developments I do and I like them to be professional and useful. My favorite language for programming is Python, although I also know how to use PHP. I have a high level in layout (HTML) and styles (CSS), I know how to use JS to create functionalities and animations in the developments I do. For databases I like to use MySQL, SQLite and Firebase. In addition, I am constantly learning new tools that allow me to improve the work I do and expand my capabilities to do more complex things. Apart from programming, I really like math and music.",
          // About

          // Resume
          Resume_h2: 'Resume',
          Resume_h3_front: 'Front-End:',
          Years: 'Years',
          Year: 'Year',
          Resume_h3_back: 'Back-End:',
          Resume_h3_db: 'Data bases:',
          Resume_h3_devops: 'DevOps',
          // Resume

          // Experience
          Experience_h2: 'Experience',
          Experience_text: 'Check out some of my experiences working with companies and freelancers!',
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