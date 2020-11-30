import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import Layout from "../components/layout/layout";
import { Spinner } from "../components/ui";
import { theme } from "../utility";
import BookingContext from "../context/bookingFetch";
import DashboardFetch from "../context/dashboardFetch";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const handleRouteChange = () => {
      setLoading(true);
    };
    const handleRouteComplete = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", () => handleRouteChange);
      router.events.off("routeChangeStart", () => handleRouteComplete);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {loading ? (
          <Spinner />
        ) : (
          <DashboardFetch>
            <BookingContext>
              <Layout>
                <CssBaseline />
                <Component {...pageProps} />
              </Layout>
            </BookingContext>
          </DashboardFetch>
        )}
      </StylesProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
