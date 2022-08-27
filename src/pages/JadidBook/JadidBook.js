
import "./JadidBook.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { BookItem} from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const JadidBook = () =>{
    const [jadidBooklar, setJadidBooklar] = useState("")
    const {token}=useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/book/genreId/2')
        .then((res)=> setJadidBooklar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            jadidBooklar.length && (
                <ul className="list">
                {jadidBooklar.map((e)=><BookItem e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}