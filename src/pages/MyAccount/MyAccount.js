import axios from "axios"
import { useContext, useEffect, useState } from "react"
import user from "../../assets/imgs/boy.png"
import { AuthContext } from "../../context/AuthContext"
import "./MyAccount.scss"
import { useTranslation } from 'react-i18next';
import {ThemeContext} from "../../context/ThemeContext"
export const MyAccount = () =>{
    const {token} =useContext(AuthContext)
   const {theme}=useContext(ThemeContext)
    const {t}=useTranslation()
    const [me, setMe] = useState({})
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
        const [
            author_image,
            author_first_name,
            author_last_name,
            author_phone, 
        ]=evt.target.elements;
        formData.append('image', author_image.files[0]);
        formData.append('last_name',author_first_name.value);
        formData.append('first_name',author_last_name.value);
        formData.append('phone',author_phone.value);
        axios.put('https://book-service-layer.herokuapp.com/user/account', formData, {
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
    }
  
  
    return(<div className={theme}>
<div className="MyAccount-box">
  <img className="MyAccount-img" src={user} alt="user" />
  <div className="btn-box">
    <form className="MyAccount-form"  onSubmit={FormSubmit}>
        <h2 className="MyAccount-title">
        {t("MyProfile.MyProfile")}
        </h2>
        <input name="image" className="signInput" type="file"  />
       <div className="input-div">
       <p className="MyAccount-text">{t("MyProfile.Last")}</p>
       <input name="first_name"   className="signInput" type='text' placeholder={me.first_name}/>
        <span className="MyAccount-span">{t("MyProfile.name")}</span>
       </div>
       <div className="input-div">
       <p className="MyAccount-text">{t("MyProfile.Firs")}</p>
       <input name="last_name"  className="signInput" type='text' placeholder={me.last_name} />
        <span className="MyAccount-span">{t("MyProfile.first")}</span>
       </div>
       <div className="input-div">
       <p className="MyAccount-text">{t("MyProfile.Phone")}</p>
       <input  name="phone" className="signInput" type='text' placeholder={me.phone} />
        <span className="MyAccount-span">{t("MyProfile.PhoneText")}</span>
       </div>
       <div className="my-box">
       <button className="MyAccount-btn">
       {t("MyProfile.btn")}
       </button> 
        </div>     
    </form>
  </div>
</div>
</div>
    )
}