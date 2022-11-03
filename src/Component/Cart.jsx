import { Box, Button, CloseButton, Divider, Flex,  Spacer,  Text,  } from '@chakra-ui/react';
import { Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useContext } from 'react';
import { AppContext } from './../Context/AppContext';
import { Image } from '@chakra-ui/react';
import { FaTrashAlt } from "react-icons/fa";




export function DrawerExample({show, setCartShow, }) {
 
    const {total,cartData , handleDelete, handleQunatity} = useContext(AppContext)
    console.log(cartData)
  
  const handleClose = ()=>{
      setCartShow(!show)
  }
   
    return (
      <>
      <Drawer
          size={"sm"}
          width="1000px"
          isOpen={show}
          placement='right'
          onClose={handleClose}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay  />
          <DrawerContent >
           <Box  bg="red">
           
              <Flex color={"white"} p="7px"> 
                <Text fontSize={"lg"} fontWeight={"700"} ml="20px">Your Cart</Text> 
                <Spacer />
                   <Box> <CloseButton onClick={handleClose} /></Box> 
              </Flex>
           </Box>
            
          <Box bg="black"> 
           <Text ml="10px" p="7px" fontSize={"sm"} color={"white"}> 
           Free Shipping sitewide | Cash On Delivery available for order value upto ₹3000
           </Text>
           </Box>
  
            <DrawerBody >
              {cartData.length===0 &&
               <Flex gap="1rem" mt="300px" alignItems="center" flexDirection={"column"} >
                     <Text>  Your Cart is Empty </Text>
                     <Button _hover={"none"} color={"white"} bg="red" onClick={handleClose} >Start Shopping</Button>
                   </Flex> }

             <Box border={""} >
             {
              cartData.map((item)=>(
                <>
                
                <Flex alignItems={"center"}>
                <Image w="130px"  src={item.image} alt={item.name} />
                       <Box w="100%" ml="10px" >
                          <Text fontWeight={"bold"} fontSize={"14px"} noOfLines={"1"}>{item.pname}</Text>
                          <Flex gap="2rem">
                            <Text ml="5px" fontWeight={"bold"} color={"red"} >RS. {item.price}</Text>
                            <Text textDecoration={"line-through"} >RS. {item.strprice}</Text>
                           </Flex>
                          <Flex ml="5px" mt="10px">
                          <Button disabled={item.quantity===1}
                          onClick={()=> handleQunatity(item.id , -1) }
                           justifyItems={"center"}  p="0" alignItems="center" fontSize={"16px"}  justifyContent={"center"} textAlign={"center"}  fontWeight={"1000"} color="red" size="xs" borderRadius={"50%"} border={"1px solid black"} bg="white">
                            -
                          </Button>
                          <Text p="0px 15px">{item.quantity}</Text>
                          <Button  disabled={item.quantity===10}
                            onClick={()=> handleQunatity(item.id , 1) }
                          fontSize={"16px"} p="0" justifyContent={"center"} textAlign={"center"}  fontWeight={"1000"} color="red" size="xs" borderRadius={"50%"} border={"1px solid black"} bg="white">
                            +</Button>
                            <Spacer />
                          <FaTrashAlt onClick={()=> handleDelete(item.id)}  color='grey' cursor={"pointer"} />  
                          </Flex>
                    
                       </Box>
                </Flex > 
                 <Divider borderColor="black" />
                </>
                ))
             }
             
             </Box>
                
            
            </DrawerBody>
                     
            {
              cartData.length!==0 &&
              <DrawerFooter   h="270px" >
            <Box w="100%">
               <Divider borderColor="grey" border={"1px solid black"} />
               <Flex fontWeight={"bold"} color="black" p="0 10px"> 
                <Text> Shipping :</Text>
                <Spacer />
                <Text> Free</Text>
               </Flex>
               <Flex fontWeight={"bold"} color="white" p="0 10px"> 
                <Text>Total</Text>
                <Spacer />
                <Text> RS. {total}</Text>
               </Flex>
               <Text mt="20px" mb="10px" fontWeight={"bold"} color="red" p="5px" textAlign={"center"}>Continue Shopping</Text>
               
               <Button _hover={{bg: "rgb(199, 118, 118);"}} p="5px" w="100%" m="auto" display={"block"} bg="red" color="white"b="20px" >
                CASH ON DELIVERY/UPI</Button>
               <Button border={"2px solid red"} _hover={{bg: "rgb(199, 118, 118);"}} w="100%" m="auto" mt="15px" bg="white" color="red" p="5px" >
                PAY VIA CARD/OTHERS</Button>
              
               </Box>
            </DrawerFooter>
            }
          </DrawerContent>
        </Drawer>
      </>
    )
  }