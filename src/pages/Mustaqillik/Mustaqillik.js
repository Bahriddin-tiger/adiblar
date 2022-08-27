import "./Mustaqillik.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
export const Mustaqillik = () =>{
    const [mustaqilliklar, setMustaqilliklar] = useState("")
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/4')
        .then((res)=> setMustaqilliklar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            mustaqilliklar.length && (
                <ul className="list">
                {mustaqilliklar.map((e)=><Item  e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}