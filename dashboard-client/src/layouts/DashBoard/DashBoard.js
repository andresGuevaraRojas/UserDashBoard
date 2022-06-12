import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import style from './DashBoard.module.css'
function DashBoard(){
    const auth = useAuth();

    const userName = auth.user?auth.user.name:'Desconocido';

    const getShortName = (name)=>{
        const nameParts = name.split(' ');
        console.log(nameParts)
        let shorName = '';
        for (let i = 0; i<nameParts.length && i<2; i++) {
          const part = nameParts[i];
          const firsLetter = part[0];
          shorName+= firsLetter;
        }
        return shorName;
    }
    return(
        <>
            <nav className={style.navContainer}>
                <ul className={style.linksContainer}>
                    <li className={`${style.linkItem} ${style.linkItemSelected}`}>
                        <Link to={'/dashboard'}>DashBoard</Link>
                    </li>
                    <li className={style.linkItem}>
                        <Link to='users'>Usuarios</Link>
                    </li>
                </ul>
                <div className={style.userContainer}>
                    <span className={style.userLogo}>{getShortName(userName)}</span>
                    <span className={style.userName}>{userName}</span>
                </div>                
            </nav>    
            <Outlet/>            
        </>
    )
}
export default DashBoard