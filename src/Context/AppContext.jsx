import { createContext, useState } from "react";
import { useToast } from '@chakra-ui/react'
export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
   const  [cartData, setCartData] = useState([])
   
   const Users = JSON.parse(localStorage.getItem("Users")) || [];


   const [login, setLogin] = useState(false)

   const handleCartData = (data)=>{
     if(!login){
        alert("Kindly Login Before adding Item In Cart") 
        return;
     }

          setCartData([
            ...cartData,
            {
                ...data,
                quantity: 1,
            }
          ])
         alert("Item added to Cart")
        }  


   const handleDelete  = (id)=>{
      let updateData = cartData.filter((item)=> item.id !==id)
      setCartData(updateData)
   }

   const handleQunatity = (id, no)=>{
      let upDatedData = cartData.map((item)=>{
        
             if(item.id===id){
                return {
                    ...item,
                    quantity: item.quantity+ no
                }
             } else{
                return item
             }

      })
//   console.log(id, no)
      setCartData(upDatedData)
       
   }
  
   const handleTotal = ()=>{
         return cartData.reduce ((acu,  c)=>{
            return acu + (c.price * c.quantity)
         },0)
   }
 let total = handleTotal()
// console.log(total)
 

    return (
        <AppContext.Provider value={{cartData,setCartData, handleCartData, handleQunatity, handleDelete,Users, total ,login, setLogin }}> {children}</AppContext.Provider>
    )
}