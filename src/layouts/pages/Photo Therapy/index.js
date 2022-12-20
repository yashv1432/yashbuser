// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import phototherapy from "assets/images/video_tharapyimg/phototherapy.png";

// Soft UI Dashboard PRO React base styles

import { Box, DialogContent } from "@mui/material";
import brand from "assets/images/Logo-01-rm.png";

function PhotoTherapy() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox  mb={1} p={0}>
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
                <h2 style={{ textAlign: "center" }}>Buser Institute Photo Therapy Department</h2>
                <br />
                <p style={{textAlign : "justify"}}>
                <b>Welcome to the Buser Institute Photo Therapy Department. </b> This is an
                excellent way to get personalized Buser Institute Exercise Physiotherapy with proven
                results.
                <br />
                <br />
                To begin,{" "}
                <b>
                  please email{" "}
                  <b style={{ textDecoration: "underline" }}>
                    <a
                      style={{ color: "dodgerblue", textDecoration: "underline" }}
                      href="mailto: admin@buserinstitute.com"
                    >
                      admin@buserinstitute.com
                    </a>{" "}
                  </b>{" "}
                  to request an invitation to start our Photo Therapy program.
                </b>
                <br />
                <br />
                We will then ask that you complete your <b>Client Intake form</b> and take your{" "}
                <b>postural and functional test photos.</b> We will give you detailed instructions
                on how to take your photos and send them to us. Feel free call or email any
                questions you may have about your conditions, your therapy and your path to your
                health goals.
                <br />
                <br />
                Within one week a Buser Institute Therapist will evaluate your case and reply to you
                with your personalized exercise therapy sequence including pictures, and video and
                written instructions for each of your corrective exercises.
                <br /> <br />
                </p>
                <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {phototherapy && (
                    <SoftBox
                      component="img"
                      src={phototherapy}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                <h2 style={{ textAlign: "center" }}>
                  Instructions for taking Photo Therapy pictures:
                </h2>
                <br />
                <p style={{textAlign : "justify"}}>
                  You will need the following:
                  <br />
                  <br />
                  <ul style={{ listStyleType: "square", paddingLeft: "25px" }}>
                    <li>A smartphone camera or computer camera.</li>

                    <li>A well lit area.</li>

                    <li>
                      A plumb-line or vertical door frame that can be somewhere within the frame of
                      the picture.
                    </li>

                    <li>
                      Wear shorts that show your knees and a short sleeve shirt (preferably not
                      black).
                    </li>

                    <li>
                      Please tuck in your shirt into your pants so we can see the curvature of your
                      spine from the side.
                    </li>
                  </ul>
                  <br />
                  When taking the pictures, make sure that your entire body (from head to toe) is
                  included in the frame of the picture. If you are taking photos of yourself, you
                  may simply video the below positions and hold each position for 10 seconds each.
                  <br />
                  <br />
                  <p>Please take the following pictures:</p>
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
                        <b>Front view:</b> Stand facing the camera, behind the plumb-line or in the
                        frame of a door. Relax and stand naturally. Make sure that your entire body
                        is in the frame of the camera – from the feet to the top of the head.{" "}
                        <u>Relax, give us your natural posture, smile and take your picture.</u>
                      </li>
                      <br />
                      <li>
                        <b>Back view:</b> Stand with your back to the camera behind the plumb-line
                        or a frame of a door, relax and stand naturally. Make sure that your entire
                        body is in the frame of the camera – from the feet to the top of the head.
                        Take your picture.
                      </li>
                      <br />
                      <li>
                        <b>Left side view:</b> Stand behind the plumb-line (or at a doorway) with
                        your left side towards the camera. Relax and stand naturally. Make sure that
                        your entire body is in the frame of the camera – from the feet to the top of
                        the head. Take your picture.
                      </li>
                      <br />
                      <li>
                        <b>Right side view:</b> Stand behind the plumb-line (or at a doorway) with
                        your right side towards the camera. Relax and stand naturally. Make sure
                        that your entire body is in the frame of the camera – from the feet to the
                        top of the head. Take your picture. 
                      </li>
                      <br />
                      <li>
                        <b>Hands on Head:</b> Stand with your right side towards the camera. Relax
                        and stand naturally. Now interlace your fingers behind your head and pull
                        your elbows as far back as possible. Relax your stomach while standing in
                        this position. Take your picture.
                      </li>
                      <br />
                      <li>
                        <b>Standing Pigeon-Toed:</b> Stand with your right side towards the camera.
                        Relax and stand naturally. Now turn your feet inwards so that your big toes
                        touch and your heels point out to the sides approximately 45 degrees each.
                        Be sure to turn your feet inwards equally. Tighten your thighs and lock your
                        knees out to straighten your legs. Relax your stomach while standing in this
                        position. Look straight ahead, and take your picture.
                      </li>
                      <br />
                      <li>
                        <b>Hands-on-Head & Pigeon-toed:</b> Stand with your right side towards the
                        camera. Relax and stand naturally. Now turn your feet inwards so that your
                        big toes touch and your heels point out to the sides approximately 45
                        degrees each. Be sure to turn your feet inwards equally. Tighten your thighs
                        and lock your knees out to straighten your legs. Relax your stomach while
                        standing in this position. Now interlace your fingers behind your head and
                        pull your elbows as far back as possible. Remember to relax your stomach
                        while standing in this position. Take your picture.
                      </li>
                      <br />
                      <li>
                        <b>Cat:</b> With your right side to the camera, get on the floor on your
                        hands and knees. Position yourself so that your shoulders are over your
                        hands and your hips are over your knees. Your feet, knees and hands should
                        all be hip-width apart. Your arms should be straight with your elbows locked
                        comfortably. From this position, let your head drop down, tuck your pelvis
                        under and arch your back up towards the ceiling as high as possible. Take
                        your picture.
                      </li>
                      <br />
                      <li>
                        <b>Dog:</b> Dog: With your right side to the camera, get on the floor on
                        your hands and knees. Position yourself so that your shoulders are over your
                        hands and your hips are over your knees. Your feet, knees and hands should
                        all be hip-width apart. Your arms should be straight with your elbows locked
                        comfortably. From this position, let your shoulder blades collapse and come
                        together, tilt your pelvis forward sticking your buttocks out to arch your
                        back down towards the floor and lift your head up and look up towards the
                        ceiling. Take your picture.
                      </li>
                    </ul>
                  </SoftBox>
                  <br />
                  Good job! You are done with the photos. 
                  <br />
                  <br />
                  Now, please attach these photos to an email with your completed{" "}
                  <b>Client Intake Form </b>
                  and send to us at{" "}
                  <b style={{ textDecoration: "underline" }}>
                    <a
                      style={{ color: "dodgerblue", textDecoration: "underline" }}
                      href="mailto: admin@buserinstitute.com"
                    >
                      admin@buserinstitute.com
                    </a>{" "}
                  </b>
                  <br />
                  <br />
                  Please add in the email a description of your current condition(s), discomforts,
                  pain and physical limitations. If this is a <b>follow-up session</b>, please let
                  us know approximately how many times you completed your previous exercise sequence
                  up until the day of taking the submitted photos.  Also let us know how you feel
                  immediately after doing your previous exercise sequence and how long that effect
                  lasts.
                  <br />
                  <br />A Buser Institute therapist will now evaluate your photos and functional
                  tests and create an individualized corrective exercise therapy sequence for you.
                  This sequence will be emailed to you within 5 business days in PDF-format with
                  pictures and instructions and video instructions of your exercises.
                  <br />
                  <br />
                  Don’t hesitate to email us at{" "}
                  <b style={{ textDecoration: "underline" }}>
                    <a
                      style={{ color: "dodgerblue", textDecoration: "underline" }}
                      href="mailto: admin@buserinstitute.com"
                    >
                      admin@buserinstitute.com
                    </a>{" "}
                  </b>
                  with any questions.
                  <br />
                  <br />
                  Thank you,
                  <br />
                  <br />
                  The Buser Institute
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

export default PhotoTherapy;
