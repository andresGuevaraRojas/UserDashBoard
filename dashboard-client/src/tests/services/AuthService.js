class AuthService{
    static login(users,email,password){
        const user = users.find(user=>
            user.email === email && 
            user.password === password
        );

        return user;
    }

    static createAccount(email,password,confirmPassword,name){
        const newUser = {
            email:email,
            password:password,          
            name:name
        };

        return newUser;
    }
}

export default AuthService;