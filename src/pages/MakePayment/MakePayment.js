import "./MakePayment.scss"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext, useState } from "react"
import i18next from "i18next"
import { useTranslation } from 'react-i18next';
// import { LangContext } from "../../context/LangContext";

export const MakePayment = () =>{
    const [state, setState] =useState(false)
    // const {setLang}=useContext(LangContext)
    const {theme,setTheme}=useContext(ThemeContext)
    
    const {t}=useTranslation()
    return(
        <div className={theme}>
        <div className="MakePayment-box">
        <div className="MakePayment">
            <h2 className="MakePayment-title">
            {t("Settings.settings")}
            </h2>
            <p className="MakePayment-text"></p>
            <select  onChange={(evt)=>(
                i18next.changeLanguage(evt.target.value))} 
                 defaultValue={i18next.language}
                 className="MakePayment-select">
                <option value="en" className="MakePayment-option">{t("Settings.English")}</option>
                <option value="uz" className="MakePayment-option">{t("Settings.Uzbek")}</option>
                <option value="ru" className="MakePayment-option">{t("Settings.Rus")}</option>
            </select>
            <p className="MakePayment-p">{t("Settings.Please")}</p>
            <strong className="MakePayment-strong">
            {t("Settings.Theme")}
            </strong>
            
            <button onClick={()=>{
                setState(!state);
                setTheme(state ? "dark" : "light");
                }} className="MakePayment-btn">
                    <span className="btn-span"></span></button>
            <div className="security-btn-box">
                <button className="security-btn">{t("Settings.SaveChanges")}</button>
                
            </div>
        </div>
        </div>
        </div>
    )
}