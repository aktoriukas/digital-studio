import React from 'react'

import Card from './card'

import img1 from '../images/12.jpg'
import img2 from '../images/11.jpg'
import img3 from '../images/10.jpg'

import arrow from '../images/arrow.svg'

const LatestRecipes = ({isVisible}) => {

    console.log(isVisible)

    const recipes = [
        { 
            id: 1,
            img: img3,
            txt: "Portabello Baked Eggs with avocado & bread",
            price: 8
        },
        { 
            id: 2,
            img: img2,
            txt: "Summery salmon beetroot & spicy mix",
            price: 15
        },        
        { 
            id: 3,
            img: img1,
            txt: "Backed Avocado Egg with herbs",
            price: 8
        }
    ]

    const bam = () => {
        console.log('bam')
    }


    return (
        <>

        <div className="header">

            <h2>Latest recipes</h2>

            <div className="latest-recipes-nav">

                <a href="/" className="prev">
                    <img src={arrow} />
                </a>

                <a href="/" className="next">
                    <img src={arrow} />
                </a>

            </div>
        </div>

        <div className="recipes-cards">

            {recipes.map(recipy => (

                <Card key={recipy.id} recipy={recipy} />

            ))}

        </div>
            
        </>
    )
}

export default LatestRecipes