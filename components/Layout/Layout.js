import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Navbar />
            { children }
            <Footer />
        </>

    )
}

export default Layout;