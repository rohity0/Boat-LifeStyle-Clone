import { Box, Grid, Text } from "@chakra-ui/react";
import { BoxData } from "./Box";
import { arr } from "./data";

export function  Gifting (){

    return(
        <>
        <Box mb="25px" bg="#212529" color={"white"}>
          <Box p="25px 0px 25px 25px " fontWeight={"700"} fontSize="25px">
              <Text fontWeight={"700"} p="20px 25px" as="h1">Gifting..</Text>
          </Box>

         <Box>
            <Grid ml="20px" p="20px" templateColumns={'repeat(4, 1fr)'}>
             
                {arr.map((item)=>{
                    return   <BoxData key={item.id}
                      name={item.pname}
                      price={item.price}
                      rating= {item.rating}
                      image = {item.image}
                      id= {item.id}
                      strp = {item.strprice}
                      dec = {item.dec}
                      item={item}
                     />
                 
               })}
             
            </Grid>
         </Box>
         <Box  h="100px" bg="#212529">

         </Box>
          
        </Box>
       
        
        </>
    )
}