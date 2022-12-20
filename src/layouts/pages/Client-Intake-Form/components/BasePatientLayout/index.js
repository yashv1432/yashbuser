

import { useState, useEffect } from "react";


import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import FirstForm from "../FirstForm";
import SecondForm from "../SecondForm";
import ThirdForm from "../ThirdForm";

function BasePatientLayout({ stickyNavbar, children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute={!stickyNavbar} isMini />
      <SoftBox mt={stickyNavbar ? 3 : 10}>
        <Grid container>
          <Grid item xs={12} sm={8} lg={4}>
            <AppBar position="static">
              <Tabs style={{marginTop : "10px"}} orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab label="First Form" />
                <Tab label="Second Form" />
                <Tab label="Third Form" />
                {/* <Tab label="Backup" /> */}
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </SoftBox>
      <SoftBox py={3}>
        {tabValue === 0 && (
          // When the user clicks on Test One or Test Two, update the state
          // to display Tab 2

          <FirstForm />
        )}
        {tabValue === 1 && <SecondForm />}
        {tabValue === 2 && <ThirdForm />}
        {/* {tabValue === 1 && <SecondForm />} */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

// Setting default values for the props of BasePatientLayout
BasePatientLayout.defaultProps = {
  stickyNavbar: false,
};

// Typechecking props for BasePatientLayout
BasePatientLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BasePatientLayout;
