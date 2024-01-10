//definindo uma interface para representar a estrutura de dados do usuário
interface UserData{
    email: string,
    password: string,
    name: string
}

//componente de fomulario
export const Form = ({children}: any) => {

    
    // const [userData, setUserData] = useState<null | UserData>() //state para armazenar os dados do usuário. Inicialmente é definido como null.

    // //efeito colateral (useEffect) que será executado após cada renderização
    // useEffect(() => {

    //     //função assíncrona para buscar dados de alguma API já definida
    //     const getData = async () => {
    //         //aqui esta simulando a chamada da API. na pratica será substituído pela chamada real à API
    //         const data: any | UserData = await api
    //         //define os dados do usuário no estado após a obtenção dos dados
    //         setUserData(data)
    //     }

    //     //chama a função para buscar os dados quando o componente é montado
    //     getData()
    // }, []);

    return (
        <>
            <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg shadow-2xl">
                {children}
            </div>
        </>
    )
}