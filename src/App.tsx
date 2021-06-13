import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
import Lista from "./pages/lista";
import { ListagemProvider } from "./contexts/listagem";
import { OrganizacaoProvider } from "./contexts/organizacao";

function App() {
  return (
    <ListagemProvider>
      <OrganizacaoProvider>
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </OrganizacaoProvider>
    </ListagemProvider>
  );
}

export default App;
