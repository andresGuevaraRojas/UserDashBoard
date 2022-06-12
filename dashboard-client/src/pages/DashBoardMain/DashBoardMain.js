import CardWeather from "../../components/CardWeather/CardWeather";
import style from "./DashBoardMain.module.css";
import wheatherImage from "../../images/wheather.png";
import mexicoFlag from "../../images/mexico.jpg";
import CardCountry from "../../components/CountryCard";
import CardTodo from "../../components/CardTodo";
import CardHour from "../../components/CardHour/CardHour";
import CardTimeZones from "../../components/CardTimeZones";
import CardCountries from "../../components/CardCountries/CardCountries";
import countryCodes from "../../data/countryCodes";
function DashBoardMain() {

    const todoList = [
        'Ir al banco',
        'Revisar balance general',
        'Ajustar métricas de diseño',
    ];
    const completedTasks = [
        'Terminar la prueba',
        'Debugger codigo',
        'Realizar pruebas unitarias'
    ];
    const timeZones = [
        'Ciudad de México',
        'Tijuana',
        'Monterrey'
    ];

    const countriesNames = countryCodes.map(country=>({
        name:country['Country Name'],
        img:`https://countryflagsapi.com/png/${country["Country Code"]}`
    }));

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
                    <CardTodo header={'Tareas pendientes'} todoList={todoList}/>
                    <CardTodo header={'Tareas completadas'} todoList={completedTasks}/>
                    
                </div>
                <div className={style.informationColumn}> 
                    <CardCountry 
                        header={'Pais seleccionado'}
                        name={'México'}             
                        img={mexicoFlag}           
                    />
                    <CardHour header={'Hora'} hour={'11:15:15 P.M'}/>
                    <CardTimeZones header={'Zonas horarias disponibles'} timeZones={timeZones}/>
                </div>
            </div>
            <div className={`${style.item} ${style.countriesContainer}`}>
                <CardCountries header={'Paises disponibles'} countries={countriesNames}/>
            </div>
        </main>
    )
}

export default DashBoardMain;