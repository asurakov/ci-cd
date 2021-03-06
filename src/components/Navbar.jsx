import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about'>About</Link>
                <Link style={{marginLeft: '20px'}} to='/counter'>Counter</Link>
            </div>
        </div>
    );
};

export default Navbar;