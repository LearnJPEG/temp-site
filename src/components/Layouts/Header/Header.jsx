import { useState } from "react";
import { ReactSVG } from "react-svg";
import ModalSection from "~sections/Modal";
import { Button } from "~styled/Buttons";
import { HeaderButton, SiteHeader} from "./style";
// import Link from "next/link";
export default function Header() {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
    <>
    <SiteHeader>
      <div className="site-header-inner">
          <div className="site-brand">
            <ReactSVG src="/images/site-brand.svg"/>
          </div>
          <HeaderButton>
            <Button as="a" href="https://www.twitter.com/LearnJPEG" target='_blank' className="btn-blue-opacity"><span className="icon"><img src="/images/icons/icon-twitter.svg" alt="icon" /></span>Follow us</Button>
            <Button as="a" href="https://docs.learnjpeg.com" target='_blank' className="btn-blue-opacity">️📄 Docs</Button>
            <Button className="btn-blue"  onClick={handleShow}><span className="icon"><img src="/images/icons/ethereum.svg" alt="" /></span>Contribute</Button>
          </HeaderButton>
      </div>
    </SiteHeader>
    
    <ModalSection closeEvent={handleClose} show={modalShow}/></>
  )
}