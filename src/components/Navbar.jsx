import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about'>About</Link>
                <Link to='/counter'>Counter</Link>
            </div>
        </div>
    );
};

export default Navbar;