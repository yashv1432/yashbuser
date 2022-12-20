import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSelect from "components/SoftSelect";
import SoftSnackbar from "components/SoftSnackbar";
import SoftTypography from "components/SoftTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useFormik } from "formik";
import FormField from "layouts/pages/account/components/FormField";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearMessage, PainDetail_Action } from "store/actions/actions";
import selectData from "./data/selectData";

function DailyUpdateForm() {
  const UserId = useSelector((state) => state.auth.auth._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [headpainLevel ,setHeadpainLevel] = useState("")
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const formik = useFormik({
    initialValues: {
      Sequence: "",
      timeofSequence: "",
      Nutrition: "",
      timeofNutrition: "",
      HeadpainLevel: "",
      HeadpainFrequency: "",
      HeadpainDuration: "",
      NeckpainLevel: "",
      NeckpainFrequency: "",
      NeckpainDuration: "",
      HippainLevel: "",
      HippainFrequency: "",
      HippainDuration: "",
      LowerpainLevel: "",
      LowerpainFrequency: "",
      LowerpainDuration: "",
    },
  });
  useEffect(() => {
    if (successMessage !== "") {
      navigate("/dailyupdates");
    }
  }, [successMessage]);
  // console.log("formik", formik.values);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <SoftTypography variant="h5" fontWeight="bold">
                Give Us Your Daily Updates :
              </SoftTypography>
              <SoftBox mt={1} mb={2}>
                <SoftTypography variant="button" fontWeight="regular" color="text">
                  like Sequence , Nutrition , Pain
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <SoftBox display="flex" justifyContent="flex-end">
                <SoftButton variant="gradient" color="dark" component={Link} to="/dailyupdates">
                  Back
                </SoftButton>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={1.625}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Have You done your Sequences exercise?
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="Please Select ..."
                  options={selectData.questions}
                  onChange={(e) => formik.setFieldValue("Sequence", e.value)}
                />
              </SoftBox>
            </Grid>

            {formik.values.Sequence === "yes" && (
              <Grid item xs={12} sm={4}>
                <FormField
                  type="time"
                  label="if yes then time of Sequence"
                  name="timeofSequence"
                  placeholder="name"
                  value={formik.values.timeofSequence}
                  onChange={formik.handleChange}
                />
              </Grid>
            )}
          </Grid>
          <Grid mt={0.5} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Do You Takes Your Nutrition ?
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="Please Select ..."
                  options={selectData.questions}
                  onChange={(e) => formik.setFieldValue("Nutrition", e.value)}
                />
              </SoftBox>
            </Grid>
            {formik.values.Nutrition === "yes" && (
              <Grid item xs={12} sm={4}>
                <FormField
                  type="time"
                  label="if yes then time of Nutrition"
                  name="timeofNutrition"
                  placeholder="name"
                  value={formik.values.timeofNutrition}
                  onChange={formik.handleChange}
                />
              </Grid>
            )}
          </Grid>
          <Grid mt={0.5} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Head Pain Level
                  </SoftTypography>
                </SoftBox>
                <FormControl>
                  <RadioGroup
                    row
                    // value={headpainLevel}
                    onChange={(e) => formik.setFieldValue("HeadpainLevel", e.target.value)}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
                </FormControl>
              </SoftBox>
            </Grid>

            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Head Pain Frequency
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="daily/weekly/monthly"
                  options={selectData.Frequency}
                  onChange={(e) => formik.setFieldValue("HeadpainFrequency", e.value)}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Head Pain Duration
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="1 hour to 24 hours"
                  options={selectData.Hours}
                  onChange={(e) => formik.setFieldValue("HeadpainDuration", e.value)}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid mt={0.5} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Neck Pain Level
                  </SoftTypography>
                </SoftBox>
                <FormControl>
                  <RadioGroup
                    row
                    // value={headpainLevel}
                    onChange={(e) => formik.setFieldValue("NeckpainLevel", e.target.value)}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
                </FormControl>
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Neck Pain Frequency
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="daily/weekly/monthly"
                  options={selectData.Frequency}
                  onChange={(e) => formik.setFieldValue("NeckpainFrequency", e.value)}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Neck Pain Duration
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="1 hour to 24 hours"
                  options={selectData.Hours}
                  onChange={(e) => formik.setFieldValue("NeckpainDuration", e.value)}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid mt={0.5} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Hip Pain Level
                  </SoftTypography>
                </SoftBox>
                <FormControl>
                  <RadioGroup
                    row
                    // value={headpainLevel}
                    onChange={(e) => formik.setFieldValue("HippainLevel", e.target.value)}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
                </FormControl>
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Hip Pain Frequency
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="daily/weekly/monthly"
                  options={selectData.Frequency}
                  onChange={(e) => formik.setFieldValue("HippainFrequency", e.value)}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Hip Pain Duration
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="1 hour to 24 hours"
                  options={selectData.Hours}
                  onChange={(e) => formik.setFieldValue("HippainDuration", e.value)}
                />
              </SoftBox>
            </Grid>
          </Grid>
          <Grid mt={0.5} container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Lower Pain Level
                  </SoftTypography>
                </SoftBox>
                <FormControl>
                  <RadioGroup
                    row
                    // value={headpainLevel}
                    onChange={(e) => formik.setFieldValue("LowerpainLevel", e.target.value)}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                    <FormControlLabel value="6" control={<Radio />} label="6" />
                    <FormControlLabel value="7" control={<Radio />} label="7" />
                    <FormControlLabel value="8" control={<Radio />} label="8" />
                    <FormControlLabel value="9" control={<Radio />} label="9" />
                    <FormControlLabel value="10" control={<Radio />} label="10" />
                  </RadioGroup>
                </FormControl>
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Lower Pain Frequency
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="daily/weekly/monthly"
                  options={selectData.Frequency}
                  onChange={(e) => formik.setFieldValue("LowerpainFrequency", e.value)}
                />
              </SoftBox>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    Lower Pain Duration
                  </SoftTypography>
                </SoftBox>
                <SoftSelect
                  placeholder="1 hour to 24 hours"
                  options={selectData.Hours}
                  onChange={(e) => formik.setFieldValue("LowerpainDuration", e.value)}
                />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox my={2} A>
          <SoftButton
            type="submit"
            variant="gradient"
            color="info"
            onClick={() => {
              dispatch(
                PainDetail_Action({
                  userId: UserId,
                  pains: [{ ...formik.values, Date: moment().format("DD-MM-YYYY") }],
                })
              );
            }}
          >
            submit
          </SoftButton>
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
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DailyUpdateForm;
