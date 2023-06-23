import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ErrorInput from "../components/error/ErrorInput"
import header from '/header/headerpokedex.svg'
import pokebola from '/header/pokebola.svg'
import logo from '/header/logopokedex.svg'
import '../components/Pokedex/styles/pokedexInfo.css'
import PokedexDataCart from "../components/pokeInfoCart/PokedexDataCart"
import '../components/Pokedex/styles/pokecard.css'
import PokedexInfoFooter from "../components/pokeInfoCart/PokedexInfoFooter"

const PokedexInfo = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokemonByName, hasError] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  }, [name])
  console.log(pokemon);
  return (
    
    <section  className="info__pokemons">
    
      {
        hasError ? <ErrorInput
          name={name}
        />
        
          : (<>
         
            <div className='header__info'>
              <img className='header__img__info' src={header} alt="logo" />
              <div className='header__hijo1__info'>
                <img className='header__pokebola__info' src={pokebola} alt="logo" />
              </div>
              <div className='header__hijo2__info'>
                <img className='header__logo__info' src={logo} alt="logo" />
              </div>
            </div>
            
            <article className={`pokemons ${pokemon?.types[0].type.name}`} >
              <div className={`pokemons__cart bg-${pokemon?.types[0].type.name}`}>
                <img className="pokemons__img" src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.name} />
              </div>
              <div className="pokemons__id">
                <h2 className="pokemons_number" >#{pokemon?.id}</h2>
              </div>
              <div className="pokemons__header">
             
              <h2 className="pokemons__name">{pokemon?.name}</h2>
               <hr className="linear"/>
              </div>
              <section className="pokemons__info">
                <ul className="pokemons__list">
                  <li className="pokemons__items">Peso
                  <span className="pokemons__data" >{pokemon?.weight}</span>
                  </li>
                  <li className="pokemons__items">Altura
                  <span className="pokemons__data" >{pokemon?.height}</span>
                  </li>
                </ul>
              </section>

              <section className="pokemons__body">
                <div className="pokemons__power">

                  <h3 className="pokemons__type">Tipo</h3>
                  <ul className="pokemons__list_type">
                    {
                      pokemon?.types.map(typeInfo => (
                        <li className="pokemons__value items-value" key={typeInfo.type.url} >
                          <span className="pokemons__name_value-value">{typeInfo.type.name}</span>

                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="pokemons__type" >Habilidades</h3>

                  <ul className="pokemons__list_type" >
                    {
                      pokemon?.abilities.map(abilitie => (
                        <li className="pokemons__value" key={abilitie.ability.url}>{abilitie.ability.name}</li>
                      ))
                    }
                  </ul>
                </div>
              </section>

              <section className="pokemons__stats">
                
                <PokedexDataCart pokemon={pokemon}/>
              </section>
                
            </article>
            <div>
            <PokedexInfoFooter
                    pokemon={pokemon}
                  />
            </div>
          </>
          )

      }

    </section>
   
  )
}

export default PokedexInfo