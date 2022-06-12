import Card from "../Card/Card";
import style from "./CardWeather.module.css";
function CardWeather({header,img,grades,description}){
    return (
        <Card header={header}>
            <div className={style.container}>
                <div className={style.imageContainer}>
                    <img className={style.image} src={img}/>
                </div>
                <div className={style.dataContainer}>
                    <span className={style.grades}>{grades}</span>
                    <span className={style.description}>{description}</span>
                </div>
            </div>
        </Card>
    )
}
export default CardWeather