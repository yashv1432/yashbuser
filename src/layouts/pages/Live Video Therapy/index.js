// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


// Data
import { Box, DialogContent } from "@mui/material";


function LiveVideoTherapy() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox  mb={1}  >
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <DialogContent dividers={scroll === "paper"} style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
            {brand && (
              <SoftBox
                component="img"
                src={brand}
                alt="buser institute Logo"
                width="10rem"
                borderRadius="12px"
                // ml={50}
              />
            )}
            <Box sx={{ width: "100%" }} mt={2}>
              <SoftBox>
                <h2 style={{ textAlign: "center" }}>Buser Institute Live Video Therapy </h2>
                <br />

                <p style={{textAlign : "justify"}}>
                  <b>Welcome to the Buser Institute Live Video Therapy Department.</b> This is the
                  gold-standard for remote and personalized Buser Institute Exercise Therapy with
                  proven results. You will be able to meet with a Buser Institute Therapist in a
                  live online video session to discuss your personal health history in as much
                  detail as you please and ask us any questions you may have about your conditions,
                  your imbalances contributing to your conditions, your recommended therapy and your
                  continued path to your health goals.
                  <br />
                  <br />
                  After evaluating your postural views, gait and functional tests, your therapist
                  will take you through each of your recommended exercises right there during your
                  session. For your continued self-home care, you will also receive your
                  personalized exercise therapy sequence as a pdf document with pictures, video and
                  written instructions for each of your corrective exercises.
                  <br />
                  <br />
                  <p style={{marginBottom : 8}}>
                    So now, please follow the below steps to request and prepare for your Live Video
                    Therapy session.
                  </p>
                    See you soon!
                  
                  <br />
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Six easy steps to your{" "}
                  </h2>
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Buser Institute Video Consultation
                  </h2>
                  <br />
                  {/* <div style={{ alignItems: "center"}}> */}
                  <ul style={{ listStyleType: "square" }}>
                    <li>
                      <b>First</b>, please ensure that you have visit credits by visiting our
                      <b style={{ color: "dodgerblue" }}> Services</b> page on our{" "}
                      <b style={{ textDecoration: "underline" }}>
                        <a
                          style={{ color: "dodgerblue", textDecoration: "underline" }}
                          href="https://buserinstitute.com"
                        >
                          www.buserinstitue.com
                        </a>{" "}
                      </b>
                      website and purchase either one session or a package of 4 or 8{" "}
                      <b>Live Video (Online) Exercise Therapy </b>visits.
                    </li>
                    <br />
                    <li>
                      <b>Second</b>, download <b style={{ color: "dodgerblue" }}>here</b> and
                      complete your <b style={{ color: "dodgerblue" }}>Client Intake Form</b>{" "}
                      fillable pdf with your patient information and condition(s) history. Save this
                      to your desktop with your name and date in the title.
                    </li>
                    <br />
                    <li>
                      <b>Third</b>, collect any other medical <b>records</b>, doctors notes, Imaging
                      reports (X-ray, MRI, CT Scan, Ultrasound, EMG, etc), and biochemical tests
                      (blood, urine, stool, hair, etc) that you feel are pertinent to your case and
                      condition(s).
                    </li>
                    <br />
                    <li>
                      <b>Fourth</b>, attach the above from step two (
                      <b style={{ color: "dodgerblue" }}>Client Intake Form</b>) and step three
                      (medical <b>records</b>) to an email addressed to{" "}
                      <b style={{ textDecoration: "underline" }}>
                        <a style={{ color: "dodgerblue" }} href="mailto: admin@buserinstitute.com">
                          admin@buserinstitute.com
                        </a>{" "}
                      </b>
                      with the Subject Line: <b>“Live Video Portal Therapy Appointment Request”</b>
                    </li>
                    <br />
                    <li>
                      <b>Fifth</b>, in the body of the email write your{" "}
                      <b style={{ color: "red" }}>request</b> for the <b>date, time </b>
                      (Monday-Friday, 9am-5pm)and <b>preferred practitioner </b>
                      if you have one (optional) and send that email to us.
                    </li>
                    <br />
                    <li>
                      <b>Sixth</b>, await the <b style={{ color: "green" }}>approval</b> and{" "}
                      <b style={{ color: "dodgerblue" }}>confirmation</b> email from{" "}
                      <b style={{ textDecoration: "underline" }}>
                        <a style={{ color: "dodgerblue" }} href="mailto: admin@buserinstitute.com">
                          admin@buserinstitute.com
                        </a>{" "}
                      </b>
                      for your appointment. On the day and time of your appointment, follow the
                      emailed link to your practitioners online waiting room to check in and wait
                      for your practitioner to meet with you.
                    </li>
                  </ul>
                 
                </p>
              </SoftBox>
            </Box>
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LiveVideoTherapy;
