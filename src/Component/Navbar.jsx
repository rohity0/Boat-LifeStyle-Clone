import { Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex ,Image, Spacer , Grid, HStack,  ListItem, UnorderedList, 
         Input
} from "@chakra-ui/react";
import { FaLeaf, FaUser,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdGift, IoMdCart } from "react-icons/io";
import { useState } from "react";
import { ShopDrop } from "./ShopDrop";
import { MenuDrop } from "./MenuDrop";
import { DrawerExample } from "./Cart";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export function NavBar(){
  const {login , setLogin} =  useContext(AppContext)
  const[show, setShow] = useState(false)
  const [menu , setMenu] = useState(false)
  const [cartShow , setCartShow] = useState(false)
  const handleDrop =()=>{
    setShow(!show)
  }
  const removeDrop= ()=>{
    setShow(!show)
  }
  const handleMenu = ()=>{
    setMenu(!menu)
  }
  const removeMenu = ()=>{
    setMenu(!menu)
  }

  const handleCart = ()=>{
    setCartShow(!cartShow)
    console.log(cartShow)
  }
  
  const handleLogout = ()=>{
    setLogin(false)
  }

    return(
        <>
          <Box color={"white"} bg="#ff0000" textAlign={"center"} p="7px 20px"   >
                    Listen to the sound you deserve with Stone 135. Bag it at ₹799! 🤩
          </Box>
          {/* hhh */}
         <Flex  alignItems={"center"}   bg="Black" color={"white"}>
             <Box>
                <Link to="/" > 
                         <Image p="7px" ml={"20px"} w="9vw" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229" 
                         alt="boAt" />
                 </Link>
             </Box>
            <Spacer />
              <UnorderedList mr="2rem"  alignItems={"center"} listStyleType={"none"}> 
                 <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                    <ListItem onMouseEnter={handleDrop} onMouseLeave={removeDrop}  p="1rem" _hover={{bg: "rgb(31, 28, 28)"}} cursor="pointer" >
                      Shop <ChevronDownIcon />
                        {/* {show &&  <ShopDrop />} */}
                    </ListItem>
                    <ListItem p="1rem" _hover={{bg: "rgb(31, 28, 28)"}} cursor="pointer" >Daily Deals</ListItem>
                    <ListItem p="1rem" _hover={{bg: "rgb(31, 28, 28)"}} cursor="pointer" >Offer Zone</ListItem>
                    <ListItem onMouseEnter={handleMenu} onMouseLeave={removeMenu} p="1rem" _hover={{bg: "rgb(31, 28, 28)"}} cursor="pointer">
                      More <ChevronDownIcon /> 
                     {menu && <MenuDrop />}
                    </ListItem> 
                    
                 </Grid> 
               </UnorderedList>
               
                <Box >
                     <Search2Icon alignItems={"center"}  position={"absolute"} zIndex="5" color={"black"} top="60px" ml="3px" />
                    <Input w="250px" p="0px 25px" placeholder="  Search..." textColor={"black"}  borderRadius={"20px"} bg="white" 
                        />
                </Box>
                <HStack mr="1rem" fontSize={"1.5rem"} color="white" p="1rem" spacing='14px'>
                  <Box>
                  <Link to={!login? "/login" : ""}> < FaUser  onClick={ login? handleLogout : "" }  style={{color: login? "red" : "white"}} /></Link>
                </Box> 
                  <Box p="0px">
                    <IoMdGift fontSize={"1.5rem"} />
                 </Box>
                 <Box>
                 <IoMdCart onClick={handleCart} cursor={"pointer"}  />
                     <DrawerExample show={cartShow} setCartShow={setCartShow} /> 
                 </Box>
                </HStack>

               

         </Flex>
           
        </>
    )
}