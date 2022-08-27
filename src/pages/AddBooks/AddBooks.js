import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Abdulla from "../../assets/imgs/avloniy.png"
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./AddBooks.scss"
import { useTranslation } from 'react-i18next';

export const AddBooks = () =>{
    const {theme}=useContext(ThemeContext)
    const {token}=useContext(AuthContext)
    const {t}=useTranslation()
    const [temuriy,setTemuriy]=useState([])
    const [jadid,setJadid]=useState([])
    const [sovet,setSovet]=useState([])
    const [mustaqil,setMustaqil]=useState([])
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        const [book_image, book_title, book_page, book_year, book_price, book_author_id, book_genre_id, book_description]=evt.target.elements;
        formData.append('image', book_image.files[0]);
        formData.append('title',book_title.value);
        formData.append('page',book_page.value);
        formData.append('year',book_year.value);
        formData.append('price',book_price.value);
        formData.append('author_id',book_author_id.value);
        formData.append('genre_id', book_genre_id.value);
        formData.append('description',book_description.value);
        console.log(book_author_id.value);
        axios.post('https://book-service-layer.herokuapp.com/book',formData,{ 
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
 
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
        .then((res)=> setTemuriy(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])

   
    
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/2')
        .then((res)=>  setJadid(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/3')
        .then((res)=>setSovet(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/4')
        .then((res)=>setMustaqil(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    // setTimeout( console.log(temuriy.map((e)=>e.id)),500)
    // setTimeout( console.log(temuriy.map((e)=>e.first_name)),500)
    // console.log(all);
    return(
        <div className={theme}>
       <div className="AddBooks-box">
        <div className="books-box">
        <img className="AddBooks-img" src={Abdulla} alt="books img" />
        <h2 className="books-name">Ulugbek {t("AddBook.treasure")}</h2>
        <button className="AddBooks-btn" type="submit">
        {t("AddBook.btn")}
            </button>
        </div>
        <div className="AddBooks-form-box ">
            <h2 className="AddBooks-title">
            {t("AddBook.heading")}
            </h2>
        <form className="AddBooks-form" onSubmit={FormSubmit}>
            <input  className="AdBookInput" type='file' name="image" placeholder="Image" />
            <input name="title" className="AdBookInput" type='text' placeholder={t("AddBook.title")}/>
            <input name="page"  className="AdBookInput" type='text' placeholder={t("AddBook.pages")} />
            <input name="year" className="AdBookInput" type='number' placeholder={t("AddBook.year")}/>
            <input  name="price" className="AdBookInput" type='number' placeholder={t("AddBook.price")} />
            <select  className="AdBookInput" type='text' name="genre"  >
                <option  defaultValue="author" >{t("AddBook.author")}</option>
                { temuriy.map((e)=> (<option key={e.id} value={e.id}> {e.first_name} </option>))}
                { sovet.map((e)=> (<option key={e.id}   value={e.id}> {e.first_name} </option>))}
                { jadid.map((e)=> (<option key={e.id}  value={e.id}> {e.first_name} </option>))}
                { mustaqil.map((e)=> (<option key={e.id}  value={e.id}> {e.first_name} </option>))}
            </select>
            <select className="AdBookInput" type='text' name="genre" >
                <option defaultValue="1">Temuriylar</option> 
                <option value="2">JAdid</option> 
                <option value="3">Sovet</option> 
                <option value="4">Mustaqillik</option> 
            </select>
            
            <textarea name="bio" className="AdBookInput" placeholder={t("AddBook.description")} />
            <button className="AddBooks-btn" type="submit">
            {t("AddBook.button")}
            </button>
        </form>
        </div>
       </div>
       </div>
    )
}

