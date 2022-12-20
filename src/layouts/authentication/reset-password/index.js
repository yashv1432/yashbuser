import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import lock from "assets/images/illustrations/lock.png";
//APi
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { reset_passwordAction } from "store/actions/actions";

import SoftSnackbar from "components/SoftSnackbar";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import { useNavigate } from "react-router-dom";

function Illustration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useremail = useSelector((state) => state.auth.resetPasswordEmail);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const [reset_password, setReset_password] = useState({
    email: useremail,
    otp: "",
    newPassword: "",
  });
  const { email, otp, newPassword } = reset_password;
  const onInputChange = (e) => {
    setReset_password({ ...reset_password, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (successMessage === "RESET password Successfully") {
      navigate("/authentication/sign-in");
    }
  }, [successMessage]);
  return (
    <IllustrationLayout
      title="Reset Password"
      description="You will receive an e-mail in maximum 60 seconds"
      illustration={{
        image: lock,
        title: "Buser Institute",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput
            type="email"
            placeholder="Email"
            size="large"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput
            type="text "
            placeholder="Verification Code"
            size="large"
            name="otp"
            value={otp}
            onChange={onInputChange}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput
            type="password"
            placeholder="New Password"
            size="large"
            name="newPassword"
            value={newPassword}
            onChange={onInputChange}
          />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            // component={Link}
            // to="/authentication/sign-in"
            onClick={() => {
              dispatch(reset_passwordAction(reset_password));
            }}
          >
            Reset
          </SoftButton>
        </SoftBox>
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
    </IllustrationLayout>
  );
}

export default Illustration;
