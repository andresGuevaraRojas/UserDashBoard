import AuthService from "../../services/AuthService";

describe("Test for AuthService class",()=>{    
    test("Login",()=>{
        const users = [
            {
                name:'Steve Derbez',
                email:'steder@contoso.com',
                pasword:'12345678'
            },
            {
                name:'michael diaz',
                email:'diaz1998@contoso',
                pasword:'qwertyuio'
            }
        ];

        const user = AuthService.login(users,'diaz1998@contoso','qwertyuio');

        expect(user.name).toBe('michael diaz');
        expect(user.email).toBe('email','diaz1998@contoso')
    })

    test("Create account",()=>{        
        const user = AuthService.createAccount('andresethan@contoso.com','123456qw','123456qw','Andres Ethan');

        expect(user.email).toBe('andresethan@contoso.com');
        expect(user.password).toBe('123456qw');
        expect(user.name).toBe('Andres Ethan');
    })
})