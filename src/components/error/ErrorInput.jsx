import React from 'react'

const ErrorInput = ({name}) => {

   

  return (
    <div className='cart__error'>
        <h2>The pokemon "<span>{name}</span>" doesn't exist</h2>
    </div>
  )
}

export default ErrorInput