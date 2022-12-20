// Soft UI Dashboard PRO React icons
import Basket from "examples/Icons/Basket";
import CreditCard from "examples/Icons/CreditCard";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Document from "examples/Icons/Document";
import Office from "examples/Icons/Office";
import Shop from "examples/Icons/Shop";
import SpaceShip from "examples/Icons/SpaceShip";

const routes = [
  {
    type: "collapse",
    name: "Informed Consent",
    key: "informedconsent",
    route: "/informedconsent",
    icon: <Shop size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Welcome",
    key: "welcome",
    route: "/welcome",
    icon: <Shop size="12px" />,
    noCollapse: true,
  },
  { type: "divider", key: "divider-2" },
  { type: "title", title: "", key: "title-msg" },
  
  {
    type: "collapse",
    name: "Services",
    key: "services",
    route: "/services",
    icon: <Office size="12px" />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Client Intake Form",
    key: "clientintakeform",
    route: "/clientintakeform",
    icon: <Office size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    route: "/calendar",
    icon: <Basket size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Book Appointments",
    key: "bookappointments",
    route: "/bookappointments",
    icon: <Basket size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Upcoming Appointments",
    key: "upcomingappointments",
    route: "/upcomingappointments",
    icon: <Document size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Photo Therapy",
    key: "phototherapy",
    route: "/phototherapy",
    icon: <Document size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Video Messaging Therapy",
    key: "videomessagingtherapy",
    route: "/videomessagingtherapy",
    icon: <SpaceShip size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Live Video Therapy Portal",
    key: "livevideoportal",
    route: "/livevideoportal",
    icon: <CustomerSupport size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Photos and Videos",
    key: "photovideo",
    route: "/photovideo",
    icon: <CreditCard size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Labs",
    key: "labs",
    route: "/labs",
    icon: <Shop size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sequences",
    key: "sequences",
    route: "/sequences",
    icon: <Basket size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Nutrition",
    key: "nutrition",
    route: "/nutrition",
    icon: <Office size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Daily Updates",
    key: "dailyupdates",
    route: "/dailyupdates",
    icon: <Shop size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Progress Chart",
    key: "progresschart",
    route: "/progresschart",
    icon: <Basket size="12px" />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Equipment",
    key: "equipment",
    route: "/equipment",
    icon: <CreditCard size="12px" />,
    noCollapse: true,
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "", key: "title-docs" },
  {
    type: "collapse",
    name: "Contact Us",
    key: "contactus",
    route: "/contactus",
    icon: <CreditCard size="12px" />,
    noCollapse: true,
  },
];

export default routes;
