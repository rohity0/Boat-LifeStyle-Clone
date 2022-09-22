import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { DrawerExample } from './Cart';
import { Gifting } from "./Gifting";

export function AllRoutes (){

    return(
        <>
            <Routes>
                <Route  path="/" element={<Home />}  />
                 <Route path="/gifting" element={<Gifting />} />
             </Routes>
        </>

    )
}