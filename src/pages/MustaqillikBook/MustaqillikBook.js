
import "./MustaqillikBook.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { BookItem} from "../../components"
export const MustaqillikBook = () =>{
    const [mustaqillikBooklar, setMustaqillikBooklar] = useState("")
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