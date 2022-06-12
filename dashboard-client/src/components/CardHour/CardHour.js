import Card from "../Card/Card";
import style from "./CardHour.module.css";
function CardHour({header,hour}) {
    return (
        <Card header={header}>
            <div className={style.container}>                
                <div className={style.hourContainer}>
                    <span className={style.hour}>{hour}</span>                    
                </div>               
            </div>
        </Card>
    )
}

export default CardHour;