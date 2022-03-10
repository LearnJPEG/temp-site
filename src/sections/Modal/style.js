import styled from "styled-components";


export const ModalWrapper = styled.div`
  .modal-content{
    padding: 20px;
  }
  .modal-header, .modal-body{
    padding: 0;
  }
  .modal-header{
    border-bottom: 0;
    padding-bottom: 18px;
  }
  .modal-title-custom{
    color:#000;
    display:flex;
    align-items:center;
    svg{
      margin-top: -5px;
      transform: scale(1.4);
      margin-right: 7px;
      path{
        fill:#000;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .modal-content{
      padding: 30px;
    }
    .modal-header{
      padding-bottom: 24px;
    }
    
  }
`

export const ModalForm = styled.form`
.form-group{
  position:relative;
  margin-top:12px;
}

.qr-code{
    padding-top:30px;
    padding-bottom:30px;
}
label{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 1);
}
  .form-control{
    background: #F4F4F6;
    font-size: 12px;
    line-height: 24px;
    padding-right:45px;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.75);
    height:45px;
    border-color:rgba(0, 0, 0, 0.25);
    font-weight:700;
    &::placeholder{
      color: rgba(0, 0, 0, 0.75);
    }
  }
  .copy-btn{
    position:absolute;
    top:0;
    right:0;
    width:45px;
    height:100%;
    background: #3A86FF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0px 4px 4px 0px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    img{
      width:21px;
    }
  }
  .btn{
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    padding-top: 11px;
    padding-bottom: 11px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .btn-blue {
    margin-top: 18px;
  }

  @media only screen and (min-width: 1200px) {
    label{
      font-size: 16px;
    }
    .form-group{
      margin-top:18px;
    }
    .btn{
      font-size: 14px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    .btn-blue {
      margin-top: 24px;
    }
    
  }
`