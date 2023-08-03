import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./pages/Home";
import ProtectedRoute from "./services/ProtectedRoute";


export default function App() {

 return(
  <>
   <BrowserRouter>
      <Routes>

         <Route path="/" element={<Login/>}/>
         <Route path="/Registration" element={<Registration/>}/>
         {/* protected Routes */}
         <Route path="/Home" element={<ProtectedRoute/>}>
         <Route path="/Home" element={<Home/>}/>
         </Route>
        
      </Routes>
   </BrowserRouter>
   
  </>
 )
}
