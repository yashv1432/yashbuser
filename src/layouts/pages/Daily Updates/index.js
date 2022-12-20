// @mui material components

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useDispatch } from "react-redux";
import DailyTables from "./components/tableUI";

function DailyUpdates() {
 

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox>
        <SoftBox>
          <DailyTables />
        </SoftBox>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default DailyUpdates;
