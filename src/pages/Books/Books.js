import { NavLink, Outlet } from "react-router-dom"
import Navoiy from "../../assets/imgs/header.png"
import "./Books.scss"
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { useContext } from "react";
import {ThemeContext} from "../../context/ThemeContext"
export const Books =() =>{
    const {theme}=useContext(ThemeContext)
    const {t}=useTranslation()
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        const [book_last_name]=evt.target.elements;
        formData.append('book',book_last_name.value);
        axios.get('https://book-service-layer.herokuapp.com/book/search', formData)
          .then(function (response) {
                console.log(response.data)
            
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }
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
                    <input name="book_last_name" type="text" className="home-input" placeholder={t("form.inputVal")} />
                    <button className="home-btn">
                    {t("form.search")}
                    </button>
                </form>
            </div>
        </div>
        <div className="adiblar-wrapper">
        <h2 className="home-title">
        Asosiy kategoriyalar
        </h2>
        <div className="home-div">
        <NavLink className={({isActive})=>isActive ? "home-active-link ":"homeLink"} to="">Temuriylar {t("Hero.period")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Jadid">Jadid {t("Hero.literature")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Sovet">Sovet {t("Hero.period")} </NavLink>    
        <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="Mustaqillik">Mustaqillik {t("Hero.period")}</NavLink>    
        <Outlet/>
        </div>
        </div>
       
    </div>
    </div>
    )
}