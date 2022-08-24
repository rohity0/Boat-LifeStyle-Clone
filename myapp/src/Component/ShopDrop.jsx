import { Grid, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ShopDrop(){

    return(
        <>
    <UnorderedList 
         borderBottomRadius={"1rem"}
          zIndex={"10"}
          marginLeft= "-475px"
          left={"0"}
          border ="1px solid black"
          w="auto"
          h={"100%"} m={"auto"} 
          boxSize="border-box"
          position="absolute" 
          top="97px"
          p="10px" 
        alignItems={"start"}
         listStyleType={"none"} bg="black"  >
        <Grid alignItems={"center"}  templateColumns='repeat(4, 1fr)'>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251"
             alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387" alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_1196x.jpg?v=1648546494" 
            alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356" 
            alt="hello" /> 
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436"
             alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897" alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_1196x.jpg?v=1648545875" 
            alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_1242x.png?v=1615033153" 
            alt="hello" /> 
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560"
             alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_1242x.png?v=1624859990" alt="hello" />
            </Link>
        </ListItem>
        <ListItem>
            <Link to={"#"}>
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_1242x.png?v=1626094103"
            alt="hello" />
            </Link>
        </ListItem>
      
        </Grid>
        </UnorderedList>
       
        </>
    )
}