import {createBrowserRouter} from "react-router-dom";

/**
 * Routes
 */

import Home from "../views/Home"
import Login from "../views/Login"
import Miembros from "../views/Miembros"
import MiembrosAdmin from "../views/MiembrosAdmin"
import Formulario from "../views/Formularios"
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