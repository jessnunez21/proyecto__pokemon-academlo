import { useRef } from 'react'
import image from '/image_svg_home/logo.svg.png'
import { setTrainerNameGlobal } from '../store/slice/trainerName.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/Pokedex/styles/pokeHome.css'
import footer from '/image_svg_home/footerpokedex.svg'
const Home = () => {

 const nameInput= useRef()
 const navigate = useNavigate()

 const  trainerName  = useSelector(states => states.trainerName)
 
 const dispatch = useDispatch()
 
  const handleSubmit = e =>{
    e.preventDefault()
  dispatch(setTrainerNameGlobal(nameInput.current.value.trim()))
   
    navigate('/pokedex')
  }
  

  return (
    <>
    <div className='home'>
        <div className='home__img'>
            <img  className='home__pokemon' src={image} alt="imagen_homen_pokemon" />
        </div>
        <h1 className='home__title'>
            Hi trainer!
        </h1>
        <p className='home__Subtitle'> To star in this application  plis give me your trainer name</p>
        <form className='home__form' onSubmit={handleSubmit} >
            <input className='home__input' ref={nameInput} placeholder='trainer name' type="text" />
            <button className='home__btn'>Start</button>
        </form>

       
    </div>
    <div className='footer__home-logo'>
          <img className='footer_logo' src={footer} alt="imagen-footer" />
        </div>

   
    </>

  )
}

export default Home