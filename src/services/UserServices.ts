const db = [
    {
        name: "test",
        email: "test@example.com",
    }
]

export class UserServices {
    createUser = (name: string, email: string) => {
        const user = {
            name, 
            email
        }
        db.push(user)
        console.log('DB ATUALIZADO', user)
    }

    getAllUsers = () => {
        return db
    }
}