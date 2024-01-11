import { Request, Response } from "express";
import { UserServices } from "../services/UserServices";

export class UserController {

    userService: UserServices;
    
    constructor(userSerice = new UserServices){
        this.userService = userSerice;
    }
    
    createUser = (request: Request, response: Response) => {    
        const user = request.body;

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Nome obrigatorio'})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'Usuário criado com sucesso'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserServices()
        const users = this.userService.getAllUsers()
        return response.status(200).json(users)
    }
}