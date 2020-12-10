import Axios from "axios";
import qs from "qs";

import {history} from './../../App'

const TRANSFERREQUEST = () => {
  return {
    type: "TRANSFERREQUEST",
  };
};

const TRANSFERERROR = (error) => {
  return {
    type: "TRANSFERERROR",
    payload: error,
  };
};

const GETTRANSFER = (data) => {
  return {
    type: "GETTRANSFER",
    payload: data,
  };
};

const POSTTRANSFER = (data) => {
  return {
    type: "POSTTRANSFER",
    payload: data,
  };
};

export const TransferLogout = () => {
  return {
    type: "TRANSFERLOGOUT",
  };
};

export const GetTransfer = (fields) => {
  return (dispatch) => {
    dispatch(TRANSFERREQUEST());
    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/transfer`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(GETTRANSFER(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TRANSFERERROR(message));
      });
  };
};



export const PostTransfer = (fields) => {

  return (dispatch) => {
    dispatch(TRANSFERREQUEST());
    return Axios({
      method: "POST",
      data: qs.stringify({
        id_receiver: fields.id_receiver,
        amount: fields.amount,
        notes: fields.notes,
      }),
      url: `http://localhost:8000/api/v1/transfer`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data
        dispatch(POSTTRANSFER(data));
        history.push('/transfer/success');
        window .location.reload();
      })
      .catch((err) => {
        console.log(fields, "INI FIELDS");
        const message = err.message;
        dispatch(TRANSFERERROR(message));
      });
  };
};
