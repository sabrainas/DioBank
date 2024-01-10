import { Login } from './Login';

const mockSetIsLoggedIn  = jest.fn()
const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),

//     useContext: () => ({
//         setIsLoggedIn: jest.fn()
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))

describe('Login', () => {
    
    const mockEmail = 'sabrina@gmail.com'

    it('Deve exibir um alerta de boas vindas caso o email seja válido', async () => {
        
        const response = await Login(mockEmail)
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
        expect(response).toBeTruthy()
    })

    it('deve exibir um erro caso o email seja inválido', async() => {
        const response = await Login('email@invalid.com')
        // expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith()
        // expect(mockNavigate).not.toHaveBeenCalled() 
        expect(response).toBeFalsy() 
    })
})