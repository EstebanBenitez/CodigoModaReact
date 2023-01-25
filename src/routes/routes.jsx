import {createBrowserRouter, Navigate} from "react-router-dom";
import {PrivateRoute} from "../components/PrivateRoute";

/**
 * Routes
 */
import Groups from "../pages/Groups";
import Login from "../pages/Login";
import Miembros from "../pages/Miembros";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {path: "/", element: <Navigate to="/login" replace={true}/>},
    {path: "/groups", element: <PrivateRoute><Groups/></PrivateRoute>},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},
    {path: "/miembros", element: <PrivateRoute><Miembros/></PrivateRoute>}
]);

export default router;
