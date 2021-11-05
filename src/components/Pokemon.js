import React from 'react'

const Pokemon = ({id, name, type, imgId, color}) => {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgId}.png`;
    return (
        <div className="pokemon" style={{backgroundColor: color}}>
        <div className="img-container">
            <img src={url} alt={name} />
        </div>
        <div className="info">
            <span className="number">#{id}</span>
            <h3 className="name">{name}</h3>
            <small className="type">Type: <span>{type}</span> </small>
        </div> 
        </div>
    )
}

export default Pokemon
