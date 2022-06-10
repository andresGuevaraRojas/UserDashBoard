import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import style from './Login.module.css';

function Login(){
    const submit = async(values)=>{
        console.log(values)
    }
    return(
        <main className={style.container}>
            <h1 className={style.item}>Bienvenido</h1>
            <LoginForm className={style.item} onFinish={submit}/>
            <div className={`${style.createAccount} ${style.item}`}>
                <span>¿No tienes cuenta?</span>
                <Link to={'/createAccount'}>Registrarme</Link>
            </div>
        </main>
    )
}

export default Login