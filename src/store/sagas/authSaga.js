// import { decodeToken } from 'react-jwt';.

// import { errorToast, successToast, warningToaster } from "../../components/toastify";

// import { errorToast } from "components/Toaster/toast";
import { successToast } from "components/Toaster/toast";
import { put, takeLatest } from "redux-saga/effects";


import { axiosInstance } from "../../services/AxiosInstance";
import {
  Changepassword_confirmAction, confirmedForgotAction, confirmedPainDetailAction, confirmedPOPUPAction, confirmedResetAction, confirmedSignupAction, dashBordFailedAction, dashBordSuccessAction, findOneUserErrorAction, findOneUserSuccessAction, findPaymentMethodErrorAction, findPaymentMethodSuccessAction, getEquipmentListSuccess, getPainListSuccessAction, getPlanErrorAction,
  getPlanSuccessAction, loginFailedAction, loginSuccessAction, paymentCheckoutSuccess,
  purchaseDashBordPlanError,
  purchaseDashBordPlanSuccess, signupFailedAction, UpateUserAction
} from "../actions/actions";

// const TOKEN = useSelector((state) => state.auth.auth.idToken);

function* registerUserSaga({ payload }) {
  try {
    // const { data, history } = action.payload;

    const response = yield axiosInstance.post("auth/signup", payload);
    console.log("responce", response);
    if (response.status === 200 || response.status === 201) {
      // successToast("Registration successfully!!");
      yield put(confirmedSignupAction());
      // console.log("responce",response)
      // yield put(signupAction(payload));
      // yield put(setLoadingToggle(true));
      // yield put(setFirstTimeLogin(true));
      // yield call(loginUserSaga(data));
    }
  } catch (error) {
    // if (error.response.status === 400 || error.response.status === 401) {
    //   warningToaster(error.response.data.error.message);
    // } else {
    // errorToast(error.response.data.error.message);
    yield put(signupFailedAction(error.response.data.error.message));
    // }
  }
}
function* PopupUserSaga({ payload }) {
  const { data, id, token } = payload;
  try {
    const response = yield axiosInstance.put(`user/update-user/${id}`, data, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200 || response.status === 201) {
      console.log("responcess", response);
      yield put(confirmedPOPUPAction());
      const result = {
        disclaimers_flag: response.data.data.disclaimers_flag,
        indemnification_flag: response.data.data.indemnification_flag,
        cancellation_flag: response.data.data.cancellation_flag,
      };
      const userdata = response.data.data;
      const isVerfied = response.data.data.cancellation_flag;

      const isDashBordPurchase = response.data.data.hasOwnProperty("isDashBordPurchase")
        ? response.data.data.isDashBordPurchase
        : false;
      const isExpiredDate = response.data.data.hasOwnProperty("isExpiredDate")
        ? response.data.data.isExpiredDate
        : null;
      const isFristProfileUpdate = response.data.data.hasOwnProperty("isFristProfileUpdate")
        ? response.data.data.isFristProfileUpdate
        : false;

      const isPlanPurchase = response.data.data.hasOwnProperty("isPlanPurchase")
        ? response.data.data.isPlanPurchase
        : false;

      const isPlanExpired = response.data.data.hasOwnProperty("isPlanExpired")
        ? response.data.data.isPlanExpired
        : null;

      const isDashBoardPlan = response.data.data.hasOwnProperty("dashBoardPlan")
        ? response.data.data.dashBoardPlan
        : [];
      yield put(
        UpateUserAction({
          data: result,
          isVerfied,
          isFristProfileUpdate,
          isExpiredDate,
          isDashBordPurchase,
          isDashBoardPlan,
          isPlanPurchase,
          isPlanExpired,
          userdata,
        })
      );
    }
  } catch (error) {
    // yield put(signupFailedAction(error.response.data.error.message));
  }
}

function* loginUserSaga({ payload }) {
  try {
    // const { email, password } = action.payload;
    const response = yield axiosInstance.post("auth/login", payload);
    console.log("res..", response);
    if (response.status === 200) {
      console.log("responce", response);
      const result = {
        email: response.data.data.user.email,
        // userdata: response.data.data.user,
        idToken: response.data.data.token,
        name: response.data.data.user.name,
        _id: response.data.data.user._id,
        userType: response.data.data.user.userType,
        customerId: response.data.data.user.customerId,
        isDashBoardPlan: response.data.data.user.hasOwnProperty("dashBoardPlan")
          ? response.data.data.user.dashBoardPlan
          : [],
      };
      const userdata = response.data.data.user;
      const termAndCondition = {
        disclaimers_flag: response.data.data.user.disclaimers_flag,
        indemnification_flag: response.data.data.user.indemnification_flag,
        cancellation_flag: response.data.data.user.cancellation_flag,
      };

      const isVerfied = response.data.data.user.cancellation_flag;
      const isFristProfileUpdate = response.data.data.user.hasOwnProperty("isFristProfileUpdate")
        ? response.data.data.user.isFristProfileUpdate
        : false;
      const isDashBordPurchase = response.data.data.user.hasOwnProperty("isDashBordPurchase")
        ? response.data.data.user.isDashBordPurchase
        : false;
      const isExpiredDate = response.data.data.user.hasOwnProperty("isExpiredDate")
        ? response.data.data.user.isExpiredDate
        : null;

      const isPlanPurchase = response.data.data.user.hasOwnProperty("isPlanPurchase")
        ? response.data.data.isPlanPurchase
        : false;

      const isPlanExpired = response.data.data.user.hasOwnProperty("isPlanExpired")
        ? response.data.data.isPlanExpired
        : null;

      yield put(loginSuccessAction(result));
      yield put(
        UpateUserAction({
          data: termAndCondition,
          isVerfied,
          isFristProfileUpdate,
          isDashBordPurchase,
          isExpiredDate,
          isPlanPurchase,
          isPlanExpired,
          userdata,
        })
      );
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
    // if (error.response.status === 400 || error.response.status === 401) {
    //   warningToaster(error.response.data.error.message);
    // } else {
    // }
  }
}

function* forgotPasswordSaga({ payload }) {
  try {
    // const { email, history } = action.payload;
    const response = yield axiosInstance.post("auth/forgot-password", payload);
    if (response.status === 200 || response.status === 201) {
      console.log("responce", response);

      yield put(confirmedForgotAction());
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* PainDetailSaga({ payload }) {
  try {
    // const { email, history } = action.payload;
    const response = yield axiosInstance.post("pain/user-painDetail", payload);
    if (response.status === 200 || response.status === 201) {
      console.log("responce", response);

      yield put(confirmedPainDetailAction());
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* resendOTPSaga(action) {
  try {
    const { email } = action.payload;
    const response = yield axiosInstance.post("auth/forgot-password", {
      email,
    });
    if (response.status === 200 || response.status === 201) {
      successToast("OTP sent to your registered email");
    }
  } catch (error) {
    // if (e.response.status === 400 || e.response.status === 401) {
    //   warningToaster(e.response.data.error.message);
    //   yield put(setForgetPasswordStatus(false));
    // } else {
    yield put(loginFailedAction(error.response.data.error.message));
    //   yield put(setForgetPasswordStatus(false));
    // }
  }
}

function* resetPasswordSaga({ payload }) {
  console.log("running", payload);
  try {
    // const { email, password, otp, history } = action.payload;
    const response = yield axiosInstance.post("auth/reset-password", payload);
    console.log("reset_password", response);
    if (response.data.code === 200) {
      console.log("succes");
      yield put(confirmedResetAction());
      // history.push("/login");
    }
  } catch (error) {
    yield put(loginFailedAction(error.response.data.error.message));
    // if (e.response.status === 400 || e.response.status === 401) {
    // 	warningToaster(e.response.data.error.message);
    // } else {
    // 	errorToast(e.response.data.error.message);
    // }
  }
}

function* changePasswordSaga({ payload }) {
  const body = {
    oldpassword: payload.oldpassword,
    newpassword: payload.newpassword,
  };
  const token = payload.token;
  console.log(body, token);
  try {
    const response = yield axiosInstance.put("auth/change-password", body, {
      headers: {
        authorization: token,
      },
    });

    console.log("change_password", response);
    if (response.status === 200) {
      yield put(Changepassword_confirmAction());
    }
  } catch (error) {
    // if (e.response.status === 400 || e.response.status === 401) {
    //   warningToaster(e.response.data.error.message);
    // } else {
    //   errorToast(e.response.data.error.message);
    // }
    yield put(loginFailedAction(error.response.data.error.message));
  }
}

function* getDashBordPlan({ payload }) {
  try {
    const response = yield axiosInstance.get(`plan/getPlan?planType=dashbord&userType=${payload}`);

    console.log("res...", response.data.data.result);
    if (response.status === 200) {
      yield put(dashBordSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(dashBordFailedAction(error.response.data.error.message));
  }
}

function* paymentCheckoutSaga({ payload }) {
  console.log("payload checkout...", payload);
  try {
    // console.log(payload)
    const response = yield axiosInstance.post("stripe/purchase-service", payload);
    console.log("response...", response);

    if (response.status === 200) {
      yield put(paymentCheckoutSuccess(response.data.data.id));
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* purchaseDashBordSaga({ payload }) {
  // delete payload['id']
  const { id, data } = payload;
  console.log("payload checkout...", payload.id);

  try {
    // console.log(payload)
    const response = yield axiosInstance.post(`stripe/retriveSession?sessionId=${id}`, data);
    console.log("response...", response.data.data);

    if (response.status === 200) {
      yield put(purchaseDashBordPlanSuccess(response.data.data.id));
    }
  } catch (error) {
    yield put(purchaseDashBordPlanError(error.response.data.error.message));
  }
}

function* getPlans({ payload }) {
  // console.log("hello Paylod", payload);
  try {
    const response = yield axiosInstance.get(`plan/getPlan?userType=${payload}`);

    console.log("res...", response.data.data.result);
    if (response.status === 200) {
      yield put(getPlanSuccessAction(response.data.data.result));
    }
  } catch (error) {
    yield put(getPlanErrorAction(error.response.data.error.message));
  }
}
function* getPainList({ payload }) {
  const token = payload.token;
  console.log("token", token);
  try {
    const response = yield axiosInstance.get(`pain/user-painDetail-list`, {
      headers: {
        authorization: token,
      },
    });

    
    if (response.status === 200) {
      const filterrows = response.data.data.map((data) => {
        let list = data.pains;
        let listarr = list[0];
        listarr = { ...listarr, _id: data._id };
        return listarr;
      });

      yield put(getPainListSuccessAction(_.flatten(filterrows)));
    }
  } catch (error) {
    // yield put(getPainListAction(error.response.data.error.message));
  }
}

function* findOneUserDetails({payload}){
  try {
    const {userId,token} = payload
    const response = yield axiosInstance.get(`user/findone-user/${userId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      yield put(findOneUserSuccessAction(response?.data?.data))
      // yield put(getPlanSuccessAction(response?.data?.data))
      // yield put(UpateUserAction({userdata : response?.data?.data}))
    }
  } catch (error) {
      yield put(findOneUserErrorAction(error))
  }
}
function* EquipmentGetSaga({ payload }) {

  try {
    // console.log(payload)
    const response = yield axiosInstance.post("equipment/getEquipmentList", payload);
    console.log("response...", response);

    if (response.status === 200) {
      yield put(getEquipmentListSuccess(response.data.data.result.list));
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* getPaymentsMethods({ payload }) {
  console.log("payload",payload);
  const {token} = payload
  try {
    // console.log(payload)
    const response = yield axiosInstance.get("stripe/payment-methods", {
      headers: {
        authorization: token,
      },
    });
    console.log("response...", response.data.data.data);

    if (response.status === 200) {
      yield put(findPaymentMethodSuccessAction(response.data.data.data));
    }
  } catch (error) {
    yield put(findPaymentMethodErrorAction(error))
  }
}
function* authSaga() {
  yield takeLatest("REGISTER_USER", registerUserSaga);
  yield takeLatest("LOGIN_USER", loginUserSaga);
  yield takeLatest("FORGOT_PASSWORD", forgotPasswordSaga);
  yield takeLatest("RESET_PASSWORD", resetPasswordSaga);
  yield takeLatest("CHANGE_PASSWORD", changePasswordSaga);
  yield takeLatest("RESEND_OTP", resendOTPSaga);
  yield takeLatest("POPUP_USERDATA", PopupUserSaga);
  yield takeLatest("DASHBORD_PLAN", getDashBordPlan);
  yield takeLatest("PAINDETAIL", PainDetailSaga);

  yield takeLatest("PAYMENT_CHECKOUT_START", paymentCheckoutSaga);
  yield takeLatest("PURCHASE_DASHBORD_PLAN", purchaseDashBordSaga);
  yield takeLatest("GET_PAINLIST_ACTION", getPainList);
  yield takeLatest("EQUIPMENT_LIST", EquipmentGetSaga);

  yield takeLatest("GET_PLAN_ACTION", getPlans);
  yield takeLatest("FIND_ONE_USER_ACTION", findOneUserDetails); 
  yield takeLatest("FIND_PAYMENT_METHOD_ACTION", getPaymentsMethods); 

}

export default authSaga;
