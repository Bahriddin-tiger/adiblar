import "./Sovet.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
export const Sovet = () =>{
    const [sovetlar, setSovetlar] = useState("")
   
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/3')
        .then((res)=> setSovetlar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            sovetlar.length && (
                <ul className="list">
                {sovetlar.map((e)=><Item e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}