

import { useEffect, useMemo, useState } from "react";
// react-router components
import {
  Route, useLocation
} from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Routers from "./routes/index";

// Soft UI Dashboard PRO React components

// Soft UI Dashboard PRO React example components
import Configurator from "examples/Configurator";
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// Soft UI Dashboard PRO React routes
import routes from "routes";
// import Routes from
// Soft UI Dashboard PRO React contexts
import {
  setMiniSidenav, useSoftUIController
} from "context";

// Images
import brand from "assets/images/Logo-01.jpeg";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "./store/selectors/selector";
// const Login = lazy(() => import('./layouts/authentication/sign-in/basic'));

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  // const configsButton = (
  //   <SoftBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.5rem"
  //     height="3.5rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="default" color="inherit">
  //       settings
  //     </Icon>
  //   </SoftBox>
  // );
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  const authenticated = useSelector(isAuthenticated);
 
  console.log(authenticated);

  // if (authenticated) {
  // 	return (
  //     <CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={themeRTL}>
  // 				<Index />
  //         {/* <Routers.ProtectedRoutes /> */}
  //      </ThemeProvider>
  //     </CacheProvider>
  // 	);

  // } else {
  // 	return (
  //     <CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={themeRTL}>
  //       <CssBaseline />

  //           <Routers.Routers />

  //       </ThemeProvider>
  //   </CacheProvider>
  // 	);

  // }
  return (
    <>
      {authenticated ? (
        <ThemeProvider theme={themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={brand}
                brandName="Buser Institute"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />

              {/* {configsButton} */}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routers.ProtectedRoutes />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              {/* <Sidenav
                color={sidenavColor}
                brand={brand}
                brandName="Buser Institute"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              /> */}
              <Configurator />
              {/* {configsButton} */}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routers.Routers />
        </ThemeProvider>
      )}
    </>
  );
}
