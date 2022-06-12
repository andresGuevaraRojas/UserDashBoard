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
import {useEffect, useState} from "react"
import TimeZonesService from "../../services/TimeZonesService";
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
    const countriesData = countryCodes.map(country=>({
        name:country['Country Name'],
        countryCode:country['Country Code'],
        img:`https://countryflagsapi.com/png/${country["Country Code"]}`
    }));

    const getCountryDataByCountryCode = (countries,code)=>{
        const country = countries.find(country=>country.countryCode === code);
        return country;
    }
    const getCountryNameByCountryCode = (countries,code)=>{
        const country = getCountryDataByCountryCode(countries,code);
        return country.name;
    }
    const getCountryFlagByCountryCode = (countries,code)=>{
        const country = getCountryDataByCountryCode(countries,code);
        return country.img;
    }

    const timeZonesName = (timeZones)=>{
        return timeZones.map(timeZone=>timeZone.zoneName)
    }
    const getDefaultTimeZoneOfCountry = (countryCode,timeZones)=>{        
        if(countryCode == 'MX'){
            return 'America/Mexico_City';
        }
        const timeZone = timeZones[0];                
        return timeZone.zoneName;
    }

    const formatHour = (hour)=>{
        const date = new Date(hour).toLocaleString();
        const parts = date.split(', ');
        return parts[1];
    }
    
    const [timeZones,setTimeZones] = useState([]);

    const [selectedCountry,setSelectedCountry] = useState('MX');
    const [selectedTimeZone,setSelectedTimeZone] = useState(null);
    const [hour,setHour] = useState(null);

    
        
    useEffect(()=>{
        const fechData = async()=>{
            const timeZonesList = await TimeZonesService.getTimeZonesByCountryCode(selectedCountry);                
            const defaultTimeZone = getDefaultTimeZoneOfCountry(selectedCountry,timeZonesList);
            const hourTimeZone = await TimeZonesService.getTimeZoneByZone(defaultTimeZone);
            setTimeZones(timeZonesList);
            setSelectedTimeZone(defaultTimeZone);            
            setHour(hourTimeZone);
        }
        fechData()     
    },[selectedCountry])

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
                        name={getCountryNameByCountryCode(countriesData,selectedCountry)}             
                        img={getCountryFlagByCountryCode(countriesData,selectedCountry)}           
                    />
                    <CardHour header={'Hora'} hour={formatHour(hour)}/>
                    <CardTimeZones header={'Zonas horarias disponibles'} timeZones={timeZonesName(timeZones)}/>
                </div>
            </div>
            <div className={`${style.item} ${style.countriesContainer}`}>
                <CardCountries header={'Paises disponibles'} countries={countriesData} onClick={(country)=>setSelectedCountry(country.countryCode)}/>
            </div>
        </main>
    )
}

export default DashBoardMain;