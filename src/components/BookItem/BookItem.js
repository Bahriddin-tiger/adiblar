import { Link, Outlet } from "react-router-dom"
import book from "../../assets/imgs/book.png"
import "./BookItem.scss"
export const BookItem = ({e}) =>{
   
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
                
                   O'tkir Hoshimov
                   
                </h3>
                <p className="bookItem-date">
                    <br />{e.year}
                 </p>
            </Link>
            <Outlet/>
        </li>
    )
}