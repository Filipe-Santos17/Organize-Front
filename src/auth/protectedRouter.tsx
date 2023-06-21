import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children } : { children: React.Component }) => {
  const tokenLogin = localStorage.getItem('Token')

  //validar token com useEffect

  if(tokenLogin !== null){
    return children
  } else {
    return <Navigate to="/login"/>; 
  }
};

export default ProtectedRouter;
