
import {Link, NavLink, Outlet} from "react-router-dom"
import "./Header.scss"
import { useTranslation } from 'react-i18next';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import boy from "../../assets/imgs/boy.png"
import { ThemeContext } from "../../context/ThemeContext";
export const Header = () =>{
    const {t}=useTranslation()
    const [me, setMe] = useState({})
    const [btn, setBtn]=useState(false)
    const {theme}=useContext(ThemeContext)
    const {token} =useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/user/me',{
          headers:{
              Authorization:token.token,
          },
      })
        .then(function (response) {
              setMe(response.data)
          
        })
        .catch(function (error) {
          console.log(error);
        });
      },[token])
   
      
    return(<div className={theme}>
        <header className="Header">
        <div className="container">
         <div className="inner">
        <Link className="logo" to="/home"  >
        Badiiyat
        </Link>

        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink className={({isActive})=>isActive ? "active-link":"headerLink"} to="/home" > {t('Header.After')}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive})=>isActive ? "active-link":"headerLink"} to="/books" >{t('Header.books')}</NavLink>
                </li>
            </ul>
        </nav>
        <button onClick={()=>{
                setBtn(!btn);
                }} className="header-btn">
            {me.image !==null ?  <img className="me-image" alt=""  width={50} height={50} src={`https://book-service-layer.herokuapp.com/${me.image}`} /> : <img alt="" className="me-image" width={50} height={50} src={boy} />}
        </button>
        <dialog open={btn} className="header-Navigate">
        <NavLink className={({isActive})=>isActive ? "navSet ":"set"} to="AddBooks">{t('AddBook.heading')}</NavLink>    
        <NavLink className={({isActive})=>isActive ? "navSet":"set"} to="AddAfter">{t('AddAuthor.heading')}</NavLink>    
        <NavLink className={({isActive})=>isActive ? "navSet":"set"} to="settings">{t('Settings.MyAccount')}</NavLink>    
        </dialog>
                
        </div>
        </div> 
            
       </header>
       
       <Outlet/>
       
        
     
    </div>
    )
}