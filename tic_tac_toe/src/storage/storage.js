
export const Savestorage= ({board,turn})=>{
    window.localStorage.setItem('board',JSON.stringify(board))
    window.localStorage.setItem('turn',turn)


}

export const resetstorage =(board,turn)=>{
    window.localStorage.removeItem(board);
    window.localStorage.removeItem(turn);
    
}