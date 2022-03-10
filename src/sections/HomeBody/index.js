import { Button } from "~styled/Buttons";
import React, { useState, useRef, useEffect } from "react"
import { Typography } from "~styled/Typography";
import Countdown from "react-countdown";
import Count from "./count";
export default function HomeBody(){
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitClick = () => setSubmitted(true);
  return(
    <>
    <div className="hero-content-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title-block text-center">
              <div className="icon">
                <img src="/images/newsletter-icon.png" alt="newletter-icon" />
              </div>
              <Typography size="extraLarge" color="#000">LearnJPEG is going live in </Typography>
              <p className="count-block">
                <Countdown date={"2022-08-17T00:00:00"}
                  intervalDelay={0}
                  precision={3}
                  renderer={Count}/>
              </p>
              <h2 className="title-2"></h2>
              <p> <span>🎉</span>  Come Learn, Earn & Build with us. Our goal is to onboard millions of new users from Web2 to Web3 over the next few years. Don’t miss this epic opportunity — follow us on <a href="https://www.twitter.com/LearnJPEG" target={"_blank"}>Twitter</a> for updates.</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-10">
            <form action="#">
              <div className="form-wrapper">
                <div className="form-single">
                  <input type="text" className="text form-control" placeholder="Full Name *" />
                </div>
                <div className="form-single">
                  <input type="text" className="text form-control" placeholder="Email Address *" />
                </div>
                <div className="form-single">
                  <input type="text" className="text form-control" placeholder="ENS/Wallet Address" />
                </div>
                <div className="form-single">
                  {submitted?<Button className="btn w-100 h-48 submitted" as="span"> Your details have been submitted successfully.</Button> :<Button className="btn-blue w-100 h-48" as="span" onClick={handleSubmitClick}><span className="icon"><img src="/images/icons/icon-mail.png"/></span> ALERT ME</Button>}
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


