import Card from "../Card/Card";
import style from "./CardCountries.module.css";
function CardCountries({ header, countries = [] }) {
    return (
        <Card header={header} className={style.container} classNameContent={style.contentContainer}>
            {
                countries.map(country => (
                    <div className={style.countryContainer}>
                        <div className={style.imageContainer}>
                            <img className={style.image} src={country.img} />
                        </div>
                        <div className={style.countryItem}>
                            <span className={style.name}>{country.name}</span>
                        </div>
                    </div>
                ))
            }
        </Card>
    )
}
export default CardCountries;