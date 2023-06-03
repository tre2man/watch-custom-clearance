import {createContext} from 'react';

export type ColorMode = 'light' | 'dark' | 'default';

export const ColorModeContext = createContext<ColorMode>('light');
