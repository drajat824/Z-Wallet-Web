import Axios from "axios";
import jwt from "jsonwebtoken";
import qs from "qs";

const PROFILEREQUEST = () => {
  return {
    type: "PROFILEREQUEST",
  };
};

const PROFILEERROR = (error) => {
  return {
    type: "PROFILEERROR",
    payload: error,
  };
};

const GETPROFILE = (data) => {
  return {
    type: "GETPROFILE",
    payload: data,
  };
};

const GETPROFILETRANSFER = (data) => {
  return {
    type: "GETPROFILETRANSFER",
    payload: data,
  };
};

const SETPHOTO = (data) => {
  return {
    type: "SETPHOTO",
    payload: data,
  };
};

const GETPROFILENAME = (data) => {
  return {
    type: "GETPROFILENAME",
    payload: data,
  };
};

const PATCHPROFILE = (data) => {
  return {
    type: "PATCHPROFILE",
    payload: data,
  };
};

export const ProfileLogout = () => {
  return {
    type: "PROFILELOGOUT",
  };
};

export const GetProfile = (fields) => {
  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/profile/detail`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const myData = res.data;
        dispatch(GETPROFILE(myData));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
      });
  };
};

export const GetProfileName = (fields) => {
  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1//profile/search?name=${fields.name}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data.data;
        dispatch(GETPROFILENAME(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
      });
  };
};

export const GetProfileId = (fields) => {
  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/profile/id/${fields.id}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const myData = res.data;
        dispatch(GETPROFILE(myData));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(PROFILEERROR(message));
      });
  };
};

export const GetProfileTransfer = (fields) => {
  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    return Axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/profile/id/${fields.id}`,
      headers: {
        auth: fields.token,
      },
    })
      .then((res) => {
        const dataTr = res.data;
        dispatch(GETPROFILETRANSFER(dataTr));
      })
      .catch((err) => {
        dispatch(PROFILEERROR(err.message));
      });
  };
};

export const PatchProfile = (fields) => {

  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    return Axios({
      method: "PATCH",
      url: `http://localhost:8000/api/v1/profile`,
      data: qs.stringify({
        password: fields.password,
        pin: fields.pin,
      }),
      headers: {
        auth: fields.token,
      },
    })
      .then((result) => {
        alert("Change data success");
        localStorage.removeItem('persist:root')
        window .location.reload();
      })
      .catch((err) => {
        alert("Change data failed");
      });
  };
};

export const setImage = (fields) => {
  return (dispatch) => {
    dispatch(PROFILEREQUEST());

    Axios.patch("http://localhost:8000/api/v1/upload", fields.data, {
      headers: {
        "content-type": "multipart/form-data",
        auth: fields.token,
      },
    })
      .then((res) => {
        const data = res.data;
        dispatch(SETPHOTO(data));
        alert("Success");
        window.location.reload();
      })
      .catch((err) => {
        dispatch(PROFILEERROR(err.message));
        alert("Failed");
        window.location.reload();
      });
  };
};
