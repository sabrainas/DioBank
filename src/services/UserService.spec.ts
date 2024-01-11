import { UserServices } from "./UserServices";

describe('UserService', ()=>{
    const userService = new UserServices();   
    it('deve adicionar um novo usuário', ()=>{
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('sabrina', 'sabrina@gmail.com')
        expect(mockConsole).toHaveBeenCalled()
    })
})