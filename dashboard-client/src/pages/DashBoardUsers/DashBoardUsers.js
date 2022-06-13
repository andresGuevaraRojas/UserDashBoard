import Card from "../../components/Card/Card";
import style from "./DashBoardUsers.module.css";
function DashBoardUsers(){
    return(
        <main className={style.container}>
            <Card header={'Lista de usuarios del sistema'}></Card>
        </main>
    )
}
export default DashBoardUsers;