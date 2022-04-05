import React from 'react'
import './Error.css'

const Error = () => {
  return (
    <div className='error-container'>
    <h3 className="error-message">Error, we cannot find the page you're looking for! Have you considered that maybe it is YOU that is wrong?</h3>
    <img className="error-gif" src="https://c.tenor.com/ocYNcAWYyHMAAAAM/99-cat.gif" alt="Angry Cat Throwing Keyboard at Error Filled Computer"/>
    </div>
  )
}

export default Error
