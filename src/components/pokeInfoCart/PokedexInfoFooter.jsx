import '../Pokedex/styles/pokedexFooter.css'
import React from 'react'

const PokedexInfoFooter = ({pokemon}) => {
  return (
    <div className='moves'> 
        <h3 className='moves__title'>Movements</h3>
        <hr className='move__linea'/>
        <div className='move_cart'>
            <ul className='move__list'>
                {
                    pokemon?.moves.map(moveInfo =>(
                   <h4 className='move__items' key={moveInfo.move.url}>{moveInfo.move.name}</h4> 
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default PokedexInfoFooter