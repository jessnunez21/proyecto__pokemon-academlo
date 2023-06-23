import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokecard.css'
import Loading from './Loading'
import './styles/loadingCard.css'

const PokemonCarts = ({ url }) => {



	const [pokemon, getPokemonsbyId] = useFetch(url)

	useEffect(() => {
		getPokemonsbyId()
		
	}, [])



	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/pokedex/${pokemon?.species.name}`)
	}

	return (
		<article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
			<header className={`pokecard__header bg-${pokemon?.types[0].type.name}`}>
				{
					pokemon?.sprites.other['official-artwork'].front_shiny  ?(
						<img className='pokecard__img' src={pokemon?.sprites.other['official-artwork'].front_shiny} alt={pokemon?.species.name} />
					)
					:<Loading/>
				}
				
			</header>
			<main className='pokecard__body'>
				<h3 className='pokecard__name'>{pokemon?.species.name}</h3>
				<ul className='pokecard__type'>
					{
						pokemon?.types.map(typeT => (
							<li className='pokecard__type-items' key={typeT.type.url}>{typeT.type.name}</li>

						))
					}
					
				</ul>
			</main>
			<footer className='pokecard__footer'>
				<ul className='pokecard__stats'>
					{
						pokemon?.stats.map(statItems => (
							<li className='pokecard__stats-items' key={statItems.stat.url} >
								<span className='pokecard__stats-label'>{statItems.stat.name}</span> 
								<span className='pokecard__stats-value' >{statItems.base_stat}</span></li>

						))
					}
				</ul>
			</footer>
		</article>
	)
}

export default PokemonCarts