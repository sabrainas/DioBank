import { useContext, useEffect, useState } from "react";
import CardInfo from "../components/CardInfo";
import {api} from '../api';
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

//definindo uma interface para representar a estrutura de dados do usuário
interface UserData{
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () =>{
    const [userData, setUserData] = useState<null | UserData>() //state para armazenar os dados do usuário. Inicialmente é definido como null.

    const {id} = useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)
    console.log('retorno da página conta', isLoggedIn)

    !isLoggedIn && navigate('/')

    //efeito colateral (useEffect) que será executado após cada renderização
    useEffect(() => {

        //função assíncrona para buscar dados de alguma API já definida
        const getData = async () => {
            //aqui esta simulando a chamada da API. na pratica será substituído pela chamada real à API
            const data: any | UserData = await api
            //define os dados do usuário no estado após a obtenção dos dados
            setUserData(data)
        }

        //chama a função para buscar os dados quando o componente é montado
        getData()
    }, []);

    const actualData = new Date();

    if(userData && id !== userData.id){
        navigate('/')
    }

    return(
        <div className="grid grid-cols-2 pt-8 gap-8">
            {
                userData === undefined || userData === null ? (
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate[spin_1.5s_linear_infinite] ">
                </div>
                ) : 
                (
                    <>
                        <CardInfo mainContent={`Bem-vindo(a) ${userData?.name}`} content={`${actualData.getDate()} / ${actualData.getMonth() + 1} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                        
                        <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`}/>
                    </>
                )
            }
        </div>
    )
}

export default Conta