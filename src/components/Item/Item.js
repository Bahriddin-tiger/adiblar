import { Link } from "react-router-dom"
import "./Item.scss"
import adib from "../../assets/imgs/adib.png"
export const Item = ({e}) =>{
    
    return(
        <li className="item">
            <Link className="item-link"  to={`/author/authorId/${e.id}`} >
                { e.image !== null ? <img width="173" height="132" className="item-img"
                 src={`https://book-service-layer.herokuapp.com/${e.image}`} alt={e.last_name} />
                :<img width="173" height="132" className="item-img" src={adib} alt={e.last_name} />}
                <h3 className="item-title" >
                    <span>{e.last_name} </span>

                    <span> {e.first_name}</span>
                </h3>
                <p className="item-date">
                    <span>{e.date_of_birth}</span>
                    -
                    <span>{e.date_of_death}</span>
                </p>
            </Link>
        </li>
    )
}