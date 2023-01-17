import { Box, Button, Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react"
import { m } from "framer-motion"
import { useContext } from "react"
import { useState } from "react"
import { FaLeaf } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"


  
  export const SignUp =()=>{
    const {Users} = useContext(AppContext);
    const [user,setUser] = useState({
      name: "",
      lastName: "",
      email : "",
      password: "",

    })
    const [isLoading , setIsloading] = useState(false)
    const navgiate =  useNavigate();


    const handleInput=  (e)=>{
       
    const {name, value} = e.target;
        setUser({
          ...user,
          [name] : value
        })
     }
     
     const handleSubmitUser = ()=>{
        setIsloading(true)
            for( let k in user){
              if(user[k]===""){
                alert("Kindly Put  Valid Input in "+ k);
                setIsloading(false);
                return
              }
            }
               Users.push(user);
              //  console.log("skjfwjsvf")
             localStorage.setItem("Users", JSON.stringify(Users))  
          
             setTimeout(()=>{
              setIsloading(false);
               navgiate("/login")
             }, 1000)
        
     }


    return (
        <>
             <Box h="70vh" bg="#272829" >
                  <Box m="auto" p="10px"  color={"white"}>
                      <Box pt={"10px"} textAlign={"center"}>
                        <Text  pb="15px" fontWeight={"bold"} fontSize={"30px"} as="h1"> Register</Text>
                         <Text as="p"> Please fill in the fields below:</Text>
                      </Box>

                    <Flex p="25px" m="auto"  flexDirection={"column"} gap={"0.5rem"} w={"30%"}>
                     
                            
                          <Input  required onChange={handleInput} value={user.name} name="name" color={"black"} bg="white" placeholder="First Name" type={"text"} /> 
                          <Input  required onChange={handleInput} value={user.lastName} name="lastName"color={"black"} bg="white" placeholder="Last Name" type={"text"} />    
                          <Input  required onChange={handleInput} value={user.email} name="email" color={"black"} bg="white" placeholder="Email" type={"text"} />    
                          <Input  required onChange={handleInput} value={user.password} name="password" password="password" color={"black"} bg="white" placeholder="Password" type={"text"} />
                          <Button isLoading={isLoading} onClick={handleSubmitUser}  _hover={{bg:"darkred"}} bg="red" color="white" type="submit">Create Account</Button>
                        
                          
                    </Flex>  
                    

                    </Box>      
                
         
             </Box> 
        </>
    )
  }