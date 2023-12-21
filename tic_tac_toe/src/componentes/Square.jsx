import { Children } from "react"
import '../App.css'

const Square = ({children,isselected ,updateboard,index}) =>{
    const className = `square ${ isselected ? 'is-selected ': ''}`
    const handleclick =()=>{
        updateboard(index)
    }
    return(
        <div className={className} onClick={handleclick}>
            {children} 
        </div>
    )
  }
  
export default Square;