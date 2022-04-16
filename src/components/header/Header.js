import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/usefirebase';
import './header.css'


const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/product'}>Products</Link>
                <Link to={'/register'}>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {user?.uid ?

                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to={'/login'}>Log in</Link>
                }
            </nav>
        </div>
    );
};

export default Header;