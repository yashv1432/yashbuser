/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Settings page components
import FormField from "layouts/pages/account/components/FormField";
import { changesPasswordAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import SoftSnackbar from "components/SoftSnackbar";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const token = useSelector((state) => state.auth.auth.idToken);

  const [change_password, setChange_password] = useState({
    oldpassword: "",
    newpassword: "",
    
  });
  const { oldpassword, newpassword } = change_password;
  const onInputChange = (e) => {
    setChange_password({ ...change_password, [e.target.name]: e.target.value });
  };
  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <SoftBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <SoftTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </SoftTypography>
      </SoftBox>
    );
  });

  return (
    <Card id="change-password">
      <SoftBox p={3}>
        <SoftTypography variant="h5">Change Password</SoftTypography>
      </SoftBox>
      <SoftBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              label="current password"
              placeholder="Current Password"
              inputProps={{ type: "password", autoComplete: "" }}
              name="oldpassword"
              value={oldpassword}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              label="new password"
              placeholder="New Password"
              inputProps={{ type: "password", autoComplete: "" }}
              name="newpassword"
              value={newpassword}
              onChange={onInputChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormField
              label="confirm new password"
              placeholder="Confirm Password"
              inputProps={{ type: "password", autoComplete: "" }}
            />
          </Grid> */}
        </Grid>
        <SoftBox mt={6} mb={1}>
          <SoftTypography variant="h5">Password requirements</SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
          <SoftTypography variant="body2" color="text">
            Please follow this guide for a strong password
          </SoftTypography>
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <SoftBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
            {renderPasswordRequirements}
          </SoftBox>
          <SoftBox ml="auto">
            <SoftButton
              variant="gradient"
              color="dark"
              size="small"
              onClick={() => {
                dispatch(changesPasswordAction({...change_password, token}));
                setChange_password({
                  oldpassword: "",
                  newpassword: "",
                  
                })
              }}

            >
              update password
            </SoftButton>
          </SoftBox>
        </SoftBox> 
      </SoftBox>
      <SoftSnackbar
      color={successMessage!== "" ? "success" : "error"}
      icon="star"
      title="Buser Institute"
      content={errorMessage || successMessage}
      open={errorMessage !== "" || successMessage !=="" ? true : false}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
    </Card>
    
  );
}

export default ChangePassword;
