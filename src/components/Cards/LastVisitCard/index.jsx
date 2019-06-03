import React from 'react';

const LastVisitCard = () => {
    return (
        <div className='card card-2'>
            <h1>Last Visit Summary</h1>
            <div className='content'>
                <div className='contentpart'>
                    <div className='row'>
                        <h3>Branch Visit</h3>
                    </div>
                    <div className='row'>
                        <p>Last visit:</p>
                        <p>19/04/19</p>
                    </div>
                    <div className='row'>
                        <p>Branch:</p>
                        <p>PJ</p>
                    </div>
                    <div className='row'>
                        <p>Served by:</p>
                        <p>Lee ko wang</p>
                    </div>
                    <div className='row'>
                        <p>Remarks:</p>
                        <p>none</p>
                    </div>
                </div>
                <div className='contentpart'>
                    <div className='row'>
                        <h3>Off Branch Transaction</h3>
                    </div>
                    <div className='row'>
                        <p>Activity time:</p>
                        <p>11:30</p>
                    </div>
                    <div className='row'>
                        <p>Channel:</p>
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

export default LastVisitCard;