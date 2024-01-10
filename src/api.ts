const conta = {
    email: 'sabrina@gmail.com',
    password: '123456',
    name: 'Sabrina Mendonça',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(conta);
    }, 1000);
})