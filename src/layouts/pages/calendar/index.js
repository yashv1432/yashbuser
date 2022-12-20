// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard PRO React base styles

// Data
import { useMemo } from "react";
import Calendar from "examples/Calendar";
import calendarEventsData from "./data/calendarEventsData";

function calendar() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        {/* <Grid container> */}
        <Grid item xs={12} lg={7}>
          {useMemo(
            () => (
              <Calendar
                header={{ title: "calendar", date: "Monday, 2021" }}
                headerToolbar={false}
                initialView="dayGridMonth"
                initialDate="2021-08-10"
                events={calendarEventsData}
                selectable
                editable
              />
            ),
            [calendarEventsData]
          )}
        </Grid>
        {/* </Grid> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default calendar;
