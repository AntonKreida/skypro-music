import { useContext } from 'react';

import { AuthContext } from '@context/';


export const useAppAuthContext = () => useContext(AuthContext);
