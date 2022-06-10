import style from "./LoginForm.module.css"
function LoginForm({className,onFinish}){
    const hadleSubmit = async(e)=>{
        e.preventDefault();
        await onFinish('hola');
    }
    return(
        <div className={`${style.container} ${className}`}>
            <form onSubmit={hadleSubmit}>
                <div className={style.inputGroup}>
                    <label>Correo electrónico</label>
                    <input type={'email'} placeholder="usuario@correo.com"/>
                </div>
                <div className={style.inputGroup}>
                    <label>Contraseña</label>
                    <input type={'password'} placeholder="******************"/>
                </div>     
                <button type='submit'>Iniciar sesión</button>           
            </form>
        </div>
    )
}

export default LoginForm