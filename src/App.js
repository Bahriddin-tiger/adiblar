import "./assets/styles/main.scss"
import { useAuth } from "./Hooks/useAuth";
import { Private } from "./Private";
import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import { Public } from "./Public";
import {lang as til} from "./lang/lang"
i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {translation: til.en},
      uz: {translation: til.uz},
      ru: {translation: til.ru}
    }
  }
)
function App() {
  const {token}= useAuth();
 if(token){
  return(
    <div>
      <Private/>
    </div>
    
  )
 }
 return(
  <Public/>
 )
}

export default App;
