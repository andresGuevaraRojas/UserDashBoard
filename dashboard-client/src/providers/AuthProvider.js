import {createContext, useContext, useState} from 'react';
import AuthService from '../services/AuthService';

const authContext = createContext();

function ProvideAuth({children}){
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

function useAuth(){
    return useContext(authContext);
}
function useProvideAuth(){
    const [users,setUsers] = useState([
        {
            name:'Steve Derbez',
            email:'steder@contoso.com',
            password:'12345678',
            lastLogin:new Date(),
            registrationDate:new Date()
        },
        {
            name:'michael diaz',
            email:'diaz1998@contoso',
            password:'qwertyuio',
            lastLogin:new Date(),
            registrationDate:new Date()
        }
    ]);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const login = async(email,password)=>{
        try {
            setLoading(true)
            const loginUser = await AuthService.login(users,email,password);
            if(user){
                loginUser.lastLogin = new Date();
            }            
            setUser(loginUser)
            return loginUser                        
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    const createAccount = async(email,password,confirmPassword,name)=>{
        try {
            setLoading(true)
            const newUser = await AuthService.createAccount(email,password,confirmPassword,name);
            if(user){
                newUser.registrationDate = new Date();
            }            
            setUser(newUser)            
            setUsers([...users,newUser])
            return newUser
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    return{        
        user,
        users,
        loading,
        error,
        login,
        createAccount
    }
}
export {ProvideAuth,useAuth}