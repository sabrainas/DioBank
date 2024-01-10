import { Link } from "react-router-dom"

const ContaInfo = () =>{
    return (
        <>
            <p className="font-bold text-3xl">
                Informações da conta
            </p>

            <Link to='/conta/1'>
                <p className="text-xl font-semibold">
                    Conta
                </p>
            </Link>
        </>
    )
}

export default ContaInfo