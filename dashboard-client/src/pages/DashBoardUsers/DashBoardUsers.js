import Card from "../../components/Card/Card";
import { useAuth } from "../../providers/AuthProvider";
import style from "./DashBoardUsers.module.css";
function DashBoardUsers(){
    const auth = useAuth();
    const {users} = auth;
    return(
        <main className={style.container}>
            <Card header={'Lista de usuarios del sistema'} classNameContent={style.cardContent}>
                <table className={style.tableUsers}>
                    <thead>
                        <tr className={style.tableRow}>
                            <th className={style.tableCell}>Nombre</th>
                            <th className={style.tableCell}>Correo electrónico</th>
                            <th className={style.tableCell}>Fecha de registro</th>
                            <th className={style.tableCell}>Último login</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {
                            users.map(user=>(
                                <tr className={style.tableRow} key={user.email}>
                                    <td className={style.tableCell}>{user.name}</td>
                                    <td className={style.tableCell}>{user.email}</td>
                                    <td className={style.tableCell}>{user.registrationDate&&user.registrationDate}</td>
                                    <td className={style.tableCell}>{user.lastLogin&&user.lastLogin}</td>
                                </tr>
                            ))
                        }                        
                    </tbody>
                </table>
            </Card>
        </main>
    )
}
export default DashBoardUsers;