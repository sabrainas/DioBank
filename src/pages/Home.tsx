import { MouseEventHandler, useContext, useState } from "react"
import { Button } from "../components/Button"
import { Form } from "../components/Card"
import { Login } from "../services/Login"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage } from "../services/storage"

const Home = () =>{
    const [email, setEmail] = useState<string>('') //state para armazenar o valor do email
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()
    
    const validateUser = async(email: string) =>{
        const loggedIn = await Login(email)

        if(!loggedIn){
            return alert('Usuário ou senha inválidos')
        }
        setIsLoggedIn(true)
        changeLocalStorage({login: true})

        navigate('/conta/1')
    }
    
    return (
        <>
            <Form>
                <div>
                    <h1 className="text-center py-2 font-semibold">Faça o Login</h1>
                    {/* <p className="text-center py-2 font-semibold"> {userData?.name} </p> */}
                    
                </div>

                <form className=" py-3 flex flex-col gap-3">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="email">E-mail: </label>
                        <input type="email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" placeholder="E-mail"  value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="email">Senha: </label>
                        <input type="password" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" placeholder="Senha" />
                    </div>

                    <Button onClick={() => validateUser(email)}/>

                    {/* {
                        userData === null || userData === undefined ?
                        <h1 className="text-center text-sm">Loading...</h1> :
                        <h1 className="text-center text-sm">Informações carregadas</h1>
                    } */}

                </form>
            </Form>
        </>
            
    )
}

export default Home