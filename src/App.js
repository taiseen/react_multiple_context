import React from 'react';

import BookList from './Components/BookList';
import AuthContextProvider from './Components/contexts/AuthContext';
import BookContextProvider from './Components/contexts/BookContext';
import ThemeContextProvider from './Components/contexts/ThemeContext';
import NavBar from './Components/NavBar';
import ToggleTheme from './Components/ToggleTheme';

const App = () => {

    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <NavBar />
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                    <ToggleTheme />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
};

export default App;