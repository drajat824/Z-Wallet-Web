import Axios from "axios";
import { useHistory } from "react-router-dom";
import qs from "qs";

//Login

const AuthLoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const AuthLoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

//Register

const AuthRegisterRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};

const AuthRegisterSuccess = (data) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: data,
  };
};

const AuthRegisterError = (error) => {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
};

//Logout

export const AuthLogout = () => {
  return {
    type: "LOGOUT",
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    return Axios({
      method: "post",
      data: qs.stringify({
        email: fields.email,
        password: fields.password,
      }),
      url: `http://103.123.63.223:8000/api/v1/login`,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(AuthLoginSuccess(data.data));
      })
      .catch((err) => {
        alert("Email/ Password Invalid");
        const message = err.message;
        dispatch(AuthLoginError(message));
        window .location.reload();
      });
  };
};

export const AuthRegister = (fields) => {
  return (dispatch) => {
    return Axios({
      method: "POST",
      url: `http://103.123.63.223:8000/api/v1/register`,
      data: qs.stringify({
        name: fields.name,
        email: fields.email,
        password: fields.password,
        pin: fields.pin,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((res) => {
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      })
      .catch((err) => {
        alert("Sorry, Register Invalid");
        const message = err.message;
        dispatch(AuthRegisterError(message));
      });
  };
};
