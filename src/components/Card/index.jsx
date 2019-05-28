import React from 'react';
import icon from '../../images/icon.png'

const Card = () => {
    return (
        <div className='card'>
            <h1>Walk in Personal Bio</h1>
            <div className='content'>
                <img src={icon} alt="img" height="100" width="100"/>
                <div>
                    <div className='row'>
                        <p>Name:</p>
                        <p>Name:</p>
                    </div>
                    <div className='row'>
                        <p>Last visit:</p>
                        <p>Name:</p>
                    </div>
                    <div className='row'>
                        <p>Products:</p>
                        <p>Name:</p>
                    </div>
                    <div className='row'>
                        <p>Remarks:</p>
                        <p>Name:</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;