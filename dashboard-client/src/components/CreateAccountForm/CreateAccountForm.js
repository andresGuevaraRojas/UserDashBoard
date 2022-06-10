import { useState } from "react";
import {isValidEmail,isValidPassword} from '../../utils/Validator'
import style from "./CreateAccountForm.module.css";
function CreateAccounForm({ className,onFinish }) {
    const [inputs,setInputs] = useState({
        email:{            
            value:'',
            error:null
        },
        password:{            
            value:'',
            error:null
        },
        confirmPassword:{
            value:'',
            error:null
        }
    })

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        const inputData = {value:value,error:null}
        setInputs({...inputs,[name]:{...inputData}})
    }    

    const hadleSubmit = async(e)=>{
        e.preventDefault();                        
       
        if(!isValidEmail(inputs.email.value)){            
            const emailData = {...inputs.email,error:'Ingrese un correo válido'}
            setInputs({...inputs,email:{...emailData}})            
            return
        }

        if(!isValidPassword(inputs.password.value)){
            const passwordData = {...inputs.password,error:'Ingrese una contraseña de por lo menos 8 caracteres'}
            setInputs({...inputs,password:passwordData})         
            return
        }

        if(inputs.password.value !== inputs.confirmPassword.value){
            const passwordData = {...inputs.confirmPassword,error:'Los campos de contraseña no coinciden'}
            setInputs({...inputs,confirmPassword:passwordData})         
            return
        }

        const emailValue = inputs.email.value;
        const passwordValue = inputs.password.value;
        const confirmPasswordValue = inputs.confirmPassword.value;

        const inputsValue = {email:emailValue,password:passwordValue,confirmPassword:confirmPasswordValue}
        await onFinish(inputsValue);
    }
    return (
        <div className={`${style.container} ${className}`}>
            <form onSubmit={hadleSubmit}>
                <div className={style.inputGroup}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type={'email'}
                        placeholder="usuario@correo.com.mx"
                        name="email"
                        value={inputs.email.value}
                        onChange={handleChange}
                    />
                    {
                        inputs.email.error &&
                        <span className={style.error}>{inputs.email.error}</span>
                    }
                </div>
                <div className={style.inputsHorizontal}>
                    <div className={style.inputGroup}>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type={'password'}
                            placeholder="******************"
                            name="password"
                            value={inputs.password.value}
                            onChange={handleChange}
                        />
                        {
                            inputs.password.error &&
                            <span className={style.error}>{inputs.password.error}</span>
                        }
                    </div>
                    <div className={style.inputGroup}>
                        <label htmlFor="confirmPassword">Contraseña</label>
                        <input
                            type={'password'}
                            placeholder="******************"
                            name="confirmPassword"
                            value={inputs.confirmPassword.value}
                            onChange={handleChange}
                        />
                        {
                            inputs.confirmPassword.error &&
                            <span className={style.error}>{inputs.confirmPassword.error}</span>
                        }
                    </div>
                </div>                
                <button type='submit' formNoValidate>Registrarme</button>
            </form>
        </div>
    )
}
export default CreateAccounForm;