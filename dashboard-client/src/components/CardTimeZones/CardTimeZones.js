import Card from "../Card/Card";
import style from "./CardTimeZones.module.css";
function CardTimeZones({ header, timeZones = [],onClick,selectedTimeZone}) {

    const handleClick = (timeZone)=>{
        onClick(timeZone)
    }
    return (
        <Card header={header}>
            <div className={style.container}>
                <div className={style.timeZones}>
                    {
                        timeZones.map(timeZone => (
                            <span 
                                className={selectedTimeZone == timeZone?`${style.timeZoneItem} ${style.timeZoneItemSelected}`:style.timeZoneItem} 
                                key={timeZone} 
                                onClick={()=>{handleClick(timeZone)}}
                            >
                                {timeZone}
                            </span>
                        ))
                    }
                </div>
            </div>
        </Card>
    )
}
export default CardTimeZones;