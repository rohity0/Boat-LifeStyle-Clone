import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Footer } from "./Footer"

export const Login  = ()=>{
  
    const  [from, setFrom] = useState({
        email : "",
        password : ""
     })
  
     const handleChange = (e)=>{
        const  {name, value} = e.target
          setFrom({
            ...from,
            [name] : value
          })
     }
 
     


    return(
        <>
          <Box h="70vh" bg="#272829" >
             <Box h="auto" m="auto" p="10px"  color={"white"}>
                 <Box mt="25px" mb="20px" pt={"10px"} textAlign={"center"}>
                        <Text  pb="15px" fontWeight={"bold"} fontSize={"30px"} as="h1"> Login</Text>
                        <Text as="p">Please enter your e-mail and password:</Text>
                  </Box>
                 <Flex mt="20px" p="25px" m="auto"  flexDirection={"column"} gap={"0.5rem"} w={"30%"}>
                          <Input onChange={handleChange} value ={from.email} name = "email" color={"black"} bg="white" placeholder="Email" type={"text"} />    
                          <Input onChange={handleChange} value={from.password} name="password" mb="20px" color={"black"} bg="white" placeholder="Password" type={"text"} />
                          <Button _hover={{bg:"darkred"}} bg="red" color="white" type="submit">Login
                          </Button>
                          <Text mt={"20px"} textAlign={"center"}>New customer?
                           <Link to="/signup" > <u>Create an account</u></Link>
                           </Text>
                    </Flex>  
                  
                  </Box>
                 
          </Box>
         
        </>
    )
}