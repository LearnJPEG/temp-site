// import VideoEmbed from "~components/MiniComponents/VideoEmbed";
import { Typography } from "~styled/Typography";
import { IntroWrapper } from "./style";
// import ReactPlayer from 'react-player'
import { useState } from "react";
import { Button } from "~styled/Buttons";
export default function IntroSection(){
  return(
  <IntroWrapper>
  <div className="container">
    <div className="row">
      <div className="col-xl-7 col-lg-7 col-md-10 order-lg-1">
        <div className="content-block">
          <Typography size="large" className="title" weight="900" as="h2">INTRODUCTION</Typography>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-md-10 order-lg-1">
        <div className="content-block">
          <p>NFT trading activity has more than doubled between July and August 2021, according to the number of unique wallets that either bought or sold an NFT. By August 2021, there were roughly 280,000 unique buyers or sellers (the source does not distinguish between the two - after a growth of 185,000 unique wallets).</p>
          <p>The current adaptation rate for NFTs has been quite good but not the best. We have seen a lot of Celebrities &amp; Influencers purchasing NFTs, which in turn bought in a lot of new users. But a majority of these New Users never convert to buying &amp; selling.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-8 col-xs-10 order-lg-2">
        <div className="intro-image-block">
          <img src="/images/gifs/introduction-image.gif" alt="copy-btn" />
          {/* <VideoEmbed embedId={"LZPSHVoKnSE"}/> */}
          {/* <ReactPlayer url= '/video/brand-video.mp4' 
            width='100%'
            height='100%'
            volume={.8}
            muted={true}
            loop={true}
            controls={true}
            playing
            /> */}
          <Button as="a" href="https://www.twitter.com/LearnJPEG" target="_blank" className="btn w-100 h-48 btn-gradient-blue"><span className="icon"><img src="/images/icons/icon-twitter-2.png"/></span>FOLLOW US ON TWITTER</Button>
        </div>
      </div>
    </div>
    <div className="single-intro-block">
      <Typography size="large" className="title" weight="900" as="h2">THE PROBLEMS</Typography>
        <div className="list-block">
      <p className="fw-500">Some of the problems faced by these New Users are :</p>
              <ul>
                <li className="list">Lack of Education</li>
                <li className="list">Lack of Information</li>
                <li className="list">Too many Scammers</li>
              </ul>
        </div>
    </div>
    <div className="single-intro-block">
      <Typography size="large" className="title" weight="900" as="h2">OUR SOLUTIONS</Typography>
      <p>Enter LearnJPEG. We have designed &amp; are developing a NFT &amp; Web3 Education platform with a lot of added utilities + benefits for learners. </p>
        <div className="list-block">
          <p>Some of the main solutions being offered by our platform will be :</p>


            <ul>
              <li className="list">Learn &amp; Earn - <p className="fw-normal d-inline">
              This will allow new users to enrol into NFT + Web3 courses and earn in-app coins for successfully completing the course. These courses will contain a variety of content, such as text guides, videos, podcasts &amp; more. The course will be followed by some questions which would authenticate whether a user really read &amp; did not skip. On successful completion of the course, the user would receive a fixed no. of coins. These coins can be converted into Partner Artist NFTs, merch or other goodies using our Rewards Store. All courses on our platform will be free of cost and we promise to never display any ads.</p></li>
              <li className="list">Profiles - <span className="fw-normal d-inline">A</span></li>
              <li className="list">Market - <span className="fw-normal d-inline"> A</span></li>
              <li className="list">Glossary - <span className="fw-normal d-inline"> A</span></li>
              <li className="list">Portfolio - <span className="fw-normal d-inline"> A</span></li>
              <li className="list">Blog - <span className="fw-normal d-inline"> A</span></li>
              <li className="list">Newsletter - <span className="fw-normal d-inline"> A</span></li>
            </ul>
        </div>
    </div>
    <div className="single-intro-block">
      <Typography size="large" className="title" weight="900" as="h2">OUR MISSION</Typography>
      <p>We as a company believe in providing NFT &amp; Web3 education to the masses and that is the reason behind all our courses being completely Free of Cost. Our mission is to Educate &amp; Onboard 3,000,000+ New Web3 Users in the next few years through our platform &amp; our resources.</p>
    </div>
  </div>
</IntroWrapper>
  )
}

