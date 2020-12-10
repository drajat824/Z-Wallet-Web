import React from "react";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Dashboard,
  Transfer,
  Topup,
  TransferInput,
  TransferConfirmation,
  TransferSuccess,
  Profile,
  ProfilePersonal,
  ProfilePassword,
  ProfileAddPhone,
  Pin,
  DashboardHistory,
  Login,
  Admin,
  Register,
  Landing,
  Forgot,
  RegisterPin,
  RegisterSuccess
} from "./pages.js";
import PrivateRoute from "./Components/Route/PrivateRoute";
import PublicRoute from "./Components/Route/PublicRoute";

import configureStore from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory'

document.body.style = "background: rgba(250, 252, 255, 1);";
export const history = createBrowserHistory()

const Routes = () => {
  return (
    <>
    <div style={{height: '100%'}}>
      <Router  history={history}>
        <Switch >
          <PrivateRoute exact path="/" component={Dashboard} exact />
          <PrivateRoute path="/history" component={DashboardHistory} />
          <PrivateRoute exact path="/transfer" component={Transfer} exact />
          <PrivateRoute path="/transfer/input" component={TransferInput} />
          <PrivateRoute path="/transfer/confirmation" component={TransferConfirmation} />
          <PrivateRoute path="/transfer/success" component={TransferSuccess} />
          <PrivateRoute path="/topup" component={Topup} />
          <PrivateRoute exact path="/profile" component={Profile} exact />
          <PrivateRoute path="/profile/personal" component={ProfilePersonal} />
          <PrivateRoute path="/profile/password" component={ProfilePassword} />
          <PrivateRoute path="/profile/phone" component={ProfileAddPhone} />
          <PrivateRoute path="/profile/pin" component={Pin} />
          <PrivateRoute path="/admin" component={Admin} />
          
          <PublicRoute
            path="/register"
            restricted={true}
            component={Register}
            exact
          />
          <PublicRoute
            path="/register/pin"
            restricted={true}
            component={RegisterPin}
          />
          <PublicRoute
            path="/register/success"
            restricted={true}
            component={RegisterSuccess}
          />
          <PublicRoute
            exact
            path="/login"
            restricted={true}
            component={Login}
            exact
          />
          <PublicRoute
            path="/login/forgot"
            restricted={true}
            component={Forgot}
          />
          <PublicRoute path="/landing" restricted={true} component={Landing} />
        </Switch>
        <Footer />
      </Router>
      </div>
    </>
  );
};

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
