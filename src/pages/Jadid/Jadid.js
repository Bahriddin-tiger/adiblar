import "./Jadid.scss"
import {  useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"

export const Jadid = () =>{
    const [jadidlar, setJadidlar] = useState("")
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/2')
        .then((res)=> setJadidlar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            jadidlar.length && (
                <ul className="list">
                {jadidlar.map((e)=><Item  e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}