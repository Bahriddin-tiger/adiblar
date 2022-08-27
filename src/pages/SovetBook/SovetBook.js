
import "./SovetBook.scss"
import { useContext, useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { BookItem} from "../../components"
import { AuthContext } from "../../context/AuthContext"
export const SovetBook = () =>{
    const [sovetBooklar, setSovetBooklar] = useState("")
    const {token}=useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://book-service-layer.herokuapp.com/book/genreId/3')
        .then((res)=> setSovetBooklar(res.data))
        .catch(function (error) {
          console.log(error);
        })
    },[])
    return(<div>
    
        
        {
            sovetBooklar.length && (
                <ul className="list">
                {sovetBooklar.map((e)=><BookItem e={e} key={e.id} />)}
                </ul>
            )
        }
            </div>
    )
}