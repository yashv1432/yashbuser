// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function DataTableBodyCell({ noBorder, align, children,width }) {
  const { light } = colors;
  const { size } = typography;
  const { borderWidth } = borders;

  return (
    <SoftBox
      component="td"
      textAlign={align}
      fontSize={size.sm}
      borderBottom={noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`}
      py={1.5}
      px={3}
      width={width}
    >
      <SoftBox
        display="inline-block"
        // width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
  width : PropTypes.string
};

export default DataTableBodyCell;
