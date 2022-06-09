import { Outlet } from "react-router-dom";
import style from "./Auth.module.css";
function Auth(){
    return (
       <div className={style.container}>    
        <div className={style.innerContainer}>
            <Outlet/>     
        </div>          
       </div> 
    )
}

export default Auth;