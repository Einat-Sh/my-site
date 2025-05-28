import { useContext } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

export const useTheme = () => useContext(GlobalStateContext);
