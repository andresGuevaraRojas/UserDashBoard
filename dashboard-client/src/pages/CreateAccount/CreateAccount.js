import { Link } from 'react-router-dom';
import CreateAccounForm from '../../components/CreateAccountForm';
import style from "./CreateAccount.module.css";
function CreateAccount(){
    const submit = async(values)=>{
        console.log(values)
    }
    return(
        <main className={style.container}>
            <h1 className={style.item}>Crear cuenta</h1>
            <CreateAccounForm className={style.item} onFinish={submit}/>            
        </main>
    )
}

export default CreateAccount;