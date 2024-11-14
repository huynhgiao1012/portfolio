import { Fragment } from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import MainLayout from "@src/layouts/MainLayout";

import "@src/assets/styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ToastContainer
        theme="dark"
        progressStyle={{ backgroundColor: "#ff724c" }}
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}
