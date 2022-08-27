
import "./MustaqillikBook.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { BookItem} from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const MustaqillikBook = () =>{
    const [mustaqillikBooklar, setMustaqillikBooklar] = useState("")
    const {token}=useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/book/genreId/4')
        .then((res)=> setMustaqillikBooklar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            mustaqillikBooklar.length && (
                <ul className="list">
                {mustaqillikBooklar.map((e)=><BookItem e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}