import { isValidEmail, isValidPassword } from "../../utils/Validator"

describe("Test for Validator",()=>{
    test('return true with a valid email',()=>{
        const email = 'usuario@correo.com.mx'
        expect(isValidEmail(email)).toBe(true)
    })

    test('return false with a invalid email',()=>{
        const email = 'usuario.correo'
        expect(isValidEmail(email)).toBe(false)
    })

    test('return false with a empty email',()=>{
        const email = ''
        expect(isValidEmail(email)).toBe(false)
    })


    test('return true with a password greather 8 characters',()=>{
        const password = 'Adfsdjgnj33322'
        expect(isValidPassword(password)).toBe(true)
    })

    test('return false with less than 8 characters',()=>{
        const password = 'fg3352f'
        expect(isValidPassword(password)).toBe(false)
    })

    test('return false with a empty password',()=>{
        const password = ''
        expect(isValidPassword(password)).toBe(false)
    })
})
