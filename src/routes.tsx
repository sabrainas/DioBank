import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import { AppContext } from "./components/AppContext";
import { useContext } from "react";

const MainRoutes = () => {

    const {isLoggedIn} = useContext(AppContext)
    return (
        <Routes> {/* Componente para definir as rotas da aplicação. */}
            {/* Define a rota raiz da aplicação que renderiza o componente Home. */}
            <Route path="/" element={<Home />} />

            {/* Define a rota para a página 'Conta' que aceita um parâmetro de ID. */}
            <Route path="/conta/:id" element={isLoggedIn ? <Conta/> : <Home/>} />

            {/* Define a rota para a página 'ContaInfo' que está aninhada dentro da rota da 'Conta'. */}
            <Route path="/conta/:id/info" element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes;