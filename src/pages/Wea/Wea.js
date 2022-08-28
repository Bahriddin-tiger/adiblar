import "./Wea.scss"
import {  useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
import { ThemeContext } from "../../context/ThemeContext"
export const Wea = () =>{
    const [temuriylar, setTemuriylar] = useState("")
    const {theme}=useContext(ThemeContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
        .then((res)=> setTemuriylar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div className={theme}>
    
        
        {
            temuriylar?.length && (
                <ul className="list wea">
                {temuriylar.map((e)=><Item e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}