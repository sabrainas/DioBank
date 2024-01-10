import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useNavigate } from "react-router-dom"
import { changeLocalStorage } from "../services/storage"

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }
    return (
        <>

            {
                isLoggedIn ? (
                    <div className="flex px-2 py-3 border-b border-gray-500 w-full justify-between">
                        <h1 className="text-center font-bold text-[2rem] text-teal-900 
            ">DioBank</h1>
                    <button onClick={()=> logout()} className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Sair</button>
                    </div>
                    
                ) : (
                    <h1 className="text-center font-bold text-[2rem] text-teal-900 px-2 py-3 border-b border-gray-500 w-full justify-between
            ">DioBank</h1>
                )
            }

        </>
    )
}