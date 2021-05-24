import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';


function ToggleTheme() {

    const { isLight, dark, light, toggleTheme } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const btnBg = {
        color: theme.syntax,
        backgroundColor: theme.bg,
    }

    return (
        <button style={btnBg} onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}

export default ToggleTheme;