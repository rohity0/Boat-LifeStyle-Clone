import { Box, Button, Flex, FormControl, Form, Grid, Input, Text } from "@chakra-ui/react"


  
  export const SignUp =()=>{
     
    return (
        <>
             <Box h="70vh" bg="#272829" >
                  <Box m="auto" p="10px"  color={"white"}>
                      <Box pt={"10px"} textAlign={"center"}>
                        <Text  pb="15px" fontWeight={"bold"} fontSize={"30px"} as="h1"> Register</Text>
                         <Text as="p"> Please fill in the fields below:</Text>
                      </Box>

                    <Flex p="25px" m="auto"  flexDirection={"column"} gap={"0.5rem"} w={"30%"}>
                          
                          <Input color={"black"} bg="white" placeholder="First Name" type={"text"} /> 
                          <Input color={"black"} bg="white" placeholder="Last Name" type={"text"} />    
                          <Input color={"black"} bg="white" placeholder="Email" type={"text"} />    
                          <Input color={"black"} bg="white" placeholder="Password" type={"text"} />
                          <Button _hover={{bg:"darkred"}} bg="red" color="white" type="submit">Create Account</Button>
                         
                    </Flex>  
                    

                    </Box>      
                
         
             </Box> 
        </>
    )
  }