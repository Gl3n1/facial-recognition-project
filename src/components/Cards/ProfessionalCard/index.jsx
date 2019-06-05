import React from 'react';
import jeffProfile from '../../../images/screencapture-linkedin-in-jeffweiner.png';

const SocialCard = () => {
    return (
        <div className='card'>
            <h1>Professional Update</h1>
            <div className='content'>
                <img className='linkedInProfile' src={jeffProfile} alt="jeff"/>
            </div>
        </div>
    )
}

export default SocialCard;