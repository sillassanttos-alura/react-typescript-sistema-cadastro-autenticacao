import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaginaBaseBase from "./pages/PaginaBase";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PaginaBase /> } >
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;