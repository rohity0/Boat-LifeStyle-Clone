import './App.css';
import { AllRoutes } from './Component/AllRoutes';
import { Footer } from './Component/Footer';
import { NavBar } from './Component/Navbar';


function App() {
  

  return (
    <div className="App">
     <NavBar />
     <AllRoutes />
     <Footer /> 
   
    </div>
  );
}

export default App;
