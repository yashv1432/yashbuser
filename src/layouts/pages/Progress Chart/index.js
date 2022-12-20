// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";




// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
import breakpoints from "assets/theme/base/breakpoints";

// Data
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import BaseLayout from "../account/components/BaseLayout";

function ProgressChart() {
  const { values } = breakpoints;
 

  return (
    <BaseLayout>
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                Welcome in BUSER Institute
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      </BaseLayout>
  );
}

export default ProgressChart;
