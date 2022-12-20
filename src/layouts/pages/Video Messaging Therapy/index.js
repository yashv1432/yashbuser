// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import brand from "assets/images/Logo-01-rm.png";
import recording from "assets/images/video_tharapyimg/recording.png";
import image1 from "assets/images/video_tharapyimg/image1.jpg";
import image2 from "assets/images/video_tharapyimg/image2.jpg";
import image3 from "assets/images/video_tharapyimg/image3.jpg";
import image4 from "assets/images/video_tharapyimg/image4.jpg";
import image5 from "assets/images/video_tharapyimg/image5.jpg";
import image6 from "assets/images/video_tharapyimg/image6.jpg";
import image7 from "assets/images/video_tharapyimg/image7.jpg";
import image8 from "assets/images/video_tharapyimg/image8.jpg";
import image9 from "assets/images/video_tharapyimg/image9.jpg";
import reddot from "assets/images/video_tharapyimg/reddot.png";
import redsqure from "assets/images/video_tharapyimg/redsqure.png";
import greencircle from "assets/images/video_tharapyimg/greencircle.jpg";
import PurpleCircle from "assets/images/video_tharapyimg/PurpleCircle.png";

// Soft UI Dashboard PRO React base styles

import { Box, DialogContent } from "@mui/material";

function VideoMessagingTherapy() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox  mb={1} >
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
                <h2 style={{ textAlign: "center" }}>Buser Institute Video Messaging Therapy </h2>
                <br />
                <h3 style={{ textDecoration: "underline" }}>
                  Beginning your first full Video Message Therapy recording:
                </h3>
                <br />

                <p style={{textAlign : "justify"}}>
                  Now that you have completed our written <b>Client Intake form </b>either on your
                  Dashboard or our fillable pdf form, we would like to know a little more about your
                  health history and your body’s balances and imbalances. This is the point where
                  you can add any details or insights into your health history, conditions,
                  challenges and goals.
                  <br />
                  <br />
                  <b>
                    Please start your video message recording and answer the following questions in
                    your own words to the best of your ability.
                  </b>
                  <br />
                  <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {recording && (
                    <SoftBox
                      component="img"
                      src={recording}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  <br />
                  {reddot && (
                    <SoftBox
                      component="img"
                      src={reddot}
                      alt="buser institute Logo"
                      width="3rem"
                      borderRadius="12px"
                      // ml={57}
                    />
                  )}
                  </div>
                  <br />
                  <b style={{ textDecoration: "underline" }}>
                    Part I- Pertinent Health History Points to discuss in your Video Message:
                  </b>
                  <br />
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
                    <p>
                      1) Brief (overview by name) list of pertinent past and current 
                      <b>
                        ailments, accidents, traumas, injuries, diseases and/or health conditions 
                      </b>
                      you have had and now have.
                      <br />
                      <br />
                      2) Current <b>conditions that limit you</b> from living a pain-free and active
                      life. Please list these in order of your primary (worst) condition first and
                      then down the list to that which is of the least concern to you. Let us know
                      if you feel that any of these conditions are connected to one another in any
                      way (your opinion and personal insight into your own body matter to us).
                      <br />
                      <br />
                      3) Now, let’s get some deeper detail on each of these conditions one at a
                      time. Here, as you go through each of the above conditions on your list,
                      please elaborate on anything you wrote in the Patient Intake Form with as much
                      detail as you please, but at the least please speak to the following 
                      <b>LMPQRSTU </b>points:
                      <br />
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
                        <p>
                          a. <b>Location:</b> Where do you feel the pain? Where is the pain on your
                          body? Is it on your left, right or centered? Is it on the front, back,
                          inside or outside of your appendage (arm, leg, etc)? Is it deep or
                          superficial? Is it deep in the body part or joint, or superficial on the
                          skin? Can you trace the pain with your finger? Over what area is the pain?
                          For example, is it a pin-point or broad area? Can you trace it on your
                          skin?
                          <br />
                          <br />
                          b. <b>Mechanism: </b> Was there an event or injury that you can recall
                          that contributed to this condition? What and when was the event or
                          multiple events?
                          <br /> <br />
                          c. <b>Provocative/Palliative: </b>Is there anything (position, activity,
                          stress, food, etc) that seems to aggravate your pain or alleviate the
                          pain? Did any of the functional tests seem to aggravate or alleviate your
                          condition(s)?
                          <br /> <br />
                          d. <b>Quality </b>of the pain: How would you describe the pain in your own
                          words? For example, is it sharp or dull, constant, aching, throbbing,
                          burning, stinging, stabbing, shooting, tingling, numb, stiff, cramping,
                          other, etc?  
                          <br /> <br />
                          e. <b>Radiation:</b> Does the pain move around, radiate, “shoot” or travel
                          anywhere in the body from that initial area?
                          <br /> <br />
                          f. <b>Restrictions and Limitations:</b> What things does this condition
                          limit you from doing in your life?
                          <br /> <br />
                          g. <b>Severity:</b> On a scale of 0-10 (0 being no pain, 10 being the
                          worst pain you have ever experienced), what level is it now? What level is
                          it at it’s worst? What level is it at it’s least?
                          <br /> <br />
                          h. <b>Timing, Frequency, Duration:</b> How long have you had this
                          condition? Is it constant or intermittent? If intermittent, how often do
                          you have it, and at what time of day or night do you have it? When did you
                          last have it? If intermittent, how long does the pain last when you have
                          it (duration)?
                          <br /> <br />
                          i. <b>Treatment(s)/Diagnoses:</b> Have you been diagnosed for this
                          condition? By whom and when? What was the diagnosis? Have you been treated
                          for this condition (medication, surgery, therapy, self-care or anything
                          else)? What was the treatment and when were you treated? What was the
                          outcome of this treatment? And did the treatment and any relief last? How
                          long did the relief last?
                          <br /> <br />
                          j. <b>Understanding:</b> What do you think caused this condition? Why do
                          you think this condition is not resolving or going away or healing?
                        </p>
                      </SoftBox>
                      <br />
                      4)<b> Mind and Nutrition: </b> Have you correlated any nutritional or
                      psychological patterns that may be involved with your pain in a positive or
                      negative way? For example, does drinking dairy or eating wheat seem to
                      aggravate your condition? Does stress with work or another situation in your
                      life seem to contribute to flare ups?
                      <br />
                      <br />
                      5)<b> Fitness: </b>How often do you “workout” (perform a physical activity for
                      fitness purposes)? How long do you work out? What type of activity do you do?
                      How does that affect your condition(s)? Here, we consider walking a workout
                      too.
                      <br />
                      <br />
                      6)<b> Life Priorities: </b>On a scale of 0-10, how important is your long-term
                      physical health to you (10 being the highest priority in your life)? What
                      other life priorities come before your physical health?
                      <br />
                      <br />
                      7)<b> Functional Goals: </b>What physical activities would you like to be able
                      to do that you are limited in presently?
                      <br />
                      <br />
                      8)<b> Time management: </b>How much time would you be willing to invest daily
                      to accomplish these goals? For example, 10 minutes, 30 minutes, one hour, two
                      hours per day, etc?
                      <br />
                      <br />
                      9)<b> Expectation management: </b>Given the severity of and duration of your
                      conditions, and given the amount of time you are willing to invest now in
                      addressing them, how much time do you think it might take to accomplish these
                      goals? For example, two weeks, a few months, a year or years?
                    </p>
                  </SoftBox>
                  <br />
                  <br />
                  <b style={{ textDecoration: "underline" }}>
                    Part II- Functional Tests to demonstrate in your Video Message:
                  </b>
                  <br />
                  <br />
                  Now we would like to explore your body’s global function. That is, how well you’re
                  your body works as a whole unit in relation to itself and gravity. Please
                  demonstrate the following Functional Tests in your Video Message and remark on
                  each based on the questions associated with each test:
                  <br />
                  <br />
                  <b>Center of Gravity Test </b>(Central Integration Strategy)
                  <br />
                  <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image1 && (
                    <SoftBox
                      component="img"
                      src={image1}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br />
                  <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/502844135"
                  >
                    https://vimeo.com/manage/videos/502844135
                  </a>
                  <br />
                  <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> To start to explore
                  your own body’s level of function. Stand in the center of a room and feel where
                  your center of gravity falls. Get a feel for how your weight is distributed in
                  your feet. Your weight should fall evenly left to right foot, and evenly front to
                  back. If it doesn’t, that’s an indication that your center of gravity is unevenly
                  distributed.
                  <br />
                  <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Check your body weight
                  from left to right and front to back in your feet. Is your weight distributed
                  50/50% evenly left to right, or more in one foot? What percent is in your right
                  and your left foot?
                  <br />
                  <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Check your weight from
                  front to back in your feet. Is your weight evenly distributed front to back or
                  more in the heels or toes of one (right or left) or both feet?
                  <br />
                  <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> When you take a deep
                  breath, what moves as you breathe in and out? Your stomach, your chest, your back
                  or your shoulders?
                  <br />
                  <br />
                  <b>Standing At Wall 11 Point Test </b>(Vertical Load Joints)
                  <br />
                  <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image2 && (
                    <SoftBox
                      component="img"
                      src={image2}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br />
                  <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/659149731"
                  >
                    https://vimeo.com/manage/videos/659149731{" "}
                  </a>
                  <br />
                  <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> To start to explore
                  your own body’s level of function. Stand at a wall with your feet in a comfortable
                  position and with your heels both touching the wall. Relax your body in this
                  position to allow for your natural posture. That is, do not force any part of your
                  body to touch the wall other than your heels. Check to see if the following body
                  points are naturally touching the wall or not: calves, buttocks, shoulder blades,
                  backs of your shoulders, head.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Check the following body
                  points and tell us if it each is touching the wall or not. If a part is not
                  touching the wall, then tell us how far away from the wall does it feel? You can
                  measure it in finger width if you can.
                  <br /> <br />
                  <b>Hands on Head Test </b>(Head-Spine-Pelvis Chain Integrity)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {brand && (
                    <SoftBox
                      component="img"
                      src={brand}
                      alt="buser institute Logo"
                      width="13rem"
                      borderRadius="12px"
                      // ml={50}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Relax and stand
                  naturally. Now interlace your fingers behind your head and pull your elbows as far
                  back as possible. Relax your stomach while standing in this position.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> When doing Hands on Head
                  (HOH)- Does your buttocks feel like it sticks out more than normal?
                  <br /> <br />
                  <b>Pidgeon Toed Test: </b>(Head-Spine-Pelvis Chain Integrity)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image3 && (
                    <SoftBox
                      component="img"
                      src={image3}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Relax and stand
                  naturally. Now turn your feet inwards so that your big toes touch and your heels
                  point out to the sides approximately 45 degrees each. Be sure to turn your feet
                  inwards equally. Tighten your thighs and lock your knees out to straighten your
                  legs. Relax your stomach while standing in this position.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> When doing Pidgeon Toed
                  Stance (PT)- Does your buttocks stick out more than normal? Do you feel an
                  accentuated curve in your spine? If so, how high does it feel that accentuated
                  curve goes up in your spine?
                  <br /> <br />
                  <b>Hands-on-Head & Pigeon-toed Test: </b>(Head-Spine-Pelvis Chain Integrity)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {brand && (
                    <SoftBox
                      component="img"
                      src={brand}
                      alt="buser institute Logo"
                      width="13rem"
                      borderRadius="12px"
                      // ml={50}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Relax and stand
                  naturally. Now turn your feet inwards so that your big toes touch and your heels
                  point out to the sides approximately 45 degrees each. Be sure to turn your feet
                  inwards equally. Tighten your thighs and lock your knees out to straighten your
                  legs. Relax your stomach while standing in this position. Now interlace your
                  fingers behind your head and pull your elbows as far back as possible. Remember to
                  relax your stomach while standing in this position.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> When doing Both- Does the
                  feeling of the height of the curve you felt in Pidgeon Toed Stance seem to go
                  higher in your spine?
                  <br /> <br />
                  <b>Standing At Wall Elbow Flexes Test </b>(Thoracic Compensation)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image4 && (
                    <SoftBox
                      component="img"
                      src={image4}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/659144495"
                  >
                    https://vimeo.com/manage/videos/659144495{" "}
                  </a>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Stand against a wall
                  with feet hip width apart, pointing straight ahead. The calves, buttocks, upper
                  back and head should be against the wall during the whole exercise. Relax your
                  stomach and extend the upper back. Form half-fists with your hands, thumbs
                  extended. Put your knuckles at the temples, thumbs pointing down. Keeping your
                  wrists straight, curl your elbows from the sides to the front and then back to the
                  wall. The elbows should touch each other in the front position and the wall in the
                  side position. Remember to relax the stomach and keep the upper back and thumbs
                  extended.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Are you able to touch your
                  elbows together at chin level? Do you feel tension anywhere as you do this test
                  when you bring your elbows forwards or backwards?
                  <br /> <br />
                  <b>Walking Hands on Head </b>(Head/Arm/Trunk Compensation Implications)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {brand && (
                    <SoftBox
                      component="img"
                      src={brand}
                      alt="buser institute Logo"
                      width="13rem"
                      borderRadius="12px"
                      // ml={50}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> With your arms in a
                  normal position and just simply walk forward for 5-10 steps and get a feel for you
                  balance, the weight of your legs and the pain you may have when you walk. Now,
                  place your hands behind your head with fingers interlaced and elbows back. Walk
                  forward for 5-10 steps using your normal stride length (don’t think about it).
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Compared to walking with
                  your arms swinging normally at your side, does walking with your hands on your
                  head make you feel more or less stable or does it feel the same? Do your legs feel
                  heavier or lighter? Does this change the pain you experience when walking? Do you
                  sense any other difference?
                  <br /> <br />
                  <b>Sitting Ankle Knee Crossover Test </b>(Pelvic Asymmetry)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image5 && (
                    <SoftBox
                      component="img"
                      src={image5}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/659036537"
                  >
                    https://vimeo.com/manage/videos/659036537{" "}
                  </a>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Sit in a chair with
                  your hips rolled forward to place an arch in your low back(extension). Cross one
                  foot above the opposite knee. While sitting in extension, use the hip muscles of
                  the crossed leg to press that knee toward the floor and HOLD. You should feel this
                  stretch the lateral hip of the crossed leg and some work in your low back from
                  holding the extension position.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Get a sense for the
                  stretch in you hip that this creates. Where do you feel the stretch in your hips?
                  Do you a stretch anywhere else (i.e. in your thigh or back)? Is the stretch in the
                  same area compared from left to right?
                  <br /> <br />
                  <b>Sitting Single Hip Lifts </b>(Locomotor Unit Recruitment)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image6 && (
                    <SoftBox
                      component="img"
                      src={image6}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/659106748"
                  >
                    https://vimeo.com/manage/videos/659106748{" "}
                  </a>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Sit in a chair with
                  knees and feet hip width apart, knees bent 90 degrees and feet pointed straight
                  ahead. Relax your stomach, roll your hips forward to place an arch in the low back
                  and extend your upper back by pushing your chest up and out - the shoulders relax
                  down and back. Make sure you are sitting upright (not leaning forward/backward
                  with the upper body). Hold this position. Stand on the toes of the left foot, and
                  on the heel of the right foot. Holding the above posture begin lifting and
                  lowering the right knee 1-2 inches by using the front hip muscles. Be sure to keep
                  the right foot pointed straight ahead while lifting and do not let the upper body
                  shift to left during the exercise. Repeat for the desired amount of repetitions
                  and switch sides between each set. It is very important to keep the hips rolled
                  forward and the low back arched during the whole exercise. You should feel the
                  work in the front of the hip.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> After doing somewhere
                  between 15-50 lifts on one leg, where do you feel the work of lifting that leg? Is
                  it in the front of the hip, side of your leg, in your back, or anywhere else?
                  Please point to it. What does that work feel like (burn, stretch, pain?). Now,
                  switch legs and do the same to find the work on that side. Please tell us the same
                  information for that other side as a comparison.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Now, switch legs and do
                  the same to find the work on that side. Please tell us the same information for
                  that other side as a comparison.
                  <br /> <br />
                  <b>Static Back Thoracic and Pelvic Rotation Test </b>(Axial Rotation)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image7 && (
                    <SoftBox
                      component="img"
                      src={image7}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/659184549"
                  >
                    https://vimeo.com/manage/videos/659184549{" "}
                  </a>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Lie on your back,
                  legs up on couch or similar. Knees and hips bent 90 degrees (held by the block or
                  chair or couch) with legs and feet relaxed out. Also relax arms out to the sides.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Do your shoulders feel as
                  if they are resting evenly on the floor? Do your hips (upper buttocks) feel as if
                  they are resting evenly on the floor? Is your low back arched or flat on the
                  floor? Does your head rest comfortably on the floor and is your neck relaxed in
                  this position? Lastly, do your knees and feet splay outwards evenly from left to
                  right?
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> When you take a deep
                  breath, what moves as you breathe in and out? Your stomach, your chest, your back
                  or your shoulders?
                  <br /> <br />
                  <b>IML SI Joint Test </b>(Sacro-Iliac Joint Function, IML Cell Column Central
                  Integrative State)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image8 && (
                    <SoftBox
                      component="img"
                      src={image8}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> Lie on your back and
                  put one leg up on the block (or chair or couch you used for Static Back) resting
                  the leg and foot out on the up/bent leg side. Have a partner hold your other leg
                  out aligned straight down from your shoulders and hips. Have your partner hold
                  your foot up to a comfortable position and ideally to the point where your low
                  back on the side of the straight leg flattens into the ground (usually around 45
                  degrees up from the hip angle). Now have your partner slowly lower your leg to the
                  point where your low back comes off of the floor. Make a mental note of how high
                  your straight leg was when your low back came off of the floor. Now switch sides
                  with the block and straight leg and do the same.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> As your straight leg is
                  held up at the 45 degree level, is your low back arched or flat on the floor? If
                  your low back is flat at the 45 degree leg level, and as your straight leg is
                  lowered, at what height of the heel above the ground does the low back arch up
                  from the floor? Now do the same to the other leg and describe the experience as on
                  the first leg, comparing both sides.
                  <br /> <br />
                  <b>Cats and Dogs </b>(Spinal Kinetic Chain Integrity)
                  <br /> <br />
                  <div style={{display : "flex",flexDirection : "column",alignItems : "center"}}>
                  {image9 && (
                    <SoftBox
                      component="img"
                      src={image9}
                      alt="buser institute Logo"
                      width="20rem"
                      borderRadius="12px"
                      // ml={40}
                    />
                  )}
                  </div>
                  <br /> <br />
                  <b>Exercise instruction video: </b>
                  <a
                    style={{ color: "dodgerblue" }}
                    href="https://vimeo.com/manage/videos/503638674"
                  >
                    https://vimeo.com/manage/videos/503638674{" "}
                  </a>
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Instructions:</p> On the floor on your
                  hands and knees. Hands right under shoulders, shoulder width apart, straighten
                  your arms and lock out your elbows. Knees right under hips, hip width apart. Make
                  sure that you are standing with even weight on both hands and knees during the
                  entire exercise. Arch your back up and roll your pelvis under (as if pulling an
                  imaginary tail in between the legs), push your shoulder blades apart, head goes
                  down, flex your chin toward your chest. Then relax your stomach, roll your pelvis
                  forward, arching the back down, pinch your shoulder blades together (but not up
                  towards the neck) and look up. Repeat up and down for 10 repetitions.
                  <br /> <br />
                  <p style={{ textDecoration: "underline" }}>Remarks:</p> Get a sense of the range
                  of motion of your spine from your head to your buttocks. Does your spine feel like
                  it has a free and comfortable range of motion from flexion (Cat) to extension
                  (Dog)? If not, where does it feel restricted and during what motion? Does your
                  pelvis move with your spine? Do your shoulder blades collapse together as you
                  extend into the Dog position with your spine arched towards the floor? If not, how
                  far apart are your shoulder blades in that position of the Dog?
                  <br /> <br />
                  <div>
                  {redsqure && (
                    <SoftBox
                      component="img"
                      src={redsqure}
                      alt="buser institute Logo"
                      width="2rem"
                      position="absolute"
                      // borderRadius="12px"
                      ml={"-37px"}
                    />
                  )}
                  {greencircle && (
                    <SoftBox
                      component="img"
                      src={greencircle}
                      alt="buser institute Logo"
                      width="2rem"
                      position="absolute"
                      // borderRadius="12px"
                      ml={"-37px"}
                      mt={6}
                    />
                  )}
                  {PurpleCircle && (
                    <SoftBox
                      component="img"
                      src={PurpleCircle}
                      alt="buser institute Logo"
                      width="2rem"
                      position="absolute"
                      // borderRadius="12px"
                      ml={"-37px"}
                      mt={12}
                    />
                  )}
                  </div>
                  <b style={{ textDecoration: "underline" }}>Once you are done recording, </b>click
                  again on the <b style={{ color: "red" }}>Red Stop button </b>(red square inside a
                  red circle) to stop your recording. Click on the greenish-blue{" "}
                  <b style={{ color: "green" }}>Check button</b> at the bottom of the screen to
                  approve your video. Now click on{" "}
                  <b style={{ color: "black" }}>your video in your library</b> and send it to us by
                  clicking on the purple <b style={{ color: "purple" }}>Share Video</b> button. To
                  share your video you will need to click the purple{" "}
                  <b style={{ color: "purple" }}>Copy Link</b> button and then paste your video link
                  into an email addressed to us at{" "}
                  <b style={{ textDecoration: "underline" }}>
                    <a
                      style={{ color: "dodgerblue", textDecoration: "underline" }}
                      href="mailto: admin@buserinstitute.com"
                    >
                      admin@buserinstitute.com
                    </a>{" "}
                  </b>
                  Alternatively to the Copy Link button, you can click on the grey{" "}
                  <b style={{ backgroundColor: "lightgrey" }}>More</b> button and choose the{" "}
                  <b style={{ backgroundColor: "#32ebe2" }}>Mail</b> icon from the list to
                  automatically generate an email with your video link in the body already (just add
                  our email address and send).
                  <br /> <br />
                  <b>Great job!</b> You’re done with your video message. We will reply within{" "}
                  <b>2 business days</b> with a corresponding video message including the results of
                  our analysis and evaluation and the recommended exercise therapy sequence you will
                  do for the next phase of your therapy. If you do not see a reply video message
                  within <b>2 business days</b>, please contact us to ensure that your message was
                  delivered and that we have your contact information correct.
                  <br /> <br />
                  Feel free to email{" "}
                  <b style={{ textDecoration: "underline" }}>
                    <a
                      style={{ color: "dodgerblue", textDecoration: "underline" }}
                      href="mailto: admin@buserinstitute.com"
                    >
                      (admin@buserinstitute.com){" "}
                    </a>{" "}
                  </b>{" "}
                  or <b style={{ color: "dodgerblue" }}>call</b> us for assistance in setting up
                  Loom and doing your first Video Message Therapy recording. Once you have done it
                  once, it will be like riding a bike and you will have Buser Institute
                  Physiotherapy at your fingertips, anytime and anywhere!
                  <br /> <br />
                  <h3 style={{ textAlign: "center" }}>
                    Buser Institute Video Messaging Therapy <u>Follow-Up</u> Session
                  </h3>
                  <h3 style={{ textAlign: "center" }}>
                    For all Client Follow-up Sessions <u>after Session 1</u>
                  </h3>
                  <h3 style={{ textAlign: "center", color: "red" }}>
                    **Not for first introduction session**
                  </h3>
                  <h3 style={{ textAlign: "left", marginBottom: 10 }}>
                    Please repeat all of the above in
                  </h3>
                  {/* <br/> */}
                  <h3>
                    <span style={{ textDecoration: "underline", backgroundColor: "lightgrey" }}>
                      Part I- Pertinent Health History Points to discuss in your Video Message
                    </span>
                  </h3>
                  <br />
                  <h3>
                    <span
                      style={{
                        textDecoration: "underline",
                        marginBottom: 8,
                        backgroundColor: "lightgrey",
                      }}
                    >
                      Part II- Functional Tests to demonstrate in your Video Message
                    </span>
                  </h3>
                  {/* <br/> */}
                  <b style={{ textAlign: "center" }}>And add:</b>
                  <h3>
                    <span style={{ textDecoration: "underline", backgroundColor: "lightgrey" }}>
                      Part III- Physiotherapy Exercise Sequence Review:
                    </span>
                  </h3>
                  <br />
                  <p style={{ paddingLeft: "45px" }}>
                    If you have received an Exercise Therapy Sequence before, please demonstrate
                    setting up each exercise in your last sequence. You do not need to do the entire
                    exercise. We recommend just doing 10 seconds for timed exercises or 10
                    repetitions (for exercises with sets and repetitions) of that exercise and then
                    moving on to the next. We will give you <br />
                    feedback and tips on how to get more out of each exercise as you alternate with
                    this sequence in the future.
                  </p>
                  <br /> <br />
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

export default VideoMessagingTherapy;
