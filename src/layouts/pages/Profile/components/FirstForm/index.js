import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";
import SoftTypography from "components/SoftTypography";
import { Formik } from "formik";

import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import { popupAction } from "store/actions/actions";
import "./style.css";
import * as Yup from "yup";
import FormField from "../FormField";
import selectData from "./data/selectData";
import SoftSelect from "components/SoftSelect";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Country, State, City } from "country-state-city";
// import csc from "country-state-city";

import SoftAvatar from "components/SoftAvatar";

import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};

function FirstForm() {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  console.log("userdata..", userdata.city);

  let validate = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("first name is required")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    Occupation: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid Occupation")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    lastName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("last name is required")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    DOB: Yup.date()
      .min(new Date("01-01-1900"), "You Cannot Enter Below 1900 DOB Date")
      .max(new Date(), "You Cannot Enter Future DOB Date"),

    NumberofChildren: Yup.string().max(2, "enter valid number"),

    UserWorkHours: Yup.string().max(2, "max 2 digit of work hours"),
  });

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          About me
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <Formik
        initialValues={{
          firstName: userdata.firstName,
          gender: userdata.gender,
          lastName: userdata.lastName,
          company: userdata.company,
          language: userdata.language,
          MaritalStatus: userdata.MaritalStatus,
          Cellphonenumber: userdata.Cellphonenumber,
          Workphonenumber: userdata.Workphonenumber,
          SocialSecurityNumber: userdata.SocialSecurityNumber,
          NumberofChildren: userdata.NumberofChildren,
          Occupation: userdata.Occupation,
          UserWorkHours: userdata.UserWorkHours,
          DOB: userdata.DOB,
          address1: userdata.address1,
          address2: userdata.address2,
          UserProfilePIC: userdata.UserProfilePIC,

          zip: userdata.zip,

          EmergencyName: userdata.EmergencyName,
          EmergencyRelation: userdata.EmergencyRelation,
          EmergencyPhoneNumber: userdata.EmergencyPhoneNumber,
          // city: userdata.city,
          // state: userdata.state

          country: userdata.country.name,
          state: userdata.state.name,
          city: userdata.city.name,
        }}
        validationSchema={validate}
      >
        {({ handleChange, touched, errors, values, setFieldValue, setValues }) => {
          console.log("value..", values.Workphonenumber, "   ", userdata.Workphonenumber);
          // console.log("Country", Country.getAllCountries());
          const [countryData, setCountryData] = useState([]);
          const [stateData, setStateData] = useState([]);
          const [cityData, setCityData] = useState([]);

          const getCountrys = useCallback(async () => {
            var config = {
              method: "get",
              url: "https://api.countrystatecity.in/v1/countries",
              headers: {
                "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
              },
            };

            const response = await axios(config);
            const getCountryData = response.data;
            const updatedCountries = getCountryData.map((country) => ({
              label: country.name,
              value: country.id,
              ...country,
            }));
            setCountryData(updatedCountries);
          });

          useEffect(() => {
            getCountrys();
          }, []);

          const updatedStates = useCallback(
            async (country) => {
              var config = {
                method: "get",
                url: `https://api.countrystatecity.in/v1/countries/${country?.iso2}/states`,
                headers: {
                  "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
                },
              };

              const response = await axios(config);
              const getStatesOfCountry = response.data;
              return getStatesOfCountry?.map((state) => ({
                label: state.name,
                value: state.id,
                ...state,
              }));
            },
            [countryData]
          );

          const updatedCities = useCallback(
            async (countryCode, StateCode) => {
              var config = {
                method: "get",
                url: `https://api.countrystatecity.in/v1/countries/${countryCode?.iso2}/states/${StateCode?.iso2}/cities`,
                headers: {
                  "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
                },
              };

              const response = await axios(config);
              const countryDataOdState = response.data;
              return countryDataOdState.map((city) => ({
                label: city.name,
                value: city.id,
                ...city,
              }));
            },
            [stateData]
          );

          // useEffect(() => {
          //   // const countries = Country.getAllCountries();
          //   const countries = csc?.getAllCountries();
          //   const updatedCountries = countries.map((country) => ({
          //     label: country.name,
          //     value: country.id,
          //     ...country,
          //   }));
          //   setCountryData(updatedCountries);
          // },[]);

          // const updatedStates = useCallback((countryId) =>{
          //   return csc?.getStatesOfCountry(countryId).map((state) => ({
          //     label: state.name,
          //     value: state.id,
          //     ...state,
          //   }))
          // },[countryData]);

          // const updatedCities = useCallback((stateId) =>{
          //   return csc?.getCitiesOfState(stateId?.id).map((city) => ({
          //     label: city.name,
          //     value: city.id,
          //     ...city,
          //   }))
          // },[stateData]);

          return (
            <>
              <SoftBox mt={1.625}>
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4} lg={4} ></Grid>
                  <Grid item xs={4} sm={4} lg={4} className="paddingLeftClass">
                    <ImageLabel htmlfor="image" style={{ marginLeft: "-10px",}}>
                      <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <SoftTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          textTransform="capitalize"
                          position="absolute"
                          mt={-5}
                          ml={2.5}
                        >
                          Profile Picture
                        </SoftTypography>
                      </SoftBox>
                      {values.UserProfilePIC ? (
                        <SoftAvatar src={values.UserProfilePIC} alt="" size="xl" />
                      ) : (
                        <SoftAvatar
                          src={values.UserProfilePIC}
                          alt=""
                          variant="rounded"
                          size="xl"
                          style={{ color: "grey", border: "2px" }}
                        />
                      )}
                      <Input
                        onChange={(e) => {
                          const files = e.target.files;
                          let reader = new FileReader();
                          reader.readAsDataURL(files[0]);

                          reader.onload = (e) => {
                            setFieldValue("UserProfilePIC", e.target.result);
                          };
                        }}
                        type="file"
                        name="image"
                        id="image"
                        label="Profile Picture"
                      />
                    </ImageLabel>
                  </Grid>
                  <Grid item xs={4} sm={4} lg={4} ></Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="first name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      errorMsg
                      error={errors.firstName && touched.firstName}
                      success={values.firstName.length > 0 && !errors.firstName}
                    />
                    {/* {console.log("values", errors )}  */}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="last Name"
                      name="lastName"
                      placeholder="name"
                      value={values.lastName}
                      onChange={handleChange}
                      errorMsg
                      error={errors.lastName && touched.lastName}
                      success={values.lastName.length > 0 && !errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="company"
                      name="company"
                      placeholder="eg. Creative Tim"
                      value={values.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Language
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.language}
                      options={selectData.language}
                      onChange={(e) => setFieldValue("language", e.value)}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} mt={0} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Marital Status
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.MaritalStatus}
                      options={selectData.MaritalStatus}
                      onChange={(e) => setFieldValue("MaritalStatus", e.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Cell Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.Cellphonenumber}
                      onChange={(e) => {
                        console.log("e..", e);
                        setFieldValue("Cellphonenumber", e);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Social Security Number"
                      name="SocialSecurityNumber"
                      value={values.SocialSecurityNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Work Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.Workphonenumber}
                      onChange={(e) => {
                        setFieldValue("Workphonenumber", e);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Number of Children"
                      name="NumberofChildren"
                      value={values.NumberofChildren}
                      onChange={handleChange}
                      errorMsg
                      error={errors.NumberofChildren && touched.NumberofChildren}
                      success={values.NumberofChildren.length > 0 && !errors.NumberofChildren}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Occupation"
                      name="Occupation"
                      value={values.Occupation}
                      onChange={handleChange}
                      errorMsg
                      error={errors.Occupation && touched.Occupation}
                      success={values.Occupation.length > 0 && !errors.Occupation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Work Hours"
                      name="UserWorkHours"
                      value={values.UserWorkHours}
                      onChange={handleChange}
                      errorMsg
                      error={errors.UserWorkHours && touched.UserWorkHours}
                      success={values.UserWorkHours.length > 0 && !errors.UserWorkHours}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="date"
                      label="DOB"
                      name="DOB"
                      value={values.DOB}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0} container spacing={3}>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        gender
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.gender}
                      options={selectData.gender}
                      onChange={(e) => setFieldValue("gender", e.value)}
                    />
                  </Grid>
                </Grid>
                <SoftTypography mt={4} variant="h5" fontWeight="bold">
                  Address
                </SoftTypography>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} className="paddingClass">
                    <FormField
                      type="text"
                      label="address 1:"
                      name="address1"
                      rows={2}
                      multiline
                      value={values.address1}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="paddingClass">
                    <FormField
                      type="text"
                      label="address 2:"
                      name="address2"
                      rows={2}
                      multiline
                      value={values.address2}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Country
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.country ? values.country : userdata.country}
                      options={countryData}
                      onChange={async (value) => {
                        setFieldValue("country", value);
                        let data = await updatedStates(value);
                        // let data = updatedStates(value?.value)
                        setStateData(data);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        State
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.state ? values.state : userdata.state}
                      options={stateData}
                      onChange={async (value) => {
                        setFieldValue("state", value);
                        let data = await updatedCities(values?.country, value);
                        // let data = updatedCities(value)
                        setCityData(data);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        City
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.city ? values.city : userdata.city}
                      options={cityData}
                      onChange={(value) => setFieldValue("city", value)}
                    />
                  </Grid>
                </Grid>
                <SoftTypography mt={2} variant="h5" fontWeight="bold">
                  Emergency Contact Information:
                </SoftTypography>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Emergency Person Name"
                      name="EmergencyName"
                      value={values.EmergencyName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Emergency Person Relation"
                      name="EmergencyRelation"
                      value={values.EmergencyRelation}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={5}
                      >
                        Emergency Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.EmergencyPhoneNumber}
                      onChange={(e) => {
                        setFieldValue("EmergencyPhoneNumber", e);
                      }}
                    />
                  </Grid>
                </Grid>
              </SoftBox>
              {/* )}
    </Formik>   */}
              <SoftBox my={2} A>
                <SoftButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    dispatch(popupAction({ id: UserId, data: values, token }));
                  }}
                >
                  Update
                </SoftButton>
              </SoftBox>
            </>
          );
        }}
      </Formik>
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
  );
}

export default FirstForm;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;
  ${media.miniTab} {
    font-size: 16px;
  }
  ${media.mobile} {
    font-size: 15px;
  }
`;
const ImageLabel = styled(Label)`
  justify-content: center;
  display: flex;

  height: 100px;
  cursor: pointer;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
`;

const Preview = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

const LabelButton = styled(Label)`
  justify-content: center;
`;

const Input = styled.input`
  display: none;
  visibility: hidden;
  height: 40px;
  width: 350px;
  font-weight: 700;
  padding: 5px;
  font-size: 17px;
  ${media.miniTab} {
    width: 250px;
    font-size: 15px;
  }
  ${media.mobile} {
    width: 200px;
  }
`;
