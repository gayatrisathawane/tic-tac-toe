import React, { useState, useEffect } from 'react'
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
  const [winner, setWinner] = useState(null)

  const checkWinner = (player) => {

    const symbol = (player === 1 ? '❤️' : '⭕')

    if (board[1] === symbol && board[2] === symbol && board[3] === symbol) {

      setWinner(player)
    }
    else if (board[4] === symbol && board[5] === symbol && board[6] === symbol) {

      setWinner(player)
    }
    else if (board[7] === symbol && board[8] === symbol && board[9] === symbol) {

      setWinner(player)
    }
    else if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {

      setWinner(player)

    }
    else if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {

      setWinner(player)
    }
    else if (board[3] === symbol && board[6] === symbol && board[9] === symbol) {

      setWinner(player)
    }
    else if (board[1] === symbol && board[5] === symbol && board[9] === symbol) {

      setWinner(player)
    }
    else if (board[3] === symbol && board[5] === symbol && board[7] === symbol) {

      setWinner(player)

    }

    else {
      return;
    }
  }


  const play = (boxNo) => {
    if (board[boxNo] !== "" || winner !== null) {
     return;
    }
    if (player === 1) {
      setBoard({ ...board, [boxNo]: '❤️' })
    }
    else {
      setBoard({ ...board, [boxNo]: '⭕' })

    }
  }


  useEffect(() => {
    checkWinner(player)
    setPlayer(player === 1 ? 2 : 1)
  }, [board])

  const reset = ()=>{
    setPlayer(1);
    setBoard({

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
    setWinner(null)


  }
  return (
    <div>

      <img src={logo} alt="logo" className='logo' />
      <h1 className='text-center text'>Let's Play The Tic-Tac-Toe Game ! </h1>

      {/* <button className='btn-new-game'>Start a new game</button> */}

      <div className='player-container'>
        <div className='player-text player1'>
          Player 1
          <p className='text-center'>❤️</p>
          </div>
        <div className='player-text'>Current Player :{player === 1 ? '❤️' : '⭕'}</div>
        <div className='player-text player2'>
          Player 2
          <p className='text-center'>⭕</p>
          </div>
      </div>

      <div>
        <p className='winner-div'>
          {winner? 
          (
            <h2 className='text-center winner-text'>🎉🎊 congratulation you are winner  🥳🎊 {winner===1? 'player 1 ❤️':'player 2 ⭕'}
            
            </h2>):null}
        </p>
      </div>


      <div className='container'>

        <div className='row'>
          <div className='box' onClick={() => { play(1) }}>{board[1]}</div>
          <div className='box' onClick={() => { play(2) }}>{board[2]}</div>
          <div className='box' onClick={() => { play(3) }}>{board[3]}</div>

        </div>

        <div className='row'>
          <div className='box' onClick={() => { play(4) }}>{board[4]}</div>
          <div className='box' onClick={() => { play(5) }}>{board[5]}</div>
          <div className='box' onClick={() => { play(6) }}>{board[6]}</div>

        </div>


        <div className='row'>
          <div className='box' onClick={() => { play(7) }}>{board[7]}</div>
          <div className='box' onClick={() => { play(8) }}>{board[8]}</div>
          <div className='box' onClick={() => { play(9) }}>{board[9]}</div>

        </div>


      </div>

      <button className='btn-new-game' type='button' onClick={reset}>Reset</button>

    </div>
  )
}

export default App
