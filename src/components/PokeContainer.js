import React from 'react'
import Header from './Header'
import PokemonList from './PokemonList'

const PokeContainer = () => {
    return (
        <>
        <Header />        
        <div className="poke-container" id="poke-container">
           <PokemonList /> 
        </div>
        </>
    )
}

export default PokeContainer
