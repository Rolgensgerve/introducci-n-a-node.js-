import Square from "./Square";
const Modal =({resetgame,winer})=>{
    if(winer == null)return null;
   const winertext = winer === false
   ? 'Empate'
   : 'El Ganador es ' + winer

    return(
        <>
         
          
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                 winertext
                }
              </h2>
              <header className='win'>
                {winer && <Square>{winer}</Square>}
              </header>
              <footer>
                <button onClick={resetgame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
          
        

        </>
    )
}

export default Modal;