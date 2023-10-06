"use client";

import React, { useEffect } from "react";
import nProgress from "nprogress";
import Router from "next/router";

const Page = () => {
  useEffect(() => {
    // Configure nProgress
    nProgress.configure({
      showSpinner: false,
      template: `<div className="bar"></div>`,
    });

    // Binding events
    Router.events.on("routeChangeStart", () => {
      nProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
      nProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      nProgress.done();
    });

    return () => {
      // Unbind events when component unmounts
      Router.events.off("routeChangeStart", () => {
        nProgress.start();
      });
      Router.events.off("routeChangeComplete", () => {
        nProgress.done();
      });
      Router.events.off("routeChangeError", () => {
        nProgress.done();
      });
    };
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      Default
    </div>
  );
};

export default Page;
