import { BrowserRouter, Routes, Route } from "react-router-dom";
import Asincronia from "../Components/Asincronia/Asincronia";
import Formularios from "../Components/Formularios/Formularios";
import HooksPersonalizados from "../Components/HooksPersonalizados/HooksPersonalizados";
import NavScrollExample from '../Components/Navbar/NavScrollExample';
import NotFound from "../Components/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Hook from '../Pages/Hooks/Hooks';
import Referencias from '../Pages/Referencias/Referencias';
import Rutas from '../Pages/Rutas/Rutas';


const Router = () => {

    return (
        <>
            <BrowserRouter>
                <NavScrollExample />
                <Routes>
                    <Route path="*" element={ <NotFound /> } />
                    <Route path="/" element={ <Home />} />
                    <Route path="/home" element={ <Home />} />
                    <Route path="/hook" element={ <Hook />} />
                    <Route path="/asincronia" element={ <Asincronia /> } />
                    <Route path="/custom" element={ <HooksPersonalizados /> } />
                    <Route path="/referencias" element={ <Referencias /> } />
                    <Route path="/formularios" element={ <Formularios /> } />
                    <Route path="/rutas" element={ <Rutas />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;