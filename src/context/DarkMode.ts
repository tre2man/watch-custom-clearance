import {createContext} from 'react';

type ColorMode = 'light' | 'dark';

const ColorMode = createContext<ColorMode>('light');

export default ColorMode;
