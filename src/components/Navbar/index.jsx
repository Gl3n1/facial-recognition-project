import React from 'react';
import logo from '../../images/hsbc.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt='hsbc' height="30" />
            <h3>John Doe</h3>
        </div>
    )
}

export default Navbar;