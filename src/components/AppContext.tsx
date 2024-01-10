// Importação da função createContext do React para criar um contexto.
import { createContext, useState } from 'react';

// Definição de uma interface para o contexto da aplicação.
interface IAppContext {
  user: string, // Define que o contexto terá uma propriedade 'user' do tipo string.
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

// Criação do contexto da aplicação usando createContext e definindo o tipo como IAppContext.
export const AppContext = createContext({} as IAppContext);

// Componente AppContextProvider que irá envolver a aplicação e fornecer o contexto.
export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  
    // Define uma constante 'user' com o valor 'sabrina'.
  const user = 'sabrina';

  // Retorna o provedor de contexto com o valor do usuário e renderiza os filhos (children).
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}