import styled from "styled-components";

export const Button = styled.button.attrs({className:"btn"})`
  background-color:transparent;
  border:0;
  padding-left:12px;
  padding-right:12px;
  border-radius: 5px;
  font-size:15px;
  letter-spacing: 0.05em;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:${p => p.family ? p.family : ""};
  cursor:pointer;
  .icon{
    margin-right:7px
  }
  &.btn-blue-opacity{
    background: rgba(58, 134, 255, 0.1);
    color: #3A86FF;
    &:hover{
      background: rgba(58, 134, 255, 0.3);
    }
  }
  &.btn-blue{
    background: #3A86FF;
    color:#fff
  }
  &.h-48{
    min-height:48px;
    font-size:16px;
    letter-spacing: 0.03em;
  }
  &.h-42{
    min-height:42px;
    font-size:16px;
    letter-spacing: 0.03em;
  }
  &.submitted{
    background: rgba(58, 134, 255, 0.1);
    color: #3A86FF;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  &.btn-gradient-blue{
    background:linear-gradient(0deg, rgba(58, 134, 255, 0.1), rgba(58, 134, 255, 0.1)), #FFFFFF;
  }
`
