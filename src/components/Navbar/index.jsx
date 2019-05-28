import React from 'react';
import logo from '../../images/hsbc.png'

const Navbar = () => {
    const style = {
        padding: '10px 15px', 
        boxShadow: '-1px 4px 5px 0px rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <img src={logo} alt='hsbc' height="30" />
            <h3 style={{margin: 0, opacity: '0.7'}}>John Doe</h3>
        </div>
    )
}

export default Navbar;