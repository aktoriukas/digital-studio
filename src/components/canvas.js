import React, {useRef, useEffect, useState} from 'react'

import img1 from '../images/png/1.png'
import img2 from '../images/png/2.png'
import img3 from '../images/png/3.png'
import img4 from '../images/png/4.png'
import img5 from '../images/png/5.png'
import img6 from '../images/png/6.png'
import img7 from '../images/png/7.png'

const Canvas = () => {

    const [images, setimagesSRC] = useState([
        img1, img2, img3, img4, img5, img6, img7
    ])
    const [carrotsSRC, setCarrotsSRC] = useState([])
    const [cucumbersSRC, setCucumbersSRC] = useState([])
    const [orangeSRC, setOrangeSRC] = useState([])
    const [lemonSRC, setLemonSRC] = useState([])
    const [beetrootSRC, setBeetrootSRC] = useState([])
    const [oniosSRC, setoniosSRC] = useState([])

    useEffect(() => {

        makeIngr()
    }, [])

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


    return (
    <>
        <div id='canvas'>
            <img className='salad' src={images[0]} />
            {carrotsSRC.map((item, index) =>    <img className={`carrot i-${index}`} key={index} src={item} />)}
            {cucumbersSRC.map((item, index) =>  <img className={`cucumber i-${index}`} key={index} src={item} />)}
            {orangeSRC.map((item, index) =>     <img className={`orange i-${index}`} key={index} src={item} />)}
            {lemonSRC.map((item, index) =>      <img className={`lemon i-${index}`} key={index} src={item} />)}
            {beetrootSRC.map((item, index) =>   <img className={`beetroot i-${index}`} key={index} src={item} />)}
            {oniosSRC.map((item, index) =>      <img className={`onion i-${index}`} key={index} src={item} />)}
        </div>
    </>      
    )
}

export default Canvas