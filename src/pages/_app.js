import { Layout } from "~components"
import Router from "next/router";
import "~scss/bootstrap.scss";
import "~scss/main.scss";
import { GlobalProvider , GlobalContext} from "../context/GlobalContext";
import { useEffect, useState } from "react";
// import AOS from "aos";
import "~fonts/fontawesome-5/css/all.min.css";
import '@szhsin/react-menu/dist/core.css';
function MyApp({ Component, pageProps }) {
  
  const [loader,setLoader] = useState(true);
  useEffect(() => {
      setTimeout(function(){
        setLoader(false);
      });
  },[]);

Router.onRouteChangeStart = (url) => {
  setLoader(true);
}

Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setTimeout(setLoader(false) , 1000) // set state to pass to loader prop
};

  return(
    <>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
    </>
  )
}

export default MyApp