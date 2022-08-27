import { NavLink, Outlet } from "react-router-dom"
import Navoiy from "../../assets/imgs/header.png"
import "./Home.scss"
import { useTranslation } from 'react-i18next';
import { useContext,  useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {ThemeContext} from "../../context/ThemeContext"

export const Home =() =>{
    const {theme}=useContext(ThemeContext)
    const {t} = useTranslation()
    const {token} =useContext(AuthContext)
    const [searchAfter, setSearchAfter]=useState("")
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        const [author_last_name]=evt.target.elements;
        formData.append('author',author_last_name.value.toLowerCase());
        axios.get('https://book-service-layer.herokuapp.com/author/search', formData)
          .then(function (response) {
            setSearchAfter(response.data)
            
          })
          .catch(function (error) {
            console.log(error);
          },[token]);
    }
      console.log(searchAfter);
    return(<div className={theme}>
    <div className="home-container">
     
        <div className="div">
            <div className="home-img-wrapper">
            <img className="home-img" src={Navoiy} alt="home-img" width={1261} height={347} />
            </div>
            <div className="search-wrapper">
                <h3 className="home-heading">
                {t("form.search")}
                </h3>
                <form onSubmit={FormSubmit} className="home-form">
                    <input name="author_last_name" type="text" className="home-input" placeholder= {t("form.inputVal")} />
                    <button type="submit" className="home-btn">
                    {t("form.search")}
                    </button>
                </form>
            </div>
        </div>
        <div className="adiblar-wrapper">
        <h2 className="home-title">
        {t("Hero.main")}
        </h2>
        <div className="home-div">
        <NavLink className={({isActive})=>isActive ? "home-active-link ":"homeLink"} to="Temuriy">Temuriylar  {t("Hero.period")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Jadid">Jadid  {t("Hero.literature")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Sovet">Sovet  {t("Hero.period")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Mustaqillik">Mustaqillik  {t("Hero.period")}</NavLink>    
        <Outlet/>
        </div>
        </div>
       
    </div>
    </div>
    )
}