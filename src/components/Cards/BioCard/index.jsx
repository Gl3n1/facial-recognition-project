import React from 'react';
import JeffWeiner from '../../../images/Jeff-Weiner.jpeg'

const BioCard = () => {
    return (
        <div className='card'>
            <h1>Walk in Personal Bio</h1>
            <div className='content'>
                <img src={JeffWeiner} className="img-face" alt="img" height="100" width="100"/>
                <div>
                    <div className='row'>
                        <p>Name:</p>
                        <p>Jeff Weiner</p>
                    </div>
                    <div className='row'>
                        <p>Last visit:</p>
                        <p>19/04/19</p>
                    </div>
                    <div className='row'>
                        <p>Products:</p>
                        <p>Debit account, Credit card</p>
                    </div>
                    <div className='row'>
                        <p>Remarks:</p>
                        <p>Owner of LinkedIn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioCard;