import React from 'react'
import PokemonCarts from '../Pokedex/PokemonCarts'



const PokemonsContainer = ({pokemons}) => {
 
  
 
  return (
    <section className='pokemons__container'>
      

       {
        pokemons?.map(pokemon =>(
          <PokemonCarts
              key={pokemon.url}
              url={pokemon.url}
            
          />
      ))
       
       }
    </section>
  )
}

export default PokemonsContainer