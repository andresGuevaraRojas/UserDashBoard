import Card from "../../components/Card";
import style from "./DashBoardMain.module.css"
function DashBoardMain() {
    return (
        <main className={style.container}>
            <div className={`${style.item} ${style.informationContainer}`}>
                <div className={style.informationColumn}>
                    <Card header={'Clima'}>
                        Hola
                    </Card>
                </div>
                <div className={style.informationColumn}> 

                </div>
            </div>
            <div className={`${style.item} ${style.countriesContainer}`}>
            </div>
        </main>
    )
}

export default DashBoardMain;