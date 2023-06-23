import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import PokemonsContainer from '../components/Pokedex/PokemonsContainer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import header from '/header/headerpokedex.svg'
import pokebola from '/header/pokebola.svg'
import logo from '/header/logopokedex.svg'
import '../components/Pokedex/styles/pokedexHeader.css'




const Pokedex = () => {
  
  const [selectValue, setSelectValue] = useState('all-pokemons')


  const trainerName = useSelector(states => states.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=700&offset=0'
  const [pokemons, getAllPokemons, setInfoApi, setPokemons] = useFetch(url)

  const urlType = `https://pokeapi.co/api/v2/type/`
  const [types, getAllTypes] = useFetch(urlType)

  useEffect(() => {
    if (selectValue === 'all-pokemons') {
      getAllPokemons()
     
      
    }else{
      axios.get(selectValue)
      .then(res => {
        const data = {results: res.data.pokemon.map(pokeData => pokeData.pokemon)
          
          }
          setPokemons(data)
    })
      .catch(err =>console.log(err))
    }

  }, [selectValue])



  useEffect(() => {
    getAllTypes() 

  }, [])


  const namePokemon = useRef()
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()

    const inputValue = namePokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`)
  }

  const handleChangeType = e => {
    setSelectValue(e.target.value);
  }

  return (
    <>
    <div className='header'>
      <img className='header__img' src={header} alt="logo" />
    <div className='header__hijo1'>
      <img className='header__pokebola' src={pokebola} alt="logo" />
    </div>
    <div className='header__hijo2'>
      <img className='header__logo' src={logo} alt="logo" />
    </div>
    </div>
    <article className='header__section'>
      <h2 className='header__title'>Welcomen <span className='header__name'>{trainerName}!</span>, you can find your favorite pokemon. </h2>
      <div className='section__option'>
      <form className='header__form' onSubmit={handleSubmit} >
        <input className='header__input' ref={namePokemon} placeholder="Pokemon's name" type="text" />
        <button className='header__btn'>Search</button>
      </form>
      <select className='section__select' onChange={handleChangeType}>
        <option value='all-pokemons' >All Pokemons</option>
        {
          types?.results.map(typeInfo => (
            <option className='all-pokemons-value' value={typeInfo.url} key={typeInfo.url}>{typeInfo.name.toUpperCase()}</option>
          ))
        }
      </select>
      </div>
      <div className='header__card' >
     <PokemonsContainer pokemons={pokemons?.results} 
                        />
     </div>
    </article>
    </>
  )
}

export default Pokedex