import axios from "axios";
import {  useRef } from "react";
import SignInImg from "../../assets/imgs/siginIn.png"
// import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../Hooks/useAuth";
import "./SignIn.scss"
import { useTranslation } from 'react-i18next';

export const SignIn = () =>{
    const {t}=useTranslation()
    // const {theme}=useContext(ThemeContext)
    const InputEmail= useRef()
    const InputPassword= useRef()
    const {setToken}=useAuth()
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        axios.post('https://book-service-layer.herokuapp.com/user/login',{
            email:InputEmail.current.value,
            password:InputPassword.current.value
        })
          .then(function (response) {
            if(response.data)(
                setToken(response.data)
            )
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return(
       <div className="signUp-box">
        <img className="signUp-img" src={SignInImg } alt="sign up bg img" />
        <div className="signIn-form-box">
            <h2 className="signUp-title">
            {t("SignIn.title")}
            </h2>
            <p className="signUp-text">{t("SignIn.text")} <a className="signUp-link" href="/" >{t("SignUp.title")}</a> </p>
            <form className="signUp-form" onSubmit={FormSubmit}>

            <input ref={InputEmail} className="signInput" type='email' placeholder={t("SignIn.Email")} />
            <input ref={InputPassword} className="signInput" type='password' placeholder={t("SignIn.Password")} />
            <button className="signUp-btn" type="submit">
            {t("SignUp.button")}
            </button>
        </form>
        </div>
       </div>
    )
}

