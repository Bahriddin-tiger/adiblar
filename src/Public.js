import {Outlet, Route,Routes} from "react-router-dom"
import { RegHeader } from "./components"
import { SignUp } from "./pages/SiginUp/SignUp"
import { SignIn } from "./pages/SignIn.js/SignIn"
import "./Provite.scss"
export const Public = () =>{

    return(
        <div >
        <RegHeader/>
            <Routes>
            <Route index element={<SignUp/>} />
            <Route path='/SignIn' element={<SignIn/>} />
        </Routes>
        <Outlet/>
        </div>
    )
}