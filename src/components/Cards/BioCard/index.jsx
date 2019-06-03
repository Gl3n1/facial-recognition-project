import React from 'react';
import icon from '../../../images/icon.png'

const BioCard = () => {
    return (
        <div className='card'>
            <h1>Walk in Personal Bio</h1>
            <div className='content'>
                <img src={icon} alt="img" height="100" width="100"/>
                <div>
                    <div className='row'>
                        <p>Name:</p>
                        <p>Gleen lexry alexander wan</p>
                    </div>
                    <div className='row'>
                        <p>Last visit:</p>
                        <p>19/04/19</p>
                    </div>
                    <div className='row'>
                        <p>Products:</p>
                        <p>Debit account</p>
                    </div>
                    <div className='row'>
                        <p>Remarks:</p>
                        <p>VIP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioCard;