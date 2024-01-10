// Importação das bibliotecas e componentes necessários do React e react-router-dom.
import { BrowserRouter } from 'react-router-dom';

// Importações das páginas e componentes personalizados.
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';

// Renderização da aplicação.
import MainRoutes from './routes';

// Componente principal da aplicação.
function App() {
  // Renderiza a aplicação com BrowserRouter para gerenciar as rotas e AppContextProvider para fornecer o contexto.
  return (
    <>
      <BrowserRouter>
        <AppContextProvider> {/* Provedor de contexto que envolve toda a aplicação. */}
          <Layout> {/* Componente de layout geral da aplicação. */}
            <MainRoutes/>
          </Layout>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

// Exporta o componente principal da aplicação para ser utilizado em outros arquivos.
export default App;
