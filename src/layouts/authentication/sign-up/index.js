import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";


// Images
import curved6 from "assets/images/curved-images/curved6.jpg";
import { useDispatch } from "react-redux";
import { signupAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import SoftSnackbar from "components/SoftSnackbar";

import SoftSelect from "components/SoftSelect";
import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";
// import selectData from "layouts/pages/account/settings/components/BasicInfo/data/selectData";

function Basic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
 
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    mobile_no: "",
    userType: "",
  });
  const { name, email, password, mobile_no, userType } = register;
  const onInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (successMessage !== "") {
      navigate("/authentication/sign-in");
    }
  }, [successMessage]);
  return (
    <BasicLayout
      title="Welcome To The Buser Institute"
      description="Please register below"
      image={curved6}
    >
      <Card style={{ marginTop: "-40px" }}>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Register with
          </SoftTypography>
        </SoftBox>

        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                please select one
              </SoftTypography>
              <SoftSelect
                placeholder="Please select userType"
                onChange={(e) => setRegister({ ...register, ["userType"]: e.value })}
                options={selectData.UserType}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput placeholder="Name" name="name" value={name} onChange={onInputChange} />
            </SoftBox>
            <SoftBox mb={2}>
            <PhoneInput
                      className="stylet"
                      name="mobile_no"
                      placeholder="Phone number"
                      value={mobile_no}
                      onChange={(value) => setRegister({ ...register, ["mobile_no"]: value })}
                    />
              {/* <SoftInput
                type="number"
                placeholder="phone number"
                name="mobile_no"
                value={mobile_no}
                onChange={onInputChange}
              /> */}
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="dark"
                // component={Link}
                // to="/authentication/sign-in"
                fullWidth
                onClick={() => {
                  dispatch(signupAction(register));
                }}
              >
                sign up
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
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
    </BasicLayout>
  );
}

export default Basic;
