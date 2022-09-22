
import { Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export function MenuDrop(){

    return(
        <>
          <UnorderedList listStyleType={"none"} 
             position="absolute"
             top={"98px"}
             ml="-25px"

          > 
              <Flex
              alignItems={"start"}
              justifyContent="center"
              borderBottomRadius={"1rem"}
              p="1rem"
               color={"white"} bg="black" width={"auto"} flexDirection={"column"}>
                  <ListItem> <Link to="/gifting" >Gifting</Link> </ListItem>
                  <ListItem>Do What Floats Your boAt</ListItem>
                  <ListItem>Blogs</ListItem>
                  <ListItem>Meet the boAtheads</ListItem>
                  <ListItem>Corporate Orders</ListItem>
                  <ListItem>Earns RS.100</ListItem>
                  <ListItem>Careers</ListItem>
                  <ListItem>Social Responsiblity</ListItem>
              </Flex>
          </UnorderedList>
        </>
    )
}