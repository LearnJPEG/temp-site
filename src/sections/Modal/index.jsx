import { useState } from "react";
import { Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { ReactSVG } from "react-svg";
import { Button } from "~styled/Buttons";
import { Typography } from "~styled/Typography";
import { ModalForm, ModalWrapper } from "./style";

export default function ModalSection({closeEvent,show}){

  const [isCopiedOne, setIsCopiedOne] = useState(false);
  const [isCopiedTwo, setIsCopiedTwo] = useState(false);

  // // This is the function we wrote earlier
  // async function copyTextToClipboard(text) {
  //   if ('clipboard' in navigator) {
  //     return await navigator.clipboard.writeText(text);
  //   } else {
  //     return document.execCommand('copy', true, text);
  //   }
  // }

  // // onClick handler function for the copy button
  // const handleCopyClick = (copyText) => {
  //   // Asynchronously call copyTextToClipboard
  //   copyTextToClipboard(copyText)
  //     .then(() => {
  //       // If successful, update the isCopied state value
  //       setIsCopied(true);
  //       setTimeout(() => {
  //         setIsCopied(false);
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }


  return(
    <ModalWrapper as={Modal} show={show} onHide={closeEvent}>
      <Modal.Header closeButton>
        <Typography size="medium" className="modal-title-custom" weight="800"><ReactSVG src="/images/icons/ethereum.svg"/>CONTRIBUTE ETH</Typography>
      </Modal.Header>
      <Modal.Body>
        <ModalForm action="/">
            <label htmlFor="">Send to</label>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="0x56FDC4765D5307468643b31A322aF2eC9e3A00d3"/>
              <CopyToClipboard text="0x56FDC4765D5307468643b31A322aF2eC9e3A00d3" onCopy={() => {
                setIsCopiedOne(true);
                setTimeout(function(){
                  setIsCopiedOne(false);
                },1500)
              }}>
                <span className="copy-btn">
                  {isCopiedOne ?<img src="/images/icons/check-small.svg" alt="copy-btn"/>: <img src="/images/icons/icon-copy-white.png" alt="copy-btn"/>}
                </span>
              </CopyToClipboard>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="learnjpeg.eth"/>
              <CopyToClipboard text="learnjpeg.eth" onCopy={() => {
                setIsCopiedTwo(true);
                setTimeout(function(){
                  setIsCopiedTwo(false);
                },1500)
              }}>
                <span className="copy-btn">
                  {isCopiedTwo ?<img src="/images/icons/check-small.svg" alt="copy-btn"/>: <img src="/images/icons/icon-copy-white.png" alt="copy-btn"/>}
                </span>
              </CopyToClipboard>
            </div>

            <Button as="span" className="btn-blue w-100 text-uppercase" onClick={closeEvent}>Done</Button>
        </ModalForm>
      </Modal.Body>
      
    </ModalWrapper>
  )
}