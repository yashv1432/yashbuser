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


function BookAppointments() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox mb={1}>
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
                <h2 style={{ textAlign: "center" }}>Scheduling Buser Institute Therapy</h2>
                <br />

                <p style={{textAlign : "justify"}}>
                  <b>Welcome to the Buser Institute.</b> You will be able to able to meet with a
                  Buser Institute Therapist in a variety of ways, from Photo Therapy to Video
                  Messaging Therapy to Live Online Video Sessions to In-Person Travel Therapy at one
                  of our travel clinics. In any of those cases you will be able to discuss your
                  personal health history in as much detail as you please and ask us any questions
                  you may have about your conditions, your imbalances contributing to your
                  conditions, your recommended therapy and your continued path to your health goals.
                  <br />
                  <br />
                  After evaluating your postural integration, gait and functional tests, you will be
                  given detailed instruction and videos to perform your therapy in the comfort of
                  your home or anywhere in the world that your life takes you.
                  <br />
                  <br />
                  <p style={{ fontSize: "larger" }}>
                    So now, please follow the below steps to request and prepare for your therapy
                    session.
                    <br />
                    See you soon!
                  </p>
                  <br />
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Six easy steps to your{" "}
                  </h2>
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Buser Institute Video Consultation
                  </h2>
                  <br />
                  <SoftBox
                    container
                    justifyContent="center"
                    sx={{ height: "50%" }}
                    item
                    xs={12}
                    lg={11}
                    pl={3}
                    pr={4}
                  >
                    {" "}
                    <ul style={{ listStyleType: "square" }}>
                      <li>
                        <b>First</b>, please ensure that you have visit credits by visiting our{" "}
                        <b style={{ color: "dodgerblue" }}>Services</b> page on our{" "}
                        <b style={{ textDecoration: "underline" }}>
                          <a style={{ color: "dodgerblue" }} href="https://buserinstitute.com">
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
                        fillable pdf with your patient information and condition(s) history. Save
                        this to your desktop with your name and date in the title.
                      </li>
                      <br />
                      <li>
                        <b>Third</b>, collect any other medical <b>records</b>, doctors notes,
                        Imaging reports (X-ray, MRI, CT Scan, Ultrasound, EMG, etc), and biochemical
                        tests (blood, urine, stool, hair, etc) that you feel are pertinent to your
                        case and condition(s).
                      </li>
                      <br />
                      <li>
                        <b>Fourth</b>, attach the above from step two (<b style={{ color: "dodgerblue" }}>Client Intake Form</b>) and step
                        three (medical <b>records</b>) to an email addressed to{" "}
                        <b style={{ textDecoration: "underline" }}>
                          <a
                            style={{ color: "dodgerblue", textDecoration: "underline" }}
                            href="mailto: admin@buserinstitute.com"
                          >
                            admin@buserinstitute.com
                          </a>{" "}
                        </b>
                        with the Subject Line: <b>“Therapy Session Request”</b>
                      </li>
                      <br />
                      <li>
                        <b>Fifth</b>, if you are requesting a synchronous session (Live Video or
                        In-Person Therapy), in the body of the email write your{" "}
                        <b style={{ color: "red" }}>request</b> for the <b>date, time </b>
                        (Monday-Friday, 9am-5pm). Also, no matter what type of therapy (including
                        Photo and Video Messaging Therapy) please indicate your{" "}
                        <b>preferred practitioner </b>
                        if you have one (optional) and send that email to us.
                      </li>
                      <br />
                      <li>
                        <b>Sixth</b>, await the <b style={{ color: "green" }}>approval</b> and{" "}
                        <b style={{ color: "dodgerblue" }}>confirmation</b> email from{" "}
                        <b style={{ textDecoration: "underline" }}>
                          <a
                            style={{ color: "dodgerblue", textDecoration: "underline" }}
                            href="mailto: admin@buserinstitute.com"
                          >
                            admin@buserinstitute.com
                          </a>{" "}
                        </b>
                        for your appointment. On the day and time of your synchronous (Live Video or
                        In-Person) appointment, follow the instructions in the session confirmation
                        email sent to you.
                      </li>
                    </ul>
                  </SoftBox>
                  {/* <div style={{ alignItems: "center"}}> */}
                  <br />
                  <br />
                  <b>
                    If you have any questions, don’t hesitate to email us at{" "}
                    <b style={{ textDecoration: "underline" }}>
                      <a
                        style={{ color: "dodgerblue", textDecoration: "underline" }}
                        href="mailto: admin@buserinstitute.com"
                      >
                        admin@buserinstitute.com
                      </a>{" "}
                    </b>
                    and we will assist you in this process.
                  </b>
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

export default BookAppointments;
