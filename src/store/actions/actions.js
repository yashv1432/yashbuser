export function signupAction(userdata) {

	return {
		type: 'REGISTER_USER',
		payload: userdata,
	};
}
export function popupAction(userdata) {

	return {
		type: 'POPUP_USERDATA',
		payload: userdata,
	};
}
export function UpateUserAction(userdata) {

	return {
		type: 'UPDATE_USER',
		payload: userdata,
	};
}
export function logout() {
	('/authentication/sign-in');
	return {
		type: 'LOGOUT_ACTION',
	};
}

export function loginToast(data) {
	return {
		type: "LOGIN_CONFIRMED_ACTION",
		payload: data
	}
}

export function loginSuccessAction(data) {
	return {
		type: "LOGIN_SUCCESS_ACTION",
		payload: data
	}
}

export function clearMessage() {
	return {
		type: "CLEAR_MESSAGE",
	}
}

export function loginFailedAction(msg) {
	return {
		type: "LOGIN_FAILED_ACTION",
		payload: msg
	}
}

export function loginAction(data) {
	return {
		type: 'LOGIN_USER',
		payload: data,
	};
}
export function changesPasswordAction(data) {
	return {
		type: 'CHANGE_PASSWORD',
		payload: data,
	};
}

export function reset_passwordAction(data) {
	return {
		type: 'RESET_PASSWORD',
		payload: data,
	};
}
export function PainDetail_Action(data) {
	return {
		type: 'PAINDETAIL',
		payload: data,
	};
}
export function forgot_password_action(data) {
	return {
		type: 'FORGOT_PASSWORD',
		payload: data,
	};
}

export function loginStatus(value) {
	return {
		type: 'SET_LOGIN_STATUS',
		payload: value,
	};
}

export function loginConfirmedAction(data) {
	return {
		type: 'LOGIN_DATA',
		payload: data,
	};
}

export function setLoginDetails(data) {
	return {
		type: 'SET_LOGIN_DATA',
		payload: data,
	};
}


export function confirmedSignupAction() {
	return {
		type: 'SIGNUP_CONFIRMED_ACTION'
	};
}
export function confirmedPOPUPAction() {
	return {
		type: 'POPUP_CONFIRMED_ACTION'
	};
}
export function confirmedResetAction() {
	return {
		type: 'RESET_CONFIRMED_ACTION'
	};
}
export function confirmedForgotAction() {
	return {
		type: 'FORGOT_CONFIRMED_ACTION'
	};
}
export function confirmedPainDetailAction() {
	return {
		type: 'PAINDETAIL_CONFIRMED_ACTION'
	};
}
export function Changepassword_confirmAction() {
	return {
		type: 'CHANGEPASSWORD_CONFIRMED_ACTION'
	};
}
export function signupFailedAction(message) {
	return {
		type: 'SIGNUP_FAILED_ACTION',
		payload: message,
	};
}

export function setSignupData(value) {
	return {
		type: 'SET_SIGNUP_DATA',
		payload: value,
	};
}

export function setLoginUserId(value) {
	return {
		type: 'SET_LOGIN_USER_ID',
		payload: value,
	};
}

export function setLoadingToggle(value) {
	return {
		type: 'LOADING_TOGGLE_ACTION',
		payload: value,
	};
}

export function setFirstTimeLogin(value) {
	return {
		type: 'SET_FIRST_TIME_LOGIN',
		payload: value,
	};
}

export function setForgetPasswordStatus(value) {
	return {
		type: 'SET_FORGET_PASSWORD_STATUS',
		payload: value,
	};
}

export function dashBordPlanAction(payload) {
	console.log("data...", payload);
	return {
		type: 'DASHBORD_PLAN',
		payload: payload,
	};
}

export function dashBordSuccessAction(data) {
	return {
		type: "DASHBORD_SUCCESS_ACTION",
		payload: data
	}
}

export function dashBordFailedAction(msg) {
	return {
		type: "DASHBORD_FAILED_ACTION",
		payload: msg
	}
}


export function setAutoDebitAction(payload) {
	console.log("data...", payload);
	return {
		type: 'SET_AUTODEBIT',
		payload: payload,
	};
}

export function paymentCheckout(value) {
	console.log("value...", value);
	return {
		type: 'PAYMENT_CHECKOUT_START',
		payload: value,
	};
}

export function paymentCheckoutSuccess(value) {
	return {
		type: 'PAYMENT_CHECKOUT_SUCCESS',
		payload: value,
	};
}

export function paymentCheckoutError(value) {
	return {
		type: 'PAYMENT_CHECKOUT_ERROR',
		payload: value,
	};
}

export function purchaseDashBordPlan(data) {
	console.log("value...", data);
	return {
		type: 'PURCHASE_DASHBORD_PLAN',
		payload: data,
	};
}

export function purchaseDashBordPlanSuccess(data) {
	return {
		type: 'PURCHASE_DASHBORD_PLAN_SUCCESS',
		payload: data,
	};
}

export function purchaseDashBordPlanError(err) {
	return {
		type: 'PURCHASE_DASHBORD_PLAN_ERROR',
		payload: err,
	};
}

export function planIdAction(payload) {
	console.log("data...", payload);
	return {
		type: 'SET_PLAN_ID',
		payload: payload,
	};
}

export function serviceIdAction(payload) {
	console.log("data...", payload);
	return {
		type: 'SERVICE_ID',
		payload: payload,
	};
}

export function isDashBordPurchaseAction(payload) {
	console.log("data...", payload);
	return {
		type: 'IS_DASHBORD_PURCHASE',
		payload: payload,
	};
}

export function isDashBordAotoDebitAction(payload) {
	console.log("data...", payload);
	return {
		type: 'IS_DASHBORD_AUTO_DEBIT',
		payload: payload,
	};
}

export function sessionIdAction(payload) {
	console.log("data...", payload);
	return {
		type: 'SESSION_ID',
		payload: payload,
	};
}

export function intervalAction(payload) {
	console.log("data...", payload);
	return {
		type: 'SET_INTERVAL',
		payload: payload,
	};
}



export function getPlanAction(payload) {
	console.log("data...hello", payload);
	return {
		type: 'GET_PLAN_ACTION',
		payload: payload,
	};
}
export function getPainListAction(data) {
	return {
		type: "GET_PAINLIST_ACTION",
		payload: data
	}
}
export function getPainListSuccessAction(data) {
	return {
		type: "GET_PAINLIST_SUCCESS_ACTION",
		payload: data
	}
}
export function getPlanSuccessAction(data) {
	return {
		type: "GET_PLAN_SUCCESS_ACTION",
		payload: data
	}
}

export function getPlanErrorAction(msg) {
	return {
		type: "GET_PLAN_FAILED_ACTION",
		payload: msg
	}
}
export function getEquipmentListAction(payload) {
	return {
		type: 'EQUIPMENT_LIST',
		payload: payload,
	};
}
export function getEquipmentListSuccess(payload) {
	return {
		type: 'EQUIPMENT_LIST_SUCCESS',
		payload: payload,
	};
}
export function getEquipmentListError(payload) {
	return {
		type: 'EQUIPMENT_LIST_ERROR',
		payload: payload,
	};
}
export function findOneUserAction(data){
	return {
		type : "FIND_ONE_USER_ACTION",
		payload : data
	}
}

export function findOneUserSuccessAction(data){
	return {
		type : "FIND_ONE_USER_SUCCESS_ACTION",
		payload : data
	}
}

export function findOneUserErrorAction(data){
	return {
		type : "FIND_ONE_USER_ERROR_ACTION",
		payload : data
	}
}

export function findPaymentMethodAction(data){
	console.log("action..",data);
	return {
		type : "FIND_PAYMENT_METHOD_ACTION",
		payload : data
	}
}

export function findPaymentMethodSuccessAction(data){
	return {
		type : "FIND_PAYMENT_METHOD_SUCCESS_ACTION",
		payload : data
	}
}

export function findPaymentMethodErrorAction(data){
	return {
		type : "FIND_PAYMENT_METHOD_ERROR_ACTION",
		payload : data
	}
}