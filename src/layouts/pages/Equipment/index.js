// @mui material components

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Card } from "@mui/material";

import dataTableData from "layouts/pages/Equipment/data/dataTableData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEquipmentListAction } from "store/actions/actions";
import DataTable from "./components/DataTable";

function Equipment() {
  const dispatch = useDispatch();
  const equipmentsList = useSelector((state) => state.auth.equipmentsList);

  useEffect(() => {
    dispatch(
      getEquipmentListAction({
        pageNo: 1,
        limit: 100,
        searchText: "",
      })
    );
  }, []);
  // console.log("equipmentsList",equipmentsList)

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox pt={6} pb={3}>
        <Card>
          <SoftBox p={3} lineHeight={1}>
            <SoftTypography variant="h5" fontWeight="medium" mb={2}>
              Equipment Table
            </SoftTypography>
            <SoftTypography variant="h6" fontWeight="regular"  >
              <p style={{textAlign : "justify"}}><b style={{ textDecoration: "underline" }}>Please note:</b> The below is an extensive list of equipment from 3<sup>rd</sup> party vendors that
              represents <b>some</b> of the equipment that you may use in the course of your therapy with
              the Buser Institute. Not all clients need all of this equipment, and some don’t need
              any of it. It is recommended that you <b style={{ textDecoration: "underline" }}>DO NOT order any of this equipment unless it is
              specifically recommended to you by your Buser Institute therapist.</b> More often than
              not, clients only need a total of two or three basic and relatively inexpensive pieces
              of equipment (i.e. a yoga mat, block and strap) to perform their corrective exercises.
              Only if they cannot otherwise furnish a substitute from items they already own do we
              use this list to assist in procuring the equipment they specifically need.</p>
            </SoftTypography>
          </SoftBox>
          <DataTable
            table={{ ...dataTableData, rows: equipmentsList }}
            canSearch
            entriesPerPage={{
              defaultValue: 10,
              entries: [10, 15, 20, 25],
            }}
          />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Equipment;
