import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState("Login");
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={LOGO_URL} alt='logo' className='logo' />
            </div>
            <ul className='nav-items'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><button className="login-btn" onClick={() => loginBtnText === 'Login' ? setLoginBtnText("Logout") : setLoginBtnText("Login")}>{loginBtnText}</button></li>
            </ul>
        </div>
    )
}

export default Header;