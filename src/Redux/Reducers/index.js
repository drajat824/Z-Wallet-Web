import { combineReducers } from "redux";
import Auth from "./Auth";
import Users from "./Users";
import Topup from "./Topup";
import Transfer from "./Transfer";

const reducers = combineReducers({
  Auth,
  Users,
  Topup,
  Transfer,
});

export default reducers;
