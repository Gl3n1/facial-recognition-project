import React from 'react';
import logo from '../../images/hsbc.png'
import DropDown from './DropDown'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt='hsbc' height="30" />
            <DropDown />
        </div>
    )
}

export default Navbar;