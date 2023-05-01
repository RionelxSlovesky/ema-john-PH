import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, loading, logOut} = useContext(AuthContext)

    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    loading || (user ? <>
                            <Link>{user.email}</Link>
                            <Link onClick={logOut}>Sign Out</Link>
                        </> : 
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </>)
                }

            </div>
        </nav>
    );
};

export default Header;