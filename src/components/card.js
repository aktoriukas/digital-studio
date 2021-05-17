import React from 'react'

import trollyImg from '../images/supermarket.svg'
import Img from "gatsby-image"

const Card = ({recipy}) => {

    return (
        <div className="card">

            <Img fluid={recipy.img} />

            <div className="info">
                <p>{recipy.txt}</p>

                <span className="price">{recipy.price}</span>

                <a href="/" className="buy">
                    <img alt='icon' className="icon" src={trollyImg} />
                </a>
            </div>
            
        </div>
    )
}

export default Card