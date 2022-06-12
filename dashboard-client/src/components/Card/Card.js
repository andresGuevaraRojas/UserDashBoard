import style from './Card.module.css';
function Card({header,children}){
    return(
        <div className={style.container}>
            <div className={style.header}>
                <span>{header}</span>
            </div>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}
export default Card