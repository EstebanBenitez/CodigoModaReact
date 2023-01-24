import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



export { PrivateRoute };

function PrivateRoute({ children }) {

  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />
  }

  // authorized so return child components
  return children;
}