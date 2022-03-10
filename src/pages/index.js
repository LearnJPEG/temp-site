import { PageWrapper } from "~components/Core";
import DoodlesSection from "~sections/DoodlesSection";
import HomeBody from "~sections/HomeBody";
import IntroSection from "~sections/IntroSection";

const pageInfo = {
  headerMini: false,
  footerMini: false,
  pageTitle: "LearnJPEG | Coming Soon",
  bodyClass: "",
  metaDescription: "Come Learn, Earn & Build with us. Our goal is to onboard millions of new users from Web2 to Web3 over the next few years. Learn more at http://docs.learnjpeg.com"
}
export default function HomePage() {
  return (
    <PageWrapper themeConfig={pageInfo}>
        <HomeBody/>
        <IntroSection/>
        <DoodlesSection/>
    </PageWrapper>
  )
}
