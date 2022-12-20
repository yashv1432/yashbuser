import checkout from "layouts/pages/ProfileAfterlogin/schemas/form";
import * as Yup from "yup";

const {
  formField: {
    firstName,
    lastName,
    zip,
    Workphonenumber,
    SocialSecurityNumber,
    NumberofChildren,
    UserWorkHours,
    Occupation,
    EmergencyRelation,
    // gender
    company,
    language,
    gender,
    MaritalStatus,
    Cellphonenumber,
    DOB,
  },
} = checkout;


const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string()
      .required(firstName.errorMsg)
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(25, firstName.invalidMsg),

    [lastName.name]: Yup.string().required(lastName.errorMsg)
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required(lastName.errorMsg)
      .max(25, lastName.invalidMsg),

    [company.name]: Yup.string().max(15, company.invalidMsg),


    [gender.name]: Yup.string().required(gender.errorMsg),
    
    [MaritalStatus.name]: Yup.string(),
    [Cellphonenumber.name]: Yup.string().required().min(6, Cellphonenumber.invalidMsg),
    [Workphonenumber.name]: Yup.string().min(6, Workphonenumber.invalidMsg),
    [SocialSecurityNumber.name]: Yup.string().max(15, SocialSecurityNumber.invalidMsg),
    [DOB.name]: Yup.date().min(new Date('01-01-1900'),"You Cannot Enter Below 1900 DOB Date").max(new Date(),"You Cannot Enter Future DOB Date"),
    [NumberofChildren.name]: Yup.string().max(2, NumberofChildren.invalidMsg),
    [Occupation.name]: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid Occupation")
      .max(25, Occupation.invalidMsg)
      .min(3, Occupation.invalidMsg),
  }),

  Yup.object().shape({
   
    [zip.name]: Yup.string().min(5, zip.invalidMsg),
  }),
  Yup.object().shape({
    [EmergencyRelation.name]: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid Relation")
      .max(25, EmergencyRelation.invalidMsg)
      .min(3, EmergencyRelation.invalidMsg),
  }),
];

export default validations;
