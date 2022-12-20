import { REHYDRATE } from "redux-persist";
// import { successMessage } from "../selectors/selector";

const initialState = {
  auth: {
    email: "",
    idToken: "",
    isDashBoardPlan : [],
    userdata : {},
    servicePlan : []
  },
  signupDetails: {},
  errorMessage: "",
  loginToast: false,
  successMessage: "",
  loginUserData: {},
  loginStatus: false,
  userId: "",
  showLoading: false,
  isForgettingPassword: false,
  firstTimeLogin: false,
  resetPasswordEmail: "",
  termAndCondition: {},
  isVerfied: false,
  dashBordPlan: [],
  paymentInformation: "",
  // termAndCondition: {},
  // isVerfied: false,
  autodebit: false,
  // paymentInformation: "",
  purchaseDashBord: {},
  setPlanId: "",
  serviceId: "",
  isDashBordPurchase: false,
  isDashBordAutoDebit: false,
  isFristProfileUpdate: false,
  loading : false,
  sessionId: "",
  setInterval: "",
  plansData: [],
  painData:[],
  findOneUser : {},
  equipmentsList:[],
  paymentMethods : []
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "SignUp Successfully",
      };
    case "POPUP_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "SAVED",
      };
      case "PAINDETAIL_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "PAIN DETAILS SAVED",
      };
    case "UPDATE_USER":
      return {
        ...state,
        termAndCondition: action.payload.data,
        isVerfied: action.payload.isVerfied,
        isFristProfileUpdate: action.payload.isFristProfileUpdate,

        auth: {
          ...state.auth,
          userdata : action.payload.userdata,
          isExpiredDate: action.payload.isExpiredDate,
          isDashBordPurchase: action.payload.isDashBordPurchase,
          isPlanExpired: action.payload.isPlanExpired,
          isPlanPurchase: action.payload.isPlanPurchase,
        },
      };
    case "RESET_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "RESET password Successfully",
      };
    case "CHANGEPASSWORD_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Password Change Successfully",
      };
    case "FORGOT_CONFIRMED_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "OTP sent Successfully in your e-mail",
      };
    case "FORGOT_PASSWORD":
      return {
        ...state,
        resetPasswordEmail: action.payload.email,
      };

    case "LOGIN_USER":
      return {
        ...state,
        auth: action.payload,
      };

    case "LOGIN_SUCCESS_ACTION":
      return {
        ...state,
        successMessage: "Login Successfully",
        auth: action.payload,
      };

    case "CLEAR_MESSAGE":
      return {
        ...state,
        successMessage: "",
        errorMessage: "",
      };

    case "LOGIN_FAILED_ACTION":
    case "SIGNUP_FAILED_ACTION":
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: "",
      };

    case "LOGOUT_ACTION":
      return {
        ...state,
        errorMessage: "",
        successMessage: "Logout Successfully",
        auth: {
          email: "",
          idToken: "",
        },
        loginStatus: false,
        isVerfied: false,
        termAndCondition: {},
        painData:[]
      };

    case "SET_SIGNUP_DATA":
      return {
        ...state,
        signupDetails: action.payload,
      };

    case "SET_FIRST_TIME_LOGIN":
      return {
        ...state,
        firstTimeLogin: action.payload,
      };

    case "SET_LOGIN_DATA":
      return {
        ...state,
        loginUserData: action.payload,
      };

    case "SET_LOGIN_STATUS":
      return {
        ...state,
        loginStatus: action.payload,
      };

    case "SET_LOGIN_USER_ID": {
      return {
        ...state,
        userId: action.payload,
      };
    }

    case "LOADING_TOGGLE_ACTION": {
      return {
        ...state,
        showLoading: action.payload,
      };
    }

    case "SET_FORGET_PASSWORD_STATUS": {
      return {
        ...state,
        isForgettingPassword: action.payload,
      };
    }
    
    
    

    case "PAYMENT_CHECKOUT_SUCCESS": {
      return {
        ...state,
        paymentInformation: action.payload,
      };
    }

    case "DASHBORD_SUCCESS_ACTION": {
      return {
        ...state,
        dashBordPlan: action.payload,
      };
    }

    case "SET_AUTODEBIT": {
      return {
        ...state,
        autodebit: action.payload,
      };
    }

    case "PURCHASE_DASHBORD_PLAN_SUCCESS": {
      return {
        ...state,
        purchaseDashBord: action.payload,
      };
    }
    
    case "SET_PLAN_ID": {
      return {
        ...state,
        setPlanId: action.payload,
      };
    }

    case "SERVICE_ID": {
      return {
        ...state,
        serviceId: action.payload,
      };
    }

    case "IS_DASHBORD_PURCHASE": {
      return {
        ...state,
        isDashBordPurchase: action.payload,
      };
    }

    case "IS_DASHBORD_AUTO_DEBIT": {
      return {
        ...state,
        isDashBordAutoDebit: action.payload,
      };
    }

    case "SESSION_ID": {
      return {
        ...state,
        sessionId: action.payload,
      };
    }

    case "SET_INTERVAL": {
      return {
        ...state,
        setInterval: action.payload,
      };
    }

    case "GET_PLAN_SUCCESS_ACTION": {
      return {
        ...state,
        plansData: action.payload,
      };
    }
    case "GET_PAINLIST_ACTION": {
      return {
        ...state,
        
        loading : true
      };
    }
    case "GET_PAINLIST_SUCCESS_ACTION": {
      return {
        ...state,
        painData: action.payload,
        loading : false
      };
    }
    case "EQUIPMENT_LIST_SUCCESS": {
      return {
        ...state,
        equipmentsList: action.payload,
      };
    }
    case "FIND_ONE_USER_SUCCESS_ACTION" : {
      return {
        ...state,
        auth: {
          ...state.auth,
          userdata : action.payload
        },
        // findOneUser : action.payload,
        loading : false
      }
    }

    case "FIND_PAYMENT_METHOD_SUCCESS_ACTION": {
      return {
        ...state,
        paymentMethods: action.payload,
      };
    }
    case REHYDRATE:
      return {
        ...state,
        loginUserData:
          action.payload && action.payload.auth.loginUserData
            ? action.payload.auth.loginUserData
            : {},
        findOneUser:
          action.payload && action.payload.auth.findOneUser
            ? action.payload.auth.findOneUser
            : {},
        loginStatus:
          action.payload && action.payload.auth.loginStatus
            ? action.payload.auth.loginStatus
            : false,
        auth: action.payload && action.payload.auth.auth ? action.payload.auth.auth : {},
        signupDetails:
          action.payload && action.payload.auth.signupDetails
            ? action.payload.auth.signupDetails
            : {},
        errorMessage:
          action.payload && action.payload.auth.errorMessage
            ? action.payload.auth.errorMessage
            : "",
        successMessage:
          action.payload && action.payload.auth.successMessage
            ? action.payload.auth.successMessage
            : "",
        userId: action.payload && action.payload.auth.userId ? action.payload.auth.userId : "",
        showLoading:
          action.payload && action.payload.auth.showLoading
            ? action.payload.auth.showLoading
            : false,
        firstTimeLogin:
          action.payload && action.payload.auth.firstTimeLogin
            ? action.payload.auth.firstTimeLogin
            : false,
        isForgettingPassword:
          action.payload && action.payload.auth.isForgettingPassword
            ? action.payload.auth.isForgettingPassword
            : false,
        termAndCondition:
          action.payload && action.payload.auth.termAndCondition
            ? action.payload.auth.termAndCondition
            : {},
        isVerfied:
          action.payload && action.payload.auth.isVerfied ? action.payload.auth.isVerfied : false,
        setPlanId:
          action.payload && action.payload.auth.setPlanId ? action.payload.auth.setPlanId : "",
        serviceId:
          action.payload && action.payload.auth.serviceId ? action.payload.auth.serviceId : "",
        isDashBordPurchase:
          action.payload && action.payload.auth.isDashBordPurchase
            ? action.payload.auth.isDashBordPurchase
            : false,
        isDashBordAutoDebit:
          action.payload && action.payload.auth.isDashBordAutoDebit
            ? action.payload.auth.isDashBordAutoDebit
            : false,
        sessionId:
          action.payload && action.payload.auth.sessionId ? action.payload.auth.sessionId : "",
        setInterval:
          action.payload && action.payload.auth.setInterval ? action.payload.auth.setInterval : "",
        isFristProfileUpdate:
          action.payload && action.payload.auth.isFristProfileUpdate
            ? action.payload.auth.isFristProfileUpdate
            : false,
            painData:
          action.payload && action.payload.auth.painData
            ? action.payload.auth.painData
            : [],
            equipmentsList:
          action.payload && action.payload.auth.equipmentsList
            ? action.payload.auth.equipmentsList
            : [],
            paymentMethods:
          action.payload && action.payload.auth.paymentMethods
            ? action.payload.auth.paymentMethods
            : [],

      };
    case "PAYMENT_CHECKOUT_START": 
    case "PAYMENT_CHECKOUT_ERROR":
    default:
      return {
        ...state,
      };
  }
}
