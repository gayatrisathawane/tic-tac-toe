import React, { useState } from 'react'
import logo from './images.png'
import './App.css'

const App = () => {

  const [player, setPlayer] = useState(1)
  const [board, setBoard] = useState({

    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",

  })
  return (
    <div>

      <img src={logo} alt="logo" className='logo' />
      <h1 className='text-center text'>Let's Play The Tic-Tac-Toc Game ! </h1>

      <button className='btn-new-game'>Start a new game</button>

      <div className='player-container'>

        <span className='player-text'>player 1: 💓 </span>
        <span className='player-text'>player 2:  ⭕ </span>
      </div>


      <div className='container'>

        <div className='row'>
          <div className='box'>{board[1]}</div>
          <div className='box'>{board[2]}</div>
          <div className='box'>{board[3]}</div>

        </div>

        <div className='row'>
          <div className='box'>{board[4]}</div>
          <div className='box'>{board[5]}</div>
          <div className='box'>{board[6]}</div>

        </div>


        <div className='row'>
          <div className='box'>{board[7]}</div>
          <div className='box'>{board[8]}</div>
          <div className='box'>{board[9]}</div>

        </div>


      </div>

      <button className='btn-new-game'>Reset</button>

    </div>
  )
}

export default App
