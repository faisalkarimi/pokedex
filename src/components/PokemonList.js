import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { colors } from '../constants/colors'
import Pokemon from './Pokemon'

const PokemonList = () => {
    const pokemonCount = 150
    const [pokemonList, setPokemonList] = useState([])
    const colorTypes = Object.keys(colors)
    
    useEffect(() => {
        const fetchPokemons = async () => {
            for(let i = 1; i <= pokemonCount; i++) {
                await getPokemon(i)
            }
        }
        
        const getPokemon = async (id) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const {data} = await axios.get(url)
            createPokemonCard(data)
            console.log(data)
        }

        const createPokemonCard = (pokemon) => {
            const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
            const id = pokemon.id.toString().padStart(3, '0')
            const poke_types = pokemon.types.map(type => type.type.name)
            const type = colorTypes.find(type => poke_types.indexOf(type) > -1)
            const color = colors[type]
            const pokemonCard = {
                name,
                id,
                color,
                imgId: pokemon.id,
                types: poke_types
            }
            setPokemonList(prevState => [...prevState, pokemonCard])
            }

            fetchPokemons()
        }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {pokemonList.map(pokemon => (
                <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} imgId={pokemon.imgId} color={pokemon.color} type={pokemon.types}/>
            ))}
        </div>
    )
}

export default PokemonList
