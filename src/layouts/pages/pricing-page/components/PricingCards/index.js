import PropTypes from "prop-types";
// @mui material components
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import { useEffect } from "react";
// Soft UI Dashboard PRO React example components
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
// import PopUpDilogBox from "layouts/pages/popup/PopUpDilogBox";
import { Button, Chip } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findOneUserAction, paymentCheckout, planIdAction, popupAction, serviceIdAction, sessionIdAction } from "store/actions/actions";
const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);
function PricingCards({ prices, plans }) {
  let path = window.location.href;
  let splitPath = path.split("/");
  const id = splitPath[4].split("=");
  console.log("IDDDD", id[1]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const userId = useSelector((state) => state.auth.auth._id);
  const planId = useSelector((state) => state.auth.setPlanId);
  const serviceId = useSelector((state) => state.auth.serviceId);
  const sessionId = useSelector((state) => state.auth.sessionId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const servicePlan = useSelector((state) => state.auth.auth.userdata?.servicePlan);
  const userData = useSelector((state) => state.auth.auth.userdata);

  const fetchPayment = async () => {
    // const sessionId = response.data.data.id;
    // console.log(sessionId);
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: paymentId,
    });
    if (result.error) {
      // errorToaster(result.error.message);
      console.log(result.error);
    }
  };
  useEffect(() => {
    if (paymentId !== "") {
      return fetchPayment();
    }
  }, [paymentId]);
  useEffect(() => {
    let path = window.location.href;
    let splitPath = path.split("/");
    const id = splitPath[4].split("=");
    console.log("IDDDD", id);
    if (id[1]) {
      dispatch(sessionIdAction(id[1]));
      console.log("id..", id[1]);

      var index = servicePlan?.findIndex((x) => x == planId);
      index === -1 ? servicePlan?.push(planId) : [];
      console.log("servicePlan...", servicePlan);
      setTimeout(() => {
        dispatch(
          popupAction({
            data: {
              // isPlanPurchase: true,
              servicePlan: servicePlan,
            },
            id: userId,
            token: token,
          })
        );
      }, 1000);
      navigate("/services");
    }
  }, []);
  useEffect(() => {
    dispatch(findOneUserAction({userId,token}))
  },[])
  const planDetails = () => {
    // let isExpiredDate = moment().add(1, "month").format("YYYY-MM-DDThh:mm:ssn");
    // console.log("SessionIDdd---", sessionId)
    if (sessionId) {
      try {
        // dispatch(
        //   purchaseDashBordPlan({
        //     id: sessionId,
        //     data: {
        //       type: "plan",
        //       planId: planId,
        //       userId: userId,
        //       serviceId: serviceId,
        //     },
        //   })
        // );
        // navigate("/services");
      } catch (error) {
        console.log("err..", error);
      }
    }
  };
  let localSuccess = "http://localhost:3000/#/services";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancle";

  let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/services";
  let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";
  return (
    <>
      {plans &&
        plans.length > 0 &&
        plans.map((elem, index) => {
          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",

                  flexDirection: "column",
                  gap: 20,
                }}
                key={index}
              >
                <h4>
                  {elem.serviceName}
                  {elem?.walletName === "Video_Messaging_and_Photo_Therapy_Balance"
                    ? <Chip style={{marginLeft : 10}}
                      // disabled={elem?.remainingBalance ? false : true}
                      label={`Remaining Balance 
                          ${
                            userData?.Video_Messaging_and_Photo_Therapy_Balance
                              ? userData?.Video_Messaging_and_Photo_Therapy_Balance
                              : 0
                          }`}
                      color={ userData?.Video_Messaging_and_Photo_Therapy_Balance ? "primary" : "default"}
                      variant="outlined"
                    /> 
                    : 
                    elem?.walletName === "live_Video_Online_Exercise_Therapy_Balance" 
                    ? <Chip style={{marginLeft : 10}}
                    // disabled={elem?.remainingBalance ? false : true}
                    label={`Remaining Balance 
                        ${
                          userData?.live_Video_Online_Exercise_Therapy_Balance
                            ? userData?.live_Video_Online_Exercise_Therapy_Balance
                            : 0
                        }`}
                    color={ userData?.live_Video_Online_Exercise_Therapy_Balance ? "primary" : "default"}
                    variant="outlined"
                  /> 
                  :  
                  elem?.walletName === "live_In_Person_and_Travel_Exercise_Therapy_Balance" 
                  ? <Chip style={{marginLeft : 10}}
                  // disabled={elem?.remainingBalance ? false : true}
                  label={`Remaining Balance 
                      ${
                        userData?.live_In_Person_and_Travel_Exercise_Therapy_Balance
                          ? userData?.live_In_Person_and_Travel_Exercise_Therapy_Balance
                          : 0
                      }`}
                  color={ userData?.live_In_Person_and_Travel_Exercise_Therapy_Balance ? "primary" : "default"}
                  variant="outlined"
                /> 
                : ""
                  }
                </h4>
                <div
                  style={{
                    width: "100%",
                    // height:"100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    gap: 5,
                  }}
                >
                  {elem.Plan &&
                    elem.Plan.length > 0 &&
                    elem.Plan.map((item, index) => {
                      return (
                        <div
                          style={{
                            width: 220,
                            // height:"300px",
                            display: "inline-block",
                          }}
                          key={index}
                        >
                          <DefaultPricingCard
                            badge={{
                              color: "secondary",
                              label: item.packageType ? item.packageType : "Starter",
                            }}
                            price={{ currency: "$", value: item.amount }}
                            // name={{ value: item.name }}
                            specifications={[
                              { label: item.name, includes: true },
                              // { label: "20GB Cloud storage", includes: true },
                              // { label: "Integration help", includes: false },
                              // { label: "Sketch Files", includes: false },
                              // { label: "API Access", includes: false },
                              // { label: "Complete documentation", includes: false },
                            ]}
                            action={{
                              type: "internal",
                              route: "",
                              color: "dark",
                              label: (
                                <Button
                                  onClick={() => {
                                    // setOpenModel((data) => !data)
                                    dispatch(planIdAction(item._id));
                                    dispatch(serviceIdAction(item.serviceId));
                                    dispatch(
                                      paymentCheckout({
                                        customerId,
                                        priceId: item.oneTimePriceId,
                                        successURL: localSuccess,
                                        cancelURL: localCancel,
                                        qty: 1,
                                      })
                                    );
                                  }}
                                >
                                  Purchase
                                </Button>
                              ),
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <br />
            </>
          );
        })}
        <SoftBox ml={3}>
      <SoftButton color="info" onClick={() => planDetails()}>Check</SoftButton>
      </SoftBox>
    </>
  );
}
// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
  plans: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PricingCards;
