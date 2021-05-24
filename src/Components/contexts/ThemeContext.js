import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    let [themes, setThemes] = useState({
        isLight: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee', },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555', }
    });

    const toggleTheme = () => {

        const theme = {
            ...themes,
            isLight: !themes.isLight,
        };
        
        setThemes(theme);
    }

    return (
        <ThemeContext.Provider value={
            {
                ...themes,
                toggleTheme
            }
        }>
            {props.children}

        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;


//     state = {
//         isLight: true,
//         light: { syntax: '#555', ui: '#ddd', bg: '#eee', },
//         dark: { syntax: '#ddd', ui: '#333', bg: '#555', }
//     }

//     toggleTheme = () => {
//         this.setState({
//             isLight: !this.state.isLight
//         });
//     }

//             <ThemeContext.Provider value={
//                 {
//                     ...this.state,
//                     toggleTheme: this.toggleTheme
//                 }
//             }>
