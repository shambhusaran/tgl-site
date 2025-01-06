import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../components/HomePage"
import Login from "../pages/Login"


export const UIRoutes=()=>{

    return(
        <BrowserRouter>

        <Routes>
        <Route exact path="/login" element={<Login/>}/>
            <Route path="/" element={<HomePage/>}/>
            
            
        
    
        </Routes>


 
         </BrowserRouter> 
    )
}
