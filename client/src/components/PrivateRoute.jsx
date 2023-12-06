import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      element={AuthContext ? <Element /> : <Navigate to="/login" />}
    />
  );
};
// PrivateRoute.propTypes = {
//   element: PropTypes.elementType.isRequired,
// };

export default PrivateRoute;
