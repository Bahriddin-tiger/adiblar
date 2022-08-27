import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import book from "../../assets/imgs/book.png"
import { AuthContext } from "../../context/AuthContext"
import "./BookItem.scss"
export const BookItem = ({e}) =>{
    const {token}=useContext(AuthContext)
    const [after, setAfter]=useState({})
    useEffect(()=>{
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${e.author_id}`,{
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
       },[e.author_id,token])
    return(
        <li className="bookItem">
            <Link className="bookItem-link"  to={`/book/bookId/${e.id}`} >
                <div>

                {e.image !== null ? <img width={164} height={246} className="bookItem-img" src={`https://book-service-layer.herokuapp.com/${e.image}`} alt={e.title} /> :<img width={164} height={246} className="bookItem-img"
                 src={book} alt={e.title} />}
                </div>
                <h3 className="bookItem-title" >
                {e.title} <br />
                <br />
                
                  <span>{after.first_name} </span>
                  <span>{after.last_name}</span>
                   
                </h3>
                <p className="bookItem-date">
                    <br />{e.year}
                 </p>
            </Link>
            <Outlet/>
        </li>
    )
}