import { Button, Grid } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import SoftBox from "components/SoftBox";

import SoftSnackbar from "components/SoftSnackbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import moment from 'moment';
import pageRoutes from "page.routes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMessage, dashBordPlanAction, intervalAction, paymentCheckout, planIdAction, popupAction, serviceIdAction, sessionIdAction } from "store/actions/actions";
import LoadingPage from '../../../../../common/LoadingPage';
import DefaultPricingCard from "./DefaultPricingCard";
const payment_Key = "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);
import './style.css'
const Dashbordplan = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.auth.userType);
  useEffect(() => {
    dispatch(dashBordPlanAction(userType));
  }, []);

  const Navigate = useNavigate();

  const dashBordPlans = useSelector((state) => state.auth.dashBordPlan);
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const userId = useSelector((state) => state.auth.auth._id);
  const planId = useSelector((state) => state.auth.setPlanId);
  const serviceId = useSelector((state) => state.auth.serviceId);
  const sessionId = useSelector((state) => state.auth.sessionId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const setInterval = useSelector((state) => state.auth.setInterval);
  const isDashBoardPlan = useSelector((state) => state.auth.auth.isDashBoardPlan);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const [loader,setLoader] = useState(false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  useEffect(() => {
    const loadSessionUrl = async () => {
      if (paymentId !== "") {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          sessionId: paymentId,
        });
        if (result.error) {
          console.log(result.error);
        }
      }
    }
    loadSessionUrl();

  }, [paymentId]);

  useEffect(() => {
    const storeSession = async () => {
      let isExpiredDate = moment().add(1, setInterval).format("YYYY-MM-DDThh:mm:ssn");
      let path = window.location.href;
      let splitPath = path.split("/");
      const id = splitPath[4].split("=");
      if (id[1]) {
        dispatch(sessionIdAction(id[1]));
        setLoader(true)
        var index = isDashBoardPlan.findIndex(x => x == planId);
        index === -1 ? isDashBoardPlan.push(planId) : [];

        dispatch(
          popupAction({
            data: {
              isDashBordPurchase: true,
              isDashBordAutoDebit: autoDebitValue,
              isExpiredDate: isExpiredDate,
              dashBoardPlan: isDashBoardPlan
            },
            id: userId,
            token: token,
          })
        );
        setTimeout(() => {
          Navigate('/welcome');
        }, 1000)
        // setLoader(false)
      }
    }
    storeSession();

  }, []);

  let localSuccess = "http://localhost:3000/#/dashbordplan";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancle";

  let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashbordplan";
  let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";
  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
        }}
      />
      <SoftBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
        <h2 className="dashbordPlan">Dashbord Plans</h2>
        <div style={{ textAlign: "center"}}>
          {loader ? <LoadingPage /> : ""}
          {/* <LoadingPage /> */}
        </div>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {dashBordPlans && dashBordPlans.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>No Data Found</h3>
          ) : (
            dashBordPlans.map((el, i) => (
              <>
                <h5 style={{ textAlign: "center", color: "black" }}>{el.serviceName}</h5>
                <Grid container justifyContent="center">
                  <>
                    {el.Plan.map((data, index) => (
                      <Grid item xs={10} lg={4} md={8} key={i} p={2}>
                        <DefaultPricingCard
                          badge={{
                            color: "secondary",
                            label: data.packageType ? data.packageType : "starter",
                          }}
                          price={{ currency: "$", value: data.amount }}
                          specifications={[{ label: data.name, includes: true, autodebit: false }]}
                          action={{
                            type: "internal",
                            route: "",
                            color: "dark",
                            label: (
                              <Button disabled={isDashBoardPlan.includes(data._id)} onClick={() => {
                                dispatch(planIdAction(data._id));
                                dispatch(serviceIdAction(data.serviceId));
                                dispatch(intervalAction(data.interval));
                                dispatch(
                                  paymentCheckout({
                                    autoDebit: autoDebitValue,
                                    customerId: customerId,
                                    priceId: autoDebitValue
                                      ? data.recurringPriceId
                                      : data.oneTimePriceId,
                                    successURL: localSuccess,
                                    cancelURL: localCancel,
                                    qty: 1,
                                  })
                                );
                              }}>{isDashBoardPlan.includes(data._id) ? "Purchased" : "Purchase"} </Button>

                            ),
                          }}
                        />
                      </Grid>
                    ))}
                  </>
                </Grid>
              </>
            ))
          )}
        </Grid>
      </SoftBox>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </PageLayout>
  );
};

export default Dashbordplan;
