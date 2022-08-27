import "./Mustaqillik.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const Mustaqillik = () =>{
    const [mustaqilliklar, setMustaqilliklar] = useState("")
    const {token}=useContext(AuthContext)
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