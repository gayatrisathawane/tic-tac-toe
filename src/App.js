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


  const play = (boxNo)=>{
    if(board[boxNo] !== "") {
      alert("already filled")
      return
    }
  if(player===1){
    setBoard({...board,[boxNo]:'❌'})
  }
  else{
     setBoard({...board,[boxNo]:'⭕'})

  }
  setPlayer(player===1 ?2:1)

  }
  return (
    <div>

      <img src={logo} alt="logo" className='logo' />
      <h1 className='text-center text'>Let's Play The Tic-Tac-Toc Game ! </h1>

      <button className='btn-new-game'>Start a new game</button>

      <div className='player-container'>
        <div className='player-text'>player 1: ❌ </div>
        <span className='player-text'>current player :{player ===1 ? '❌' :'⭕'}</span>
        <span className='player-text'>player 2:  ⭕ </span>
      </div>


      <div className='container'>

        <div className='row'>
          <div className='box' onClick={()=>{play(1)}}>{board[1]}</div>
          <div className='box' onClick={()=>{play(2)}}>{board[2]}</div>
          <div className='box' onClick={()=>{play(3)}}>{board[3]}</div>

        </div>

        <div className='row'>
          <div className='box'onClick={()=>{play(4)}}>{board[4]}</div>
          <div className='box'onClick={()=>{play(5)}}>{board[5]}</div>
          <div className='box'onClick={()=>{play(6)}}>{board[6]}</div>

        </div>


        <div className='row'>
          <div className='box'onClick={()=>{play(7)}}>{board[7]}</div>
          <div className='box'onClick={()=>{play(8)}}>{board[8]}</div>
          <div className='box'onClick={()=>{play(9)}}>{board[9]}</div>

        </div>


      </div>

      <button className='btn-new-game'>Reset</button>

    </div>
  )
}

export default App
