import { useContext } from 'react';

import { AuthContext } from '@context/';


export const useAppContext = () => useContext(AuthContext);
