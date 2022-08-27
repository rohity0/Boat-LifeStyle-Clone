import { Box, Text,Image, Heading, Grid } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { array1, bestSeller, dailyDeals, watches } from './data';
import Slider from "react-slick";
import { BoxData } from "./Box";


export function Home(){
    const [count, setCount] = useState(0)
    const [over, setOver] = useState(true)
    const ref = useRef(null)
    let data = array1;
    
    const startSlide = ()=>{
       if(ref.current !==null) return

       ref.current = setInterval(()=>{
                setCount((prev)=> prev+1)
       },5000)
    }
    
    if(count ===5){
      setCount(0)
      ref.current= null
    }

    useEffect(()=>{
              startSlide()
          
              return ()=>{
                clearInterval(ref.current)
              }
    },[])

    const settings = {
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplaySpeed: 2000,
    };
 
   
  
    return(
        <>
          <Box color="white" h={'auto'}  bg="#212529">

          <Box >
            <Image w="100%" src={data[count]} />
            </Box> 
          
              <Box>
                      <Text p="3rem" fontSize="2rem" textAlign={"center"} > Best Seller</Text>
                
                <Box>
                  <Slider style={{width:"87%", marginLeft:"20px", height:"400px", margin:"auto"}} {...settings}>
                  {bestSeller.map((item)=>{
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

                  </Slider>
                 
            
         

                </Box>

             </Box>

             <Box>
                      <Text p="3rem" fontSize="2rem" textAlign={"center"} > Daily Deals</Text>
                
                <Box>
                  <Slider style={{width:"87%", marginLeft:"20px", height:"400px", margin:"auto"}} {...settings}>
                  {dailyDeals.map((item)=>{
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

                  </Slider>
                 
            
         

                </Box>

             </Box>

             <Box>
                      <Text p="3rem" fontSize="2rem" textAlign={"center"} > Smart Watches</Text>
                
                <Box>
                  <Slider style={{width:"87%", marginLeft:"20px", height:"400px", margin:"auto"}} {...settings}>
                  {watches.map((item)=>{
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

                  </Slider>
                 
            
         

                </Box>

             </Box>
             
          </Box>
            
            <Box h="200px" bg="#212529">

            </Box>
           
                
           
        
     

        </>
    )
}