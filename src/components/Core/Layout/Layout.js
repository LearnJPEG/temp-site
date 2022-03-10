import React, { useContext, useState } from "react";
import Head from "next/head";
import useWidth from "~hooks/useWidth"; 
import favicon from "images/favicon.png";
import GlobalContext from "../../../context/GlobalContext";
import Header from "~components/Layouts/Header";
export default function Layout({ children }) {
  const { theme } = useContext(GlobalContext);

  const screenSize = useWidth();
  const [mobile,setMobile] = useState(false);
  const [mobileElements,setMobileElements] = useState(false);

  const defaultMetaDescription = "Come Learn, Earn & Build with us. Our goal is to onboard millions of new users from Web2 to Web3 over the next few years. Learn more at http://docs.learnjpeg.com"
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta property="og:title" content="LearnJPEG | Coming Soon"/>
        <meta property="og:description" content={theme.metaDescription ? theme.metaDescription : defaultMetaDescription}/>
        <meta property="og:image" content="/images/social-image.jpg"/>
        {/* <title>{theme.pageTitle}</title> */}
        <title>LearnJPEG | Coming Soon</title>
        <link rel="icon" type="image/png" href="images/favicon.png" />
      </Head>
      <div
        className={`site-wrapper overflow-hidden ${
          theme.pageWrapperClass ? "" + theme.pageWrapperClass : ""
        }${mobile && mobileElements ? " sidebar-open":""}`}
      >
        <Header screenSize={screenSize} mobile={mobile} setMobile={setMobile} mobileElements={mobileElements} setMobileElements={setMobileElements}/>
        <main className="page-main">
          {children}
        </main>
      </div>
    </>
  );
}
