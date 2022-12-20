// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";


// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Soft UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";

// Images
import waves from "assets/images/shapes/waves-white.svg";

function Header({ tabValue, tabHandler }) {
  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
          color: "dark",
        }}
        transparent
        light
      />
      <SoftBox
        position="relative"
        height="50vh"
        borderRadius="xl"
        overflow="hidden"
        bgColor="info"
        variant="gradient"
        m={2}
        pt={12}
        pb={20}
      >
        <SoftBox
          component="img"
          src={waves}
          alt="waves"
          width="105rem"
          position="absolute"
          top={0}
        />
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={10} lg={5}>
            <SoftBox mb={1}>
              <SoftTypography variant="h3" color="white" fontWeight="bold">
                See our pricing
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="body2" color="white" fontWeight="regular">
                You have Free Unlimited Updates and Premium Support on each package.
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}

// Typechecking props for the Header
Header.propTypes = {
  tabValue: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
};

export default Header;
