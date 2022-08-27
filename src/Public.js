import { useContext } from "react"
import {Route,Routes} from "react-router-dom"
import { RegHeader } from "./components"
import { ThemeContext } from "./context/ThemeContext"
import { SignUp } from "./pages/SiginUp/SignUp"
import { SignIn } from "./pages/SignIn.js/SignIn"
import "./Provite.scss"
export const Public = () =>{
    const {theme}=useContext(ThemeContext)
    return(
        <div >
        <RegHeader/>
            <Routes>
            <Route index element={<SignUp/>} />
            <Route path='/SignIn' element={<SignIn/>} />
        </Routes>
        </div>
    )
}