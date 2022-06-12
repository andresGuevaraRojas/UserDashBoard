import { Link, useNavigate } from 'react-router-dom';
import CreateAccounForm from '../../components/CreateAccountForm';
import { useAuth } from '../../providers/AuthProvider';
import style from "./CreateAccount.module.css";
function CreateAccount(){

    const navigate = useNavigate();
    const auth = useAuth();
    const submit = async(values)=>{
        const {email,password,confirmPassword,name} = values;

        const user = await auth.createAccount(email,password,confirmPassword,name);
        
        if(user != null){
            navigate('/');
        }        
    }
    return(
        <main className={style.container}>
            <h1 className={style.item}>Crear cuenta</h1>
            <CreateAccounForm className={style.item} onFinish={submit} loading = {auth.loading}/>              
            {auth.error&&
                <span className={style.error}>{auth.error.message}</span>    
            }          
        </main>
    )
}

export default CreateAccount;