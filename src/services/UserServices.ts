interface User {
    name: string;
    email: string;
}

const db = [
    {
        name: "test",
        email: "test@example.com",
    }
]

export class UserServices {
    db: User[]

    constructor(database = db) {
        this.db = db
    }

    createUser = (name: string, email: string) => {
        const user = {
            name, 
            email
        }
        this.db.push(user)
        console.log('DB ATUALIZADO', this.db)
    }

    getAllUsers = () => {
        return this.db
    }
}