import React from 'react';
import icon from '../../images/icon.png'

const Card = () => {
    const style = {
        card: {
            boxShadow: '-1px 4px 5px 0px rgba(0,0,0,0.2)',
            padding: '20px',
            margin: '20px',
            content: {
                display: 'flex',
                flexDirection: 'row'
            },
            img: {
                marginRight: '20px'
            },
            row: {
                display: 'flex',
                flexDirection: 'row',
                firstChild: {
                    minWidth: '100px'
                }
            }
        }
    }
    return (
        <div style={style.card}>
            <h1 width="100%">Walk in Personal Bio</h1>
            <div style={style.card.content}>
                <img src={icon} alt="img" height="100" width="100" style={style.card.img}/>
                <div>
                    <div style={style.card.row}>
                        <p style={style.card.row.firstChild}>Name:</p>
                        <p>Name:</p>
                    </div>
                    <div style={style.card.row}>
                        <p style={style.card.row.firstChild}>Last visit:</p>
                        <p>Name:</p>
                    </div>
                    <div style={style.card.row}>
                        <p style={style.card.row.firstChild}>Products:</p>
                        <p>Name:</p>
                    </div>
                    <div style={style.card.row}>
                        <p style={style.card.row.firstChild}>Remarks:</p>
                        <p>Name:</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;