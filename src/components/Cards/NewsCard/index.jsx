import React from 'react';
import Iframe from 'react-iframe';

const NewsCard = () => {
    return (
        <div className='card'>
            <h1>News</h1>
            <div className='content'>
                <Iframe 
                    url="http://localhost:5000?url=https://www.facebook.com/Thisisglenwan"
                    width='100%'
                />
            </div>
        </div>
    )
}

export default NewsCard;