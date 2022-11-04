import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { DrawerExample } from './Cart';
import { Gifting } from "./Gifting";
import { NavBar } from "./Navbar";
import { Footer } from "./Footer";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Privateroute } from "./PrivateRoutes";

export function AllRoutes (){

    return(
        <>
            <Routes>
                <Route  path="/" element={ 
                    <>
                       <NavBar />
                       <Home />
                       <Footer /> 
                    </>
              }  />
                 <Route path="/gifting" element={
                    <>
                    <NavBar />
                     <Gifting />
                    </>
                 } />
                 <Route path="/login" element={ 
                    <>
                   <Privateroute>
                     <NavBar />
                     <Login />
                     <Footer />
                   </Privateroute>
                    </>
                 } />
                 <Route path="/signup" element={ 
                  <>
                  <NavBar />
                  <SignUp />
                  <Footer />
                  </>
                } />
             </Routes>
        </>

    )
}