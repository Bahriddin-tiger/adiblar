import "./Security.scss"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../context/ThemeContext";
export const Security = () =>{
    const {t}=useTranslation()
    const {token} =useContext(AuthContext)
    const [me, setMe] = useState({})
    const {theme}=useContext(ThemeContext)
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
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        const [author_gmail, author_currentPassword,author_newPassword,author_newPassword1,]=evt.target.elements;
        formData.append('email', author_gmail.value);
        formData.append('currentPassword',author_currentPassword.value);
        formData.append('newPassword',author_newPassword.value);
        if(author_newPassword.value===author_newPassword1.value){
            axios.put('https://book-service-layer.herokuapp.com/user/security', formData, {
            headers:{
                Authorization:token.token,
            },
        })
          .then(function (response) {
                console.log(response.data)
            
          })
          .catch(function (error) {
            console.log(error);
          },[token]);
        }else{
            console.log("newPassword error");
        }
       
    }
   
    return(
        <div className={theme}>
            <div className="security-box" >
            <form onSubmit={FormSubmit} className="security-form">
                <h2 className="security-title">
                {t("Security.title")}
                </h2>
                <div className="security-div">
                    <p className="security-text">{t("Security.email")}</p>
                    <input name="gmail"  className="security-input" type='email' placeholder={me.email} />
                    <span className="security-span">{t("Security.emailText")}</span>
                 </div>
        
                 <div className="security-div">
                    <p className="security-text">{t("Security.Password")}</p>
                    <input name="currentPassword"   className="security-input" type='password' placeholder={t("Security.Password")} />
                    <span className="security-span">{t("Security.PasswordText")}.</span>
                 </div>
                 <div className="security-password">
                    <div className="security-min">
                        <p className="security-text">{t("Security.NewPassword")}</p>
                        <input name="newPassword"  className="security-input" type='password' placeholder={t("Security.NewPassword")}/>
                        <span className="security-span">{t("Security.NewPasswordText")}</span>
                    </div>
                    <div className="security-min">
                        <p className="security-text">{t("Security.ConfirmPassword")}</p>
                        <input name="newPassword1"  className="security-input" type='password' placeholder={t("Security.ConfirmPassword")} />
                        <span className="security-span">{t("Security.ConfirmPasswordText")}</span>
                    </div>
                 </div>
                 <div className="security-btn-box">
                    <button className="security-btn">{t("Security.btn")}</button>
                 </div>
            </form>
        </div>

        </div>
    )
}