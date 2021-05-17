import React, { useEffect, useState, useMemo} from 'react'

import Img from "gatsby-image"

const Canvas = ({data}) => {

    const images = useMemo(() => {

        return (
            [data.ingrd1.childImageSharp.fluid,
            data.ingrd2.childImageSharp.fluid,
            data.ingrd3.childImageSharp.fluid,
            data.ingrd4.childImageSharp.fluid,
            data.ingrd5.childImageSharp.fluid,
            data.ingrd6.childImageSharp.fluid,
            data.ingrd7.childImageSharp.fluid]    
        )
    }, [data]) 

    const [carrotsSRC, setCarrotsSRC] = useState([])
    const [cucumbersSRC, setCucumbersSRC] = useState([])
    const [orangeSRC, setOrangeSRC] = useState([])
    const [lemonSRC, setLemonSRC] = useState([])
    const [beetrootSRC, setBeetrootSRC] = useState([])
    const [oniosSRC, setoniosSRC] = useState([])

    useEffect(() => {

        const makeIngr = () => {
    
            let [carrots, cucumbers, oranges, lemons, beetroots, onions] = [ [],[],[],[],[],[] ]
    
            for(let i = 0; i < 3; i++){
                carrots.push(images[1])
                cucumbers.push(images[2])
                oranges.push(images[3])
                lemons.push(images[4])
                beetroots.push(images[5])
                onions.push(images[6])
            }
            setCarrotsSRC(carrots)
            setCucumbersSRC(cucumbers)
            setOrangeSRC(oranges)
            setLemonSRC(lemons)
            setBeetrootSRC(beetroots)
            setoniosSRC(onions)
        }

        makeIngr()

    }, [images])



    return (
    <>
        <div id='canvas'>
            <Img alt='salad' className='salad' fluid={images[0]} />
            {carrotsSRC.map((item, index) =>    <Img alt='salad' className={`carrot i-${index}`} key={index} fluid={item} />)}
            {cucumbersSRC.map((item, index) =>  <Img alt='salad' className={`cucumber i-${index}`} key={index} fluid={item} />)}
            {orangeSRC.map((item, index) =>     <Img alt='salad' className={`orange i-${index}`} key={index} fluid={item} />)}
            {lemonSRC.map((item, index) =>      <Img alt='salad' className={`lemon i-${index}`} key={index} fluid={item} />)}
            {beetrootSRC.map((item, index) =>   <Img alt='salad' className={`beetroot i-${index}`} key={index} fluid={item} />)}
            {oniosSRC.map((item, index) =>      <Img alt='salad' className={`onion i-${index}`} key={index} fluid={item} />)}
        </div>
    </>      
    )
}

export default Canvas