import axios from "axios";
import { useContext } from "react";
import Ulogbek from "../../assets/imgs/Ulugbek.png"
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next';
import "./AddAfter.scss"
import { ThemeContext } from "../../context/ThemeContext";
export const AddAfter = () =>{
    const {theme} =useContext(ThemeContext)
    const {t}=useTranslation()
    const {token}=useContext(AuthContext)
    const FormSubmit = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        const [author_image,author_first_name,author_last_name,author_birth,author_dead,author_genre,author_country,author_description,]=evt.target.elements;
        formData.append('image', author_image.files[0]);
        formData.append('first_name',author_first_name.value);
        formData.append('last_name',author_last_name.value);
        formData.append('date_of_birth',author_birth.value);
        formData.append('date_of_death',author_dead.value);
        formData.append('genre_id',author_country.value);
        formData.append('country', author_genre.value);
        formData.append('bio',author_description.value);
        axios.post('https://book-service-layer.herokuapp.com/author', formData, {
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
       <div className="AdAfter-box">
        <div className="books-box">
        <img className="AdAfter-img" src={Ulogbek} alt="books img" />
        <h2 className="books-name">Ulugbek {t("AddBook.treasure")}</h2>
        <button className="AdAfter-btn" type="submit">
        {t("AddAuthor.UploadImage")}
            </button>
        </div>
        <div className="AdAfter-form-box ">
            <h2 className="AdAfter-title">
            {t("AddAuthor.heading")}
            </h2>
        <form className="AdAfter-form" onSubmit={FormSubmit}>
            <input  className="AdAfterInput" type='file' name="image" placeholder="Image" />
            <input className="AdAfterInput" type='text' name="first_name" placeholder={t("AddAuthor.Firs")} />
            <input  className="AdAfterInput" type='text' name="last_name" placeholder={t("AddAuthor.Last")} />
            <input className="AdAfterInput" type='text' name="date_of_birth" placeholder={t("AddAuthor.DateOfBirth")} />
            <input  className="AdAfterInput" type='text' name="date_of_death" placeholder={t("AddAuthor.DateOfDeath")}/>
            <input  className="AdAfterInput" type='text' name="country" placeholder={t("AddAuthor.country")} />
            <select  className="AdAfterInput" type='text' name="genre_id"  >
                <option  defaultValue="1" >Temuriylar</option>
                <option value="2" >jadid</option>
                <option value="3" >sovet</option>
                <option value="4" >Mustaqillik</option>
            </select>
            <textarea className="AdAfterInput textarea" name="bio" placeholder={t("AddBook.description")} />
            <button className="AdAfter-btn" type="submit">
            {t("AddAuthor.button")}
            </button>
        </form>
        </div>
       </div>
       </div>
    )
}

