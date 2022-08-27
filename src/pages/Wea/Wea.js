import "./Wea.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const Wea = () =>{
    const [temuriylar, setTemuriylar] = useState("")
    // const {token}=useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
        .then((res)=> setTemuriylar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
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