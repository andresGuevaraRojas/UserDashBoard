import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import style from './Login.module.css';
import {useAuth} from '../../providers/AuthProvider'
function Login(){

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const submit = async(values)=>{
        console.log(values)
        const {email,password} = values;
        const user = await auth.login(email,password)      
        if(user != null){
            navigate('/dashboard')
        }
    }
    return(
        <main className={style.container}>
            <h1 className={style.item}>Bienvenido</h1>
            <LoginForm className={style.item} onFinish={submit} loading={auth.loading}/>
            <div className={`${style.createAccount} ${style.item}`}>
                <span>¿No tienes cuenta?</span>
                <Link to={'/createAccount'}>Registrarme</Link>
            </div>            
            {auth.error&&
                <span className={style.error}>{auth.error.message}</span>    
            }
            {location.state && location.state.from == 'createAccount'&&
                <span>{location.state.message}</span>    
            }
        </main>
    )
}

export default Login