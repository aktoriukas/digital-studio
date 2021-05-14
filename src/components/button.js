import React from 'react'

const Button = ({txt, onClick}) => {
    return (
        <button className="btn-green" onClick={onClick}>{txt}</button>
    )
}

export default Button