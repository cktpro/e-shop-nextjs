import Router from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Loader from "@/components/loader";
import { useUserStore } from "@/zustand/store";
// Import styles
import "@/styles/globals.css";
import "nprogress/nprogress.css";
export default function App({ Component, pageProps }) {
  const user = useUserStore();
  useEffect(() => {
    console.log('◀◀◀ getme ▶▶▶');
    user.getMe();
  }, []);
  return (
    <>
      <Loader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
