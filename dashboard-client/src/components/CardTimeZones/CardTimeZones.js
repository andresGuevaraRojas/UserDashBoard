import Card from "../Card/Card";
import style from "./CardTimeZones.module.css";
function CardTimeZones({ header, timeZones = [] }) {
    return (
        <Card header={header}>
            <div className={style.container}>
                <div className={style.timeZones}>
                    {
                        timeZones.map(timeZone => (<span className={style.timeZoneItem}>{timeZone}</span>))
                    }
                </div>
            </div>
        </Card>
    )
}
export default CardTimeZones;