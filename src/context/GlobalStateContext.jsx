// Global variables
import { createContext } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// // Create a provider component
// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true'; // load from localStorage
//   });

//   const toggleDarkMode = () => {
//     setDarkMode(prev => {
//       const next = !prev;
//       localStorage.setItem('darkMode', next); // Save to local storage
//       return next;
//     });
//   };

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     document.body.className = darkMode ? 'dark' : 'light';
//   }, [darkMode]);

//   return (
//     <GlobalStateContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

// // Export a custom hook to use the theme context
// // export const useTheme = () => useContext(GlobalStateContext);
