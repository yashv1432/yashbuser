
/* eslint-disable react/prop-types */

// ProductsList page components

// Images
import ProductCell from "../components/ProductCell";
// import "./style.css";
import NameCell from "../components/NameCell";

// Badges

const dataTableData = {
  columns: [
    
    { Header: "name", accessor: "name" ,padding:"40%", Cell: ({ value: name }) => (
      <NameCell name={name} />
    ),},
    { Header: "note", accessor: "note" },
    { Header: "description", accessor: "description" },
    
    { Header: "Buy now", accessor: "link" , Cell: ({ value: link }) => (
      <ProductCell link={link} />
    ),},
  ],
};

export default dataTableData;
