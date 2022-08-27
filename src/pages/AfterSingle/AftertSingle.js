import { useContext, useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';
import { BookItem } from '../../components';
import "./AfterSingle.scss"
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
export const AfterSingle = () =>{
    const {t}=useTranslation()
    const {id}=useParams();
    const [after, setAfter] = useState({})
    const [books,setBooks] =useState({})
    const {token} = useContext(AuthContext)
    const {theme} = useContext(ThemeContext)
    useEffect(()=>{
    axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`,{
        headers:{
            Authorization:token.token,
        }
    })
    .then(function (response) {
     setAfter(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
   },[id,token])
   useEffect(()=>{
    axios.get(`https://book-service-layer.herokuapp.com/author/books/${id}`,{
        headers:{
            Authorization:token.token,
        }
    })
    .then(function (response) {
        setBooks(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
   },[id,token])
  
    return(
        <>
        <div className={theme}>
            {
              (
                <div className='single-wrapper'>
                    <div className="img-wrapper">
                        <img className='bio-img' src={`https://book-service-layer.herokuapp.com/${after.image}`} alt={after.first_name} />
                        <div className="tavallud-wrapper">
                            <div className="tugilish">
                                <p className='tavallud'> {t("after.birth")} </p>
                                <p className='date-text'> 5 - AVG {after.date_of_birth}</p>
                                <p className='tavallud'>{after.country}, Uzbekistan</p>
                            </div>
                            <p className='data-text line'>-</p>
                            <div className="tugilish">
                                <p className='tavallud'>{t("after.date")}</p>
                                <p className='date-text'> 24 - MAY {after.date_of_death}</p>
                                <p className='tavallud'>{after.country}, Uzbekistan</p>
                            </div>
                        </div>
                        </div>
                            <div className="bio-wrapper">
                                <h2 className="bio-name">
                                   <span>{after.first_name}</span>
                                   <span> {after.last_name  }</span> 
                                </h2>
                                <p className="bio-text">
                                    {after.bio}
                                </p>
                                <h3 className="bio-icon">
                                {t("after.creativity")}
                                </h3>
                                <p className='bio-bloc' >
                                    Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“
                                    nomida ocherklar toʻplami tarzida nashrdan chiqdi.
                                    Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda 
                                    nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.
                                    yozuvchiga muvaffaqiyat. 
                                </p>
                                <div className="bio-asarlar-box">
                                    <h4 className="bio-asrlari">
                                    {t("after.work")}
                                    </h4>
                                    <a href="/books" className="bio-link">
                                    {t("Book.all")}
                                    </a>
                                </div>
                                {
                                    books?.length && (
                                     <ul className="list">
                                         {books.map((e)=><BookItem e={e} key={e.id} />)}
                                     </ul>
                                     )
                                 }
                           
                        </div>
                    
                </div>)
            }
        </div>
        </>
    )
}