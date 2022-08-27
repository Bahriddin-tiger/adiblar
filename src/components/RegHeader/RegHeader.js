
import { useContext } from "react"
import {Link} from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import "./RegHeader.scss"
export const RegHeader = () =>{
  const {theme}=useContext(ThemeContext)
return(
<div >
<header className="reg-header">
  <Link className="reg-btn " to='' >SignUp</Link>
  <Link className="reg-btn " to='/SignIn' >SignIn</Link>

</header>

</div>
)
}

 
