
import {Link} from "react-router-dom"
import "./RegHeader.scss"
export const RegHeader = () =>{

return(
<div >
<header className="reg-header">
  <Link className="reg-btn " to='' >SignUp</Link>
  <Link className="reg-btn " to='/SignIn' >SignIn</Link>

</header>

</div>
)
}

 
