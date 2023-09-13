import Axios from "axios";
import jwt from "jsonwebtoken";

const TopupRequest = () => {
  return {
    type: "TOPUP_REQUEST",
  };
};

const TopupSuccess = (data) => {
  return {
    type: "TOPUP_SUCCESS",
    payload: data,
  };
};

const TopupError = (error) => {
  return {
    type: "TOPUP_ERROR",
    payload: error,
  };
};

export const GetTopup = (fields) => {
  let myId = "";

  let token = fields.token;
  let salt = "ARKADMY";

  jwt.verify(token, salt, (err, decode) => {
    if (!err) {
      myId = decode.id;
    } else {
      console.log(err);
    }
  });

  return (dispatch) => {
    dispatch(TopupRequest());
    return Axios({
      method: "GET",
      url: `http://103.123.63.223:8000/api/v1/topup`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(TopupSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(TopupError(message));
      });
  };
};
