import confetti from 'canvas-confetti'
import { useState } from 'react'
import Square from './componentes/Square.jsx'
 import {TURNS,winer_combos} from './componentes/constantes.js'
 import Modal from './componentes/winnermodar.jsx'
 import { check_winner ,check_endgame} from './logica_del_programa/chec_winner.js'
 import { resetstorage,Savestorage } from './storage/storage.js'

function App() {
    const [board, setboard ]=useState(()=>{ 
      const boardfromlocalstorage = window.localStorage.getItem('board')
      if(boardfromlocalstorage) return JSON.parse(boardfromlocalstorage)
      return Array(9).fill(null)})
    const [turn, setTurn ]=useState( ()=>{
      const turnfromlocalstorage = window.localStorage.getItem('turn')
      return turnfromlocalstorage ?? TURNS.x
    })
    const [winer, setWiner]= useState(null)
 
  const resetgame =()=>{
    setboard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWiner(null)

   resetstorage('board','turn')
  }

 
 const updateboard = (index)=>{
  if(board[index] || winer)return;  //no actualizar esta posicion si ya tiene algo
    // actualizar el tabrelo
  const nweboard = [...board]
    nweboard[index] = turn
    setboard(nweboard)
    //cambiar el turno de jugadas entre x y o
  const nweturn = turn == TURNS.x ? TURNS.o : TURNS.x
  setTurn(nweturn) 
  //guardar partida en el local storage
  Savestorage({
    turn : nweturn,
    board : nweboard
  })

  // checkear si es que hay un ganador o empate
  const nwewiner = check_winner(nweboard)
  if(nwewiner){
    confetti()
    setWiner(nwewiner) // las actualizaciones del estados son asyncrono
  }
  else if (check_endgame(nweboard)){
    setWiner(false)

  }
}    

  return (
    <>
    <main className='board'>
      <h1>tic tac toe</h1>
      <button onClick={resetgame}>Resetear juego</button>
      <section className='game'>
        { 
          board.map((_,index)=>{
            return(   
              <Square
              key={index}
              index={index}
              updateboard={updateboard}
              >
               {board[index]}
              </Square>   
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isselected={turn == TURNS.x} >{TURNS.x}  </Square>
        <Square isselected ={turn == TURNS.o}>  {TURNS.o}</Square>

      </section>
      <Modal winer={winer}
        resetgame={resetgame}
      />
    </main>
    </>
  )
}

export default App;