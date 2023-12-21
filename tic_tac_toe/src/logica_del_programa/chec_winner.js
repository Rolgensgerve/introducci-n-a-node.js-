import { winer_combos } from "../componentes/constantes";

export const check_winner = (boardcheck)=>{
    //Revisamos todas las combinaciones ganadore
    //para poder revisar si el ganador es x , o
    for(let combo of winer_combos){
      const [a,b,c] = combo
      if(boardcheck[a] &&
         boardcheck[a] == boardcheck[b]&&
         boardcheck[a] == boardcheck[c]){
          return boardcheck[a];
         }
    }
    return null;
  }


 export const check_endgame = (nweboard)=>{
    // Revisa hay un empate
    // si no hay mas espacios vacio
    // en el tabrero
    return nweboard.every((Square)=> Square !=null )
  
   }