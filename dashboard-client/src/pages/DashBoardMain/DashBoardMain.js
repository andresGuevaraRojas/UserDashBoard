import CardWeather from "../../components/CardWeather/CardWeather";
import style from "./DashBoardMain.module.css";
import wheatherImage from "../../images/wheather.png";
import mexicoFlag from "../../images/mexico.jpg";
import CardCountry from "../../components/CountryCard";
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
                    <CardCountry 
                        header={'Pais seleccionado'}
                        name={'México'}             
                        img={mexicoFlag}           
                    />
                </div>
            </div>
            <div className={`${style.item} ${style.countriesContainer}`}>
            </div>
        </main>
    )
}

export default DashBoardMain;