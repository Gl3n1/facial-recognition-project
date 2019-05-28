import React from 'react';
import icon from '../../images/icon.png'

const SideNavbar = () => {
    const style = {
        padding: '10px 15px',
        width: '30px',
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        img: {
            margin: '10px 0'
        }
    }
    return (
        <div style={style}>
            <img style={style.img} src={icon} alt="icon" height='30'/>
            <img style={style.img} src={icon} alt="icon" height='30'/>
            <img style={style.img} src={icon} alt="icon" height='30'/>
            <img style={style.img} src={icon} alt="icon" height='30'/>
        </div>
    )
}

export default SideNavbar;