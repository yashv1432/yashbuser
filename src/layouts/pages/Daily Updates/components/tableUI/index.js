import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components

import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import { getPainListAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "../DataTable";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";

function DailyTables() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const paindata = useSelector((state) => state.auth.painData);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  useEffect(() => {
    dispatch(
      getPainListAction({
        token: token,
      })
    );
  }, []);

  const DailyTableData = {
    columns: [
      { Header: "date", accessor: "Date" },
      { Header: "Sequence", accessor: "Sequence" },
      { Header: "time of Sequence", accessor: "timeofSequence" },
      { Header: "Nutrition", accessor: "Nutrition" },
      { Header: "time of Nutrition", accessor: "timeofNutrition" },

      { Header: "Head pain Level", accessor: "HeadpainLevel" },
      { Header: "Head pain Frequency", accessor: "HeadpainFrequency" },
      { Header: "Head pain Duration", accessor: "HeadpainDuration" },

      { Header: "Neck pain Level", accessor: "NeckpainLevel" },
      { Header: "Neck pain Frequency", accessor: "NeckpainFrequency" },
      { Header: "Neck pain Duration", accessor: "NeckpainDuration" },

      { Header: "Hip pain Level", accessor: "HippainLevel" },
      { Header: "Hip pain Frequency", accessor: "HippainFrequency" },
      { Header: "Hip pain Duration", accessor: "HippainDuration" },

      { Header: "Lower pain Level", accessor: "LowerpainLevel" },
      { Header: "Lower pain Frequency", accessor: "LowerpainFrequency" },
      { Header: "Lower pain Duration", accessor: "LowerpainDuration" },
      { Header: "action", accessor: "action" },
    ],

    rows: paindata,
  };
  console.log("paindata", paindata);
  return (
    <SoftBox pt={6} pb={3}>
      <Card>
        <SoftBox p={3} lineHeight={1}>
          <SoftTypography variant="h5" fontWeight="medium">
            Your Daily Update Datatable
          </SoftTypography>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            data about Your Sequence , Nutrition , Pains
          </SoftTypography>
          <SoftBox display="flex" justifyContent="flex-end" >
            <SoftButton
              variant="gradient"
              color="info"
              component={Link}
              to="/dailyupdates/dailyupdatesform"
            >
              Add
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <DataTable
          table={DailyTableData}
          canSearch
          entriesPerPage={{
            defaultValue: 10,
            entries: [10, 15, 20, 25],
          }}
        />
      </Card>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </SoftBox>
  );
}

export default DailyTables;
