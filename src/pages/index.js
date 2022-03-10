import { PageWrapper } from "~components/Core";
import DoodlesSection from "~sections/DoodlesSection";
import HomeBody from "~sections/HomeBody";
import IntroSection from "~sections/IntroSection";

const pageInfo = {
  headerMini: false,
  footerMini: false,
  pageTitle: "Home | RaffleDAO",
  bodyClass: "",
  metaDescription: "If you miss the first step of initial setup, the demo import will won't import all pages how much time you do it unless you do the whole process again with clean installation."
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
