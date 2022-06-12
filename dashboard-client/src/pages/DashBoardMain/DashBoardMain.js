import CardWeather from "../../components/CardWeather/CardWeather";
import style from "./DashBoardMain.module.css";
import wheatherImage from "../../images/wheather.png";
function DashBoardMain() {
    return (
        <main className={style.container}>
            <div className={`${style.item} ${style.informationContainer}`}>
                <div className={style.informationColumn}>
                    <CardWeather
                        header={'Clima'}
                        img={wheatherImage}
                        grades={'29 C'}
                        description={'Parcialmente nublado'}
                    />
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