import { Link, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import style from './DashBoard.module.css'
function DashBoard() {
    const auth = useAuth();

    const location = useLocation();

    console.log(location)
    const userName = auth.user ? auth.user.name : 'Desconocido';

    const isCurrentPage = (page) => {
        return location.pathname == page;
    }
    const links = [
        {
            path: '/dashboard',
            name: 'DashBoard'
        },
        {
            path: '/dashboard/users',
            name: 'Usuarios'
        }
    ]
    const getShortName = (name) => {
        const nameParts = name.split(' ');
        console.log(nameParts)
        let shorName = '';
        for (let i = 0; i < nameParts.length && i < 2; i++) {
            const part = nameParts[i];
            const firsLetter = part[0];
            shorName += firsLetter;
        }
        return shorName;
    }
    return (
        <>
            <nav className={style.navContainer}>
                <ul className={style.linksContainer}>
                    {
                        links.map(link => (
                            <li className={isCurrentPage(link.path)?`${style.linkItem} ${style.linkItemSelected}`:style.linkItem} key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }                   
                </ul>
                <div className={style.userContainer}>
                    <span className={style.userLogo}>{getShortName(userName)}</span>
                    <span className={style.userName}>{userName}</span>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default DashBoard