import axios from "axios";
import {  useContext, useRef } from "react";
import SignUpImg from "../../assets/imgs/signup.png"
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../Hooks/useAuth";
import "./SignUp.scss"
import { useTranslation } from 'react-i18next';
export const SignUp = () =>{
    const {t}=useTranslation()
    const {theme}=useContext(ThemeContext)
    const InputEmail= useRef()
    const InputPassword= useRef()
    const InputFirstName= useRef()
    const InputLastName= useRef()
    const InputPhone= useRef()
    const {setToken}=useAuth()
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        axios.post('https://book-service-layer.herokuapp.com/user/register',{
            first_name: InputFirstName.current.value,
            last_name:InputLastName.current.value ,
            phone: InputPhone.current.value,
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
       <div className={theme}>
            <div className="signUp-box">
        <img className="signUp-img" src={SignUpImg} alt="sign up bg img" />
        <div className="signUp-form-box ">
            <h2 className="signUp-title">
                {t("SignUp.title")}
            </h2>
            <p className="signUp-text"> {t("SignUp.text")} <a className="signUp-link" href="signIn" >{t("SignIn.title")}</a> </p>
        <form className="signUp-form" onSubmit={FormSubmit}>
             <input ref={InputFirstName} className="signInput" type='text' placeholder= {`${t("SignUp.Last")}`} />
            <input ref={InputLastName} className="signInput" type='text' placeholder= {t("SignUp.Firs")} />
            <input ref={InputPhone} className="signInput" type='number' placeholder= {t("SignUp.Phone")} />
            <input ref={InputEmail} className="signInput" type='email' placeholder= {t("SignUp.Email")}/>
            <input ref={InputPassword} className="signInput" type='password' placeholder= {t("SignUp.Password")} />
            <button className="signUp-btn" type="submit">
            {t("SignUp.button")}
            </button>
        </form>
        </div>
       </div>
       </div>
    )
}

