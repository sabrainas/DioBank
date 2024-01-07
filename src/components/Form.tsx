import {Header} from './Header'
import {Login} from '../services/Login';

export const Form = () => {
    return (
        <>
            <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg shadow-2xl">
                <Header />
                <form className=" py-3 flex flex-col gap-3">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="email">E-mail: </label>
                        <input type="email" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" placeholder="E-mail"/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="email">Senha: </label>
                        <input type="password" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" placeholder="Senha"/>
                    </div>

                    <button className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white" onClick={Login}>Entrar</button>
                </form>
            </div>
        </>
    )
}