import { useContext } from 'react';

import { ThemeContext } from '@context/';


export const useAppThemeContext = () => useContext(ThemeContext);
