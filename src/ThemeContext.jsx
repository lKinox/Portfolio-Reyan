import { createContext} from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext({
  isDarkMode: Cookies.get('darkMode') === 'true',
  toggleTheme: () => {},
});

export default ThemeContext;

