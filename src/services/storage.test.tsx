import { createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe('storage', ()=>{
    
    it('deve retornar o objeto no localStorage com a chave dioBank', ()=>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith(dioBank)
    })

    it('deve criar o objeto no localStorage', ()=>{
        const mockSetItem = jest.spyOn(Storage.prototype, 'getItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
}) 