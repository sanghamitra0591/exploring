import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function Allroutes(){
    return <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
}

export default Allroutes;