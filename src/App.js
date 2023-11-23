import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>

      <p>Let's Play The Tic-Tac-Toc Game ! </p>
      <h1 className='text-center'>tic toc toe</h1>

      <div className='container'>

        <div className='row'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>

        </div>

        <div className='row'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>

        </div>


        <div className='row'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>

        </div>


      </div>
      
    </div>
  )
}

export default App
