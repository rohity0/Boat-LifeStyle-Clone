import { Box, Button, CloseButton, Flex,  Spacer,  Text,  } from '@chakra-ui/react';
import { Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'



export function DrawerExample({show, setCartShow}) {
 
  
  
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
            <Flex gap="1rem" mt="300px" alignItems="center" flexDirection={"column"} >
                     <Text>  Your Cart is Empty </Text>
                     <Button _hover={"none"} color={"white"} bg="red" onClick={handleClose} >Start Shopping</Button>
                   </Flex>
            </DrawerBody>
                     
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }