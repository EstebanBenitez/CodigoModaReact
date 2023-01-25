import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';


export {PrivateRoute};

function PrivateRoute({children}) {
    const location = useLocation();
    const {isAuthenticated, user} = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }
    if (!user.group && location.pathname !== "/groups") {
        return <Navigate to="/groups"/>;
    }
    return children;
}
