import useAuth from '../../hooks/customHook';
import { Route,
    Redirect
  } from "react-router-dom";


function PrivateRoute ({ children, ...rest }){
 console.log('children ', children);
    let auth = useAuth();
    console.log('auth' ,auth);

  return (
    <Route
      component={({ location }) =>
        auth ? (
           children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );

}

export default PrivateRoute;