import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

 export const  Privateroute =({children})=>{
      const {login} = useContext(AppContext)   
     
      if(login){
        console.log("login");
          return  <Navigate to="/" />
          
      }
  

    return  children

 }