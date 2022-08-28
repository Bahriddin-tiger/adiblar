
import { Route, Routes } from "react-router-dom"
import { Header } from "./components"

import {AddAfter, AddBooks, AfterSingle, BookSingle, Home, Iqtibos, Jadid, JadidBook, MakePayment, Muallif, Mustaqillik, MustaqillikBook, MyAccount, Security, Settings, Sovet, Wea, SovetBook, Taqriz, Temuriy, TemuriyBook} from "./pages"
import {Books} from "./pages"
import "./Provite.scss"
export const Private = () =>{
    return(
       
          <div>
             <Header/>
           
            <Routes>
            
                <Route path="home" element={<Home/>} >
                    <Route index element={<Temuriy/>} />
                    <Route path="Jadid" element={<Jadid/>} />
                    <Route path="Sovet" element={<Sovet/>} />
                    <Route path="Mustaqillik" element={<Mustaqillik/>} />
                </Route>
                <Route path="/author/authorId/:id" element={<AfterSingle/>} />
                <Route path="/book/bookId/:id" element={<BookSingle/>}>
                     <Route path="barcha" element={<Wea/>} />
                    <Route path="taqriz" element={<Taqriz/>} />
                    <Route path="muallif" element={<Muallif/>} />
                    <Route index element={<Iqtibos/>} />
                </Route>
                <Route path='/books' element={<Books/>}>
                    <Route index element={<TemuriyBook/>} />
                    <Route path="Jadid" element={<JadidBook/>} />
                    <Route path="Sovet" element={<SovetBook/>} />
                    <Route path="Mustaqillik" element={<MustaqillikBook/>} />
                </Route>
                <Route path='/addBooks' element={<AddBooks/>} />
                <Route path='/addAfter' element={<AddAfter/>} />
                <Route path='/settings' element={<Settings/>} >
                    <Route index element={<MyAccount/>} />
                    <Route path="Security" element={<Security/>} />
                    <Route path="MakePayment" element={<MakePayment/>} />
                </Route>
            </Routes>
            </div>
       
    )
}