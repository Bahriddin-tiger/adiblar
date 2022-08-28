
import { useContext } from "react"
import { NavLink, Outlet} from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"
import "./RegHeader.scss"
export const RegHeader = () =>{
const {theme}=useContext(ThemeContext)
return(
<div className={theme} >
<header className="reg-header">
  <NavLink className={({isActive})=>isActive ? "reg-btn" : "reg-btn"} to="" >SignUp</NavLink>
  <NavLink className={({isActive})=>isActive ? "reg-btn" : "reg-btn"} to="/SignIn">SignIn</NavLink>
</header>
  <Outlet/>
</div>
)
}

 
