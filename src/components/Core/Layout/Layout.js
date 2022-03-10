import React, { useContext, useState } from "react";
import Head from "next/head";
import useWidth from "~hooks/useWidth"; 
// import favicon from "~image/favicon.png";
import GlobalContext from "../../../context/GlobalContext";
import Header from "~components/Layouts/Header";
export default function Layout({ children }) {
  const { theme } = useContext(GlobalContext);

  const screenSize = useWidth();
  const [mobile,setMobile] = useState(false);
  const [mobileElements,setMobileElements] = useState(false);

  const defaultMetaDescription = "We are an NFT project, which turned into a DAO. We emphasize on conducting weekly and special raffles till perpetuity. Our Access Pass NFT comes with several rarities and rewards + grants its holder an airdrop of our Members Pass NFT."
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <meta property="og:title" content="Raffle DAO"/>
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
