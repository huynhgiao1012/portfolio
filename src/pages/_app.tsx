import type { AppProps } from "next/app";

import MainLayout from "@src/layouts/MainLayout";

import "@src/assets/styles/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
