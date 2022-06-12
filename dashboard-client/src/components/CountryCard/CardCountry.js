import Card from "../Card/Card";
import style from "./CardCountry.module.css";
function CardCountry({header,img,name}) {
    return (
        <Card header={header}>
            <div className={style.container}>                
                <div className={style.countryContainer}>
                    <span className={style.name}>{name}</span>                    
                </div>
                <div className={style.imageContainer}>
                    <img className={style.image} src={img} />
                </div>
            </div>
        </Card>
    )
}

export default CardCountry;