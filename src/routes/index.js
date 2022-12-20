import { SuccessSoft, ErrorSoft } from "components/Toaster/toast";
import { successToaster } from "components/toastify";
import Plans from "layouts/dashboards/plans/Plans";

import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Default = lazy(() => import("layouts/dashboards/default"));
import moment from "moment";

// const CreateTemplate = lazy(() =>
//   import(
//     "../jsx/pages/reporting page/CreateReportWithFileUpload/Template/CreateTemplate"
//   )
// );

// const AgreeToTerms = lazy(() => import('../jsx/pages/auth/AgreeToTerms'));
// const ResetPassword = lazy(() => import('../jsx/pages/auth/ResetPassword'));
// const CreateFileUploadTemplates = lazy(() =>
//   import(
//     "../jsx/pages/reporting page/CreateReportWithFileUpload/CreateFileUploadTemplates"
//   )
// );
// const Reports = lazy(() =>
//   import("../jsx/pages/reporting page/CreateReportWithFileUpload/Reports")
// );
// const ExistReportFramework = lazy(() =>
//   import("../jsx/pages/reporting page/CreateReportWithFramework")
// );
// const ReportingPage = lazy(() =>
//   import("../jsx/pages/reporting page/ReportingPage")
// );
// const CustomReportingTemplate = lazy(() =>
//   import("../jsx/pages/reporting page/CustomReport/CustomReportingTemplate")
// );
const Registration = lazy(() => import("../layouts/authentication/sign-up"));
const Login = lazy(() => import("../layouts/authentication/sign-in"));
const ForgotPassword = lazy(() => import("../layouts/authentication/Forgot-password"));
const ResetPassword = lazy(() => import("../layouts/authentication/reset-password"));
const AccountSetting = lazy(() => import("../layouts/pages/account/settings/index"));
const TermsAndSignature = lazy(() => import("../layouts/pages/termsandsignature/index"));
const InformedConsent = lazy(() => import("../layouts/pages/Informed-Consent/index"));
const Services = lazy(() => import("../layouts/pages/Services/index"));
const ClientIntakeForm = lazy(() => import("../layouts/pages/Client-Intake-Form/index"));
const Calendar = lazy(() => import("../layouts/pages/calendar/index"));
const BookAppointments = lazy(() => import("../layouts/pages/Book Appointments/index"));
const UpcomingAppointments = lazy(() => import("../layouts/pages/Upcoming Appointments/index"));
const PhotoTherapy = lazy(() => import("../layouts/pages/Photo Therapy/index"));
const VideoMessagingTherapy = lazy(() => import("../layouts/pages/Video Messaging Therapy/index"));
const LiveVideoTherapy = lazy(() => import("../layouts/pages/Live Video Therapy/index"));
const PhotosandVideos = lazy(() => import("../layouts/pages/Photos and Videos/index"));
const Labs = lazy(() => import("../layouts/pages/Labs/index"));
const Sequences = lazy(() => import("../layouts/pages/Sequences/index"));
const Nutrition = lazy(() => import("../layouts/pages/Nutrition/index"));
const DailyUpdates = lazy(() => import("../layouts/pages/Daily Updates/index"));
const DailyUpdateForm = lazy(() =>
  import("../layouts/pages/Daily Updates/components/DailyUpdateForm/index")
);
const ProgressChart = lazy(() => import("../layouts/pages/Progress Chart/index"));
const Equipment = lazy(() => import("../layouts/pages/Equipment/index"));
const ContactUs = lazy(() => import("../layouts/pages/Contact Us/index"));
const Profile = lazy(() => import("../layouts/pages/Profile/index"));
const NewSetting = lazy(() => import("../layouts/pages/NewSetting/index"));
const ProfileAfterlogin = lazy(() => import("../layouts/pages/ProfileAfterlogin/index"));
const Dashbordplan = lazy(() =>
  import("../layouts/pages/pricing-page/components/dashbordCard/index")
);
const Messages = lazy(() => import("../layouts/pages/messages/index"));
// const ChangePassword = lazy(() => import("../layouts/pages/account/settings/components/ChangePassword"));
// const ForgotPassword = lazy(() => import('../jsx/pages/auth/ForgotPassword'));
// const Home = lazy(() => import('../jsx/components/Dashboard/Home'));

// const InitialSetup = lazy(() =>
// 	import('../jsx/pages/initialSetup/InitialSetup'),
// );
// const AccountSetting = lazy(() =>
// 	import('../jsx/pages/accountSetting/AccountSetting'),
// );
// const Subscription = lazy(() => import('../jsx/pages/Subscription/Index'));
// const UserManagement = lazy(() => import('../jsx/pages/UserManagement/Index'));
// const OngoingReport = lazy(() => import('../jsx/pages/onGoingReport/Index'));
// const Invite = lazy(() => import('../jsx/pages/Invite/Index'));
// const PublishedReport = lazy(() =>
// 	import('../jsx/pages/publishedReport/Index'),
// );

// const WelcomeStakeholder = lazy(() =>
// 	import('../jsx/pages/reporting page/Stakeholder/WelcomeStakeholder'),
// );
// const SignoffSurvey = lazy(() =>
// 	import('../jsx/pages/reporting page/signoff/Signoff'),
// );

// const DesignFramework = lazy(() => import('../jsx/pages/DesignFramework'));
// const MaterialRankingAndSelection = lazy(() =>
// 	import('../jsx/pages/reporting page/Stakeholder/MaterialRankingAndSelection'),
// );

function Routers() {
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  return (
    <Suspense
      fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }
    >
      {SuccessSoft(successMessage)}
      {ErrorSoft(errorMessage)}
      <Routes>
        <Route path="/authentication/sign-up" element={<Registration />} />
        <Route path="/authentication/sign-in" element={<Login />} />
        <Route path="/authentication/forgot-password" element={<ForgotPassword />} />
        <Route path="/authentication/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </Suspense>
  );
}

function ProtectedRoutes() {
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const istermCompleted = useSelector((state) => state.auth.isVerfied);
  const isFristProfileUpdate = useSelector((state) => state.auth.isFristProfileUpdate);
  const isDashBordPurchase = useSelector((state) => state.auth.auth.isDashBordPurchase);
  const isExpiredDate = useSelector((state) => state.auth.auth.isExpiredDate);
  let currentDate = moment().format("YYYY-MM-DDThh:mm:ssn");

  const isAuthSubscription = isDashBordPurchase && isExpiredDate > currentDate;

  const isServiceProfileUpdates = useSelector((state) => state.auth.isServiceProfileUpdates);
  const isPlanPurchase = useSelector((state) => state.auth.auth.isPlanPurchase);
  const isPlanExpired = useSelector((state) => state.auth.auth.isPlanExpired);
  // let currentDate = moment().format("YYYY-MM-DDThh:mm:ssn");

  const isServiceSubscription = isPlanPurchase && isPlanExpired > currentDate;

  return (
    <Suspense
      fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }
    >
      {SuccessSoft(successMessage)}
      {ErrorSoft(errorMessage)}

      <Routes>
        {/* <Route path='/' exact element={<Default />} /> */}
        {/* <Route path="/popup" element={<ScrollDialog />} /> */}
        {istermCompleted && isFristProfileUpdate ? (
          <>
            {isAuthSubscription ? (
              <>
                <Route path="/informedconsent" element={<InformedConsent />} />
                <Route path="/welcome" element={<Default />} />
                {/* {isServiceSubscription ? <> */}

                <Route path="/profileafterlogin" element={<ProfileAfterlogin />} />
                <Route path="/termsandsignature" element={<TermsAndSignature />} />
                <Route path="/clientintakeform" element={<ClientIntakeForm />} />
                <Route path="/services" element={<Services />} />
                <Route path="/informedconsent" element={<InformedConsent />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bookappointments" element={<BookAppointments />} />
                <Route path="/upcomingappointments" element={<UpcomingAppointments />} />
                <Route path="/phototherapy" element={<PhotoTherapy />} />
                <Route path="/videomessagingtherapy" element={<VideoMessagingTherapy />} />
                <Route path="/livevideoportal" element={<LiveVideoTherapy />} />
                <Route path="/photovideo" element={<PhotosandVideos />} />
                <Route path="/labs" element={<Labs />} />
                <Route path="/sequences" element={<Sequences />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/dailyupdates" element={<DailyUpdates />} />
                <Route path="/dailyupdates/dailyupdatesform" element={<DailyUpdateForm />} />
                <Route path="/progresschart" element={<ProgressChart />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/messages" element={<Messages />} />
                {/* </> */}

                {/* : <>
                  <Route path="/services" element={<Services />} />
                  <Route path="*" element={<Navigate to="/services" />} />
                </>} */}
              </>
            ) : (
              <>
                <Route path="/dashbordplan" element={<Dashbordplan />} />
                <Route path="*" element={<Navigate to="/dashbordplan" />} />
              </>
            )}
            <Route path="/newsettings" element={<NewSetting />} />
            <Route path="/settings" element={<AccountSetting />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<Navigate to="/welcome" />} />
          </>
        ) : (
          <>
            <Route path="/termsandsignature" element={<TermsAndSignature />} />
            <Route path="*" element={<Navigate to="/termsandsignature" />} />
            <Route path="/profileafterlogin" element={<ProfileAfterlogin />} />
          </>
        )}

        {/* <Route path="/Dashbordplan" element={<Dashbordplan />} /> */}

        {/* <Route path="/#change-password" element={<ChangePassword/>} /> */}

        {/* <Route path="*" element={<Navigate to="/dashboards/default" />} /> */}
        {/* Create Report Routes */}
        {/* <Route path='/create-report' component={ReportingPage} />
					<Route path='/genreport' component={GenerateReportPage} />
					<Route path='/report-exist' component={ExistReportFramework} />
					<Route
						exact
						path='/templates'
						component={CreateFileUploadTemplates}
					/>
					<Route path='/stakeholder-welcome' component={WelcomeStakeholder} />
					<Route path='/templates/add' component={CreateTemplate} />
					<Route path='/report/upload' component={UploadReport} />
					<Route path='/reports' component={Reports} />
					<Route
						path='/use-custom-report'
						component={CustomReportingTemplate}
					/>
					<Route path='/report/signoff' component={SignoffSurvey} />
					<Route
						path='/report/material-ranking'
						component={MaterialRankingAndSelection}
					/> */}
        {/* End of Create Report Routes */}
        {/* <Route path='/genreport' component={GenerateReportPage} />
					<Route path='/design-framework/template-library'>
						<DesignFramework />
					</Route>

					<Route path='/account-setting' exact component={AccountSetting} />
					<Route
						path='/account-setting/subscription'
						component={Subscription}
					/>

					<Route path='/user-management' component={UserManagement} />
					<Route path='/ongoing-report' component={OngoingReport} />
					<Route path='/invite' component={Invite} />
					<Route path='/published-report' component={PublishedReport} /> */}

        {/* < route Navigate from='*' to='/dashboard' /> */}
      </Routes>
    </Suspense>
  );
}

export default {
  Routers,
  ProtectedRoutes,
};
