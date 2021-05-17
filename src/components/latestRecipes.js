import React from 'react'

import Card from './card'

import arrow from '../images/arrow.svg'

const LatestRecipes = ({isVisible, data}) => {


    const recipes = [
        { 
            id: 1,
            img: data.dish3.childImageSharp.fluid,
            txt: "Portabello Baked Eggs with avocado & bread",
            price: 8
        },
        { 
            id: 2,
            img: data.dish2.childImageSharp.fluid,
            txt: "Summery salmon beetroot & spicy mix",
            price: 15
        },        
        { 
            id: 3,
            img: data.dish1.childImageSharp.fluid,
            txt: "Backed Avocado Egg with herbs",
            price: 8
        }
    ]


    return (
        <>

        <div className={`header ${isVisible ? 'visible' : ''}`}>

            <h2>Latest recipes</h2>

            <div className="latest-recipes-nav">

                <a href="/" className="prev">
                    <img alt='arrow' src={arrow} />
                </a>

                <a href="/" className="next">
                    <img alt='arrow' src={arrow} />
                </a>

            </div>
        </div>

        <div className={`recipes-cards ${isVisible ? 'visible' : ''}`}>

            {recipes.map(recipy => (

                <Card key={recipy.id} recipy={recipy} />

            ))}

        </div>
            
        </>
    )
}

export default LatestRecipes