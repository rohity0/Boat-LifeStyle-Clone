import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
export function BoxData({name, price, dec, strp, image, id , rating}){
    console.log(image)
    return(
        <>
           <Box borderRadius={"10px"} color={"black"} h="380px" bgColor="rgb(205, 205, 205);"  w={"250px"} p={"5px"} mb="100px"  >
                 
              <Box w="200px" h="30%" boxSize={"-webkit-fit-content"} alignItems={"center"} p="0" > 
         <Image m="auto" ml="10px" w="200px" h="50%"  p="10px"
         src={image} />
         </Box>   
              
              <Box borderRadius={"20px"} bgColor={"white"} p="10px" mt="0px" border={"1px solid white"}>
                 <Box  textOverflow={'ellipsis'} ><Text  noOfLines={1} >{name}</Text></Box>
                <Flex  gap={"0.5rem"} alignItems={"center"}>  <FaStar color="red" /> <Text> {rating}</Text></Flex>
                <Flex gap={"2rem"}> 
                    <Text>₹ {price}</Text>
                    <Text textDecoration={"line-through"}>₹ {strp}</Text>
                </Flex>
                <Text>{dec}</Text>

                <Box mt={"5px"} textAlign={"center"}>
                   <Button _hover={"none"}  p="0px 45px"  color={"white"} bg="red">ADD TO CART</Button>
                 </Box>
              </Box>
           
                
           </Box>
           
           
        </>
    )
}