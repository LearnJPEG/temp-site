import styled from "styled-components";

export const SiteHeader = styled.div.attrs({className:"site-header"})`
  padding-left: 25px;
  padding-right: 25px;
  padding-top:12px;
  padding-bottom:12px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position:fixed;
  top:0;
  left:0;
  width:100%;
  border-radius: 0px;
  z-index:99;
  background:#fff;
  .site-header-inner{
    display:flex;
    align-items: center;
    svg{
      @media(max-width:992px){
        path:last-child{
          display:none
        }
      }
    }
  }
  @media (min-width:768px){
    padding-left:50px;
    padding-right:50px;
  }
  .site-brand{
    @media (max-width:767px){
      max-width:37px;
    }
  }
`
export const HeaderButton = styled.div`
    display:flex;
    margin-left:auto;
    margin-right:-6px;
    .btn{
      margin-left:6px;
      margin-right:6px;
      &:nth-child(1){
        @media (max-width:500px){
         display:none;
        }
      }
    }
`
