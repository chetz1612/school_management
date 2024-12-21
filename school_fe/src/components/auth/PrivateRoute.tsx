import { Navigate } from "react-router"


const PrivateRoute = ({children}) => {
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute