import style from './Card.module.css';
function Card({header,children,className,classNameContent,onClick}){
    return(
        <div className={`${style.container} ${className}`} onClick={onClick}>
            <div className={style.header}>
                <span>{header}</span>
            </div>
            <div className={classNameContent?classNameContent:style.content}>
                {children}
            </div>
        </div>
    )
}
export default Card