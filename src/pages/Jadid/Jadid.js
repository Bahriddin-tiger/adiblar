import "./Jadid.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Item } from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const Jadid = () =>{
    const [jadidlar, setJadidlar] = useState("")
    const {token}=useContext(AuthContext)
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