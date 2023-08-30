import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./LoginUser";
import Register from "./Register";
import Timer from "./Timer";



export default  function AppRouter(){
    return<>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/timer" element={<Timer/>} />
        </Routes>    
    </BrowserRouter>
    </>
}