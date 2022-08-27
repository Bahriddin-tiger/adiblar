import { useContext, useEffect } from 'react';
import { useState } from 'react';
import {Link, NavLink, Outlet, useParams} from 'react-router-dom'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';
import "./BookSingle.scss"
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
export const BookSingle = () =>{
    const {t}=useTranslation()
    const {id}=useParams();
    const [book, setBook] = useState({})
    const [setAfter] =useState({})
    const {token} = useContext(AuthContext)
    const {theme} =useContext(ThemeContext)
    useEffect(()=>{
    axios.get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`,{
        headers:{
            Authorization:token.token,
        }
    })
    .then(function (response) {
     setBook(response.data);
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
        setAfter(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
   },[id,token,setAfter])
  
  
  
    return(
        <div className={theme}>
        
        <div>
            <div className='single-wrapper'>
                <div className="single-container">
                    <div className="bookSingle-inner">
                        <img className='bookSingle-img' 
                        src={`https://book-service-layer.herokuapp.com/${book.image}`} alt={book.title} />
                        <div className="BookSingle-wrapper">
                            <h2 className="BookSingle-title">
                                {book.title}
                            </h2>
                            <p className="bookSingle-text">
                            Javlon Jovliyev  
                            <span>|</span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5159 4.38408C12.4385 4.15727 12.2339 3.99707 11.9951 3.97847L8.57436 3.70666L7.09412 0.42995C6.99751 0.214543 6.78331 0.0765381 6.5475 0.0765381C6.31169 0.0765381 6.09748 0.214543 6.00088 0.42935L4.52063 3.70666L1.09992 3.97847C0.865312 3.99707 0.663106 4.15127 0.583303 4.37268C0.5035 4.59409 0.559902 4.84189 0.728508 5.0063L3.25639 7.47058L2.36236 11.3419C2.30716 11.5813 2.40376 11.8303 2.60597 11.9701C2.70917 12.0409 2.82798 12.0769 2.94738 12.0769C3.06318 12.0769 3.17959 12.0433 3.28039 11.9761L6.5475 9.79805L9.8146 11.9761C10.0234 12.1153 10.2976 12.1099 10.5016 11.9617C10.7044 11.8135 10.7938 11.5537 10.7248 11.3125L9.6274 7.47238L12.3491 5.0231C12.5273 4.86229 12.5927 4.61149 12.5159 4.38408Z" fill="white"/>
                            </svg>
                            <span>
                            4.1</span>
                            </p>
                            <p className="page">
                           {t("Book.pageNum")}
                            <span>{book.page}</span>
                            </p>
                            <p className='page'>
                            {t("Book.date")}
                            <span>
                                {book.year}
                            </span>
                            </p>
                            <p className="page">
                            {t("Book.genre")}
                            <span>Tarixiy</span>
                            </p>
                            <p className="page">
                            {t("Book.publisher")}
                            <span>Nihol nashr</span>
                            </p>
                            <p className="malumot">
                            {t("Book.info")}
                            <span></span>
                            </p> 
                            <p className='description'>
                                {book.description}
                            </p> 
                            <h4 className='format'>
                            {t("Book.format")}
                            </h4>
                            <div className="price-wrapper">
                                <div className="price-box">
                                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.750977 3.70569V6.70569V12.7057V15.7057V17.7057C0.750977 19.9067 2.54498 20.7057 3.75098 20.7057H18.751V18.7057H3.76298C3.30098 18.6937 2.75098 18.5117 2.75098 17.7057C2.75098 16.8997 3.30098 16.7177 3.76298 16.7057H16.751H17.751H18.751V15.7057V13.7057V2.70569C18.751 1.60269 17.854 0.705688 16.751 0.705688H3.75098C2.54498 0.705688 0.750977 1.50469 0.750977 3.70569Z" fill="white"/>
                                </svg>
                                <h5 className="price-name">
                                {t("Book.book")}
                                </h5>
                                <p className="price-narx">
                                   $ {book.price}
                                </p>
                                </div>
                                <div className="price-box">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.251 10.7056V8.99863C18.251 4.55663 14.772 0.83763 10.496 0.70863C8.29198 0.65763 6.24498 1.44463 4.67998 2.96463C3.11298 4.48463 2.25098 6.52363 2.25098 8.70563V10.7056C1.14798 10.7056 0.250977 11.6026 0.250977 12.7056V16.7056C0.250977 17.8086 1.14798 18.7056 2.25098 18.7056H4.25098V8.70563C4.25098 7.06863 4.89698 5.53963 6.07198 4.39963C7.24598 3.25963 8.80698 2.66063 10.435 2.70863C13.643 2.80463 16.251 5.62663 16.251 8.99863V18.7056H18.251C19.354 18.7056 20.251 17.8086 20.251 16.7056V12.7056C20.251 11.6026 19.354 10.7056 18.251 10.7056Z" fill="white"/>
                                </svg>
                                <h5 className="price-name">
                                {t("Book.audioBook")}                      
                                </h5>
                                <p className="price-narx">
                                6:23 soat
                                </p>
                                </div>
                                <div className="price-box">
                                <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75098 0.705688C1.64798 0.705688 0.750977 1.60269 0.750977 2.70569V18.7057C0.750977 19.8087 1.64798 20.7057 2.75098 20.7057H14.751C15.854 20.7057 16.751 19.8087 16.751 18.7057V2.70569C16.751 1.60269 15.854 0.705688 14.751 0.705688H2.75098ZM2.75098 15.7057V3.70569H14.751L14.753 15.7057H2.75098Z" fill="white"/>
                                </svg>

                                <h5 className="price-name">
                                {t("Book.electron")}
                                </h5>
                                <p className="price-narx">
                                pdf, epub
                                </p>
                                </div>
                                <button className='add'>
                                {t("Book.add")}
                                </button>
                            </div>
                        </div>
                    </div>  
                    <div className='we'>
                            <Link to="barcha" className="we-text">
                            {t("Book.possible")}
                            </Link>
                            <a href="/books" className="bio-link">
                            {t("Book.all")}
                            </a>  
                        </div>  
                        <div>
                            <NavLink className={({isActive})=>isActive ? "home-active-link ":"homeLink"} to="muallif">{t("Book.about")} </NavLink>    
                            <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="">{t("Book.quote")} </NavLink>    
                            <NavLink className={({isActive})=>isActive ? "home-active-link":"homeLink"} to="taqriz">{t("Book.review")}</NavLink>    
                        </div>
                        
                </div> 
            </div> 
            <Outlet/>                  
        </div>
        </div>
    )
}