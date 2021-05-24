import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';

function NavBar() {

    const { userStatus, toggleAuth } = useContext(AuthContext);
    const { isLight, dark, light } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const uiStyle = {
        color: theme.syntax,
        backgroundColor: theme.ui,
    }
    const auth = {
        cursor: 'pointer',
        border: '.1px dotted tomato',
        padding: '5px 0'
    }

    return (
        <nav style={uiStyle}>

            <h1>Context App</h1>
            
            <p onClick={toggleAuth} style={auth}>
                {userStatus ? 'Login' : 'Log Out'}
            </p>
            
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;