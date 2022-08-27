import { NavLink, Outlet } from "react-router-dom"
import "./Settings.scss"
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
export const Settings = () =>{
    const {t}=useTranslation()
    const {theme}=useContext(ThemeContext)
    return(
        <div className={theme}>
             <div className="settings-box">
            <header className="settings-header">
                <NavLink className={({isActive})=>isActive ? "settings-active" : "settings-link"}  to="">
                    <span  className="settings-number" >1</span>
                    <p className="settings-text" >{t("Settings.MyAccount")}</p>
                </NavLink>
                <NavLink className={({isActive})=>isActive ? "settings-active" : "settings-link"}  to="Security">
                    <span  className="settings-number" >2</span>
                    <p  className="settings-text" >{t("Settings.Security")}</p>
                </NavLink>
                <NavLink className={({isActive})=>isActive ? "settings-active" : "settings-link"}  to="MakePayment">
                    <span  className="settings-number" >3</span>
                    <p  className="settings-text">{t("Settings.settings")}</p>
                </NavLink>
            </header>
            <Outlet/>
           
        </div>
        </div>
    )
}