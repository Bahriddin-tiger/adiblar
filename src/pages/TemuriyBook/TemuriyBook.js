
import "./TemuriyBook.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { BookItem} from "../../components"
export const TemuriyBook = () =>{
    const [temuriyBooklar, setTemuriyBooklar] = useState("")
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/book/genreId/1')
        .then((res)=> setTemuriyBooklar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            temuriyBooklar.length && (
                <ul className="list">
                {temuriyBooklar.map((e)=><BookItem e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}