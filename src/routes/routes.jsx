import {createBrowserRouter} from "react-router-dom";

/**
 * Routes
 */

import Home from "../pages/Home"
import Login from "../pages/Login"
import Miembros from "../pages/Miembros"
import MiembrosAdmin from "../pages/MiembrosAdmin"
import Formulario from "../pages/Formularios"
import { PrivateRoute } from "../components/PrivateRoute";

const router = createBrowserRouter ([
    {path: "/home", element: <Home/>},
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Formulario/>},
    {path: "/miembros", element: <Miembros/>},
    {path: "/miembrosadmin", element: <PrivateRoute><MiembrosAdmin/></PrivateRoute>}
]);

export default router;
