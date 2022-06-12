import style from "./DashBoardMain.module.css"
function DashBoardMain() {
    return (
        <main className={style.container}>
            <div className={`${style.item} ${style.informationContainer}`}>
                <div className={style.informationColumn}>

                </div>
                <div className={style.informationColumn}> 

                </div>
            </div>
            <div className={`${style.item} ${style.countriesContainer}`}>
            </div>
        </main>
    )
}

export default DashBoardMain;