import express, {Request, Response} from 'express';
import { router } from './routes';

const server = express();

server.use(express.json())
server.use(router)

//request = vem todos os dados da requisição que faz com o servidor
//response = é o parâmetro que permite o envio
server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'DioBank API'})
})

server.listen(5000, ()=> console.log('Server on'))