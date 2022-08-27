import "./Temuriy.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
export const Temuriy = () =>{
    const [temuriylar, setTemuriylar] = useState("")
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
        .then((res)=> setTemuriylar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            temuriylar.length && (
                <ul className="list">
                {temuriylar.map((e)=><Item e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}