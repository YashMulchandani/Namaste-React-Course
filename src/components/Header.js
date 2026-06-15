import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState("Login");
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={LOGO_URL} alt='logo' className='logo' />
            </div>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li><button className="login-btn" onClick={() => loginBtnText === 'Login' ? setLoginBtnText("Logout") : setLoginBtnText("Login")}>{loginBtnText}</button></li>
            </ul>
        </div>
    )
}

export default Header;