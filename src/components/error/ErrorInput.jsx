import React from 'react'
import imgError from '/errorImg/pokeImg.jpg'

const ErrorInput = ({name}) => {

  

  return (
    <div className='cart__error' >
      <div><img  className='img__error' src={imgError} alt="imagen-error" /></div>
        <h2 className='error'>The pokemon "<span className='name__error'>{name}</span>" doesn't exist</h2>
    </div>
  )
}

export default ErrorInput