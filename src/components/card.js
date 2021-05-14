import React from 'react'

import trollyImg from '../images/supermarket.svg'

const Card = ({recipy}) => {

    const style = {
        background: `url(${recipy.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    return (
        <div className="card">

            <div className="img" style={style}></div>

            <div className="info">
                <p>{recipy.txt}</p>

                <span className="price">{recipy.price}</span>

                <a href="/" className="buy">
                    <img className="icon" src={trollyImg} />
                </a>
            </div>
            
        </div>
    )
}

export default Card