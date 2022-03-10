import styled from "styled-components";

export const IntroWrapper = styled.div`
  background-color: #3A86FF;
  color: #FFFFFF;
  padding-top: 40px;
  padding-bottom: 30px;
  @media (min-width:575px) {
    padding-top: 92px;
  padding-bottom: 92px;
  }
  .content-block{
    @media(min-width:992px) and (max-width:1200px){
      padding-right:20px;
    }
    @media(min-width:1400px){
      padding-right:65px;
    }
      .icon{
          margin-bottom: 40px;
          img{
              width: 100%;
          }
      }
  }
  .title{
    color:#fff;
    letter-spacing:0.03em;
    padding-bottom: 20px;
  }
  p{
    margin-bottom:14px;
    font-weight: 400;
    line-height: 175%;
    font-size: 16px;
    @media(min-width:1200px){
      font-size: 20px;
    }
  }
.list-block{
  p{
    margin-bottom:0;
  }
  .list-title{
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    letter-spacing: 0.05em;
    margin-bottom:10px;
}
  ul{
      padding-left: 0;
      margin-left:21px;
      .list{
          font-weight: 500;
          letter-spacing: 0.05em;
        
          line-height: 175%;
          font-size: 18px;
          @media(min-width:1200px){
            font-size: 20px;
          }
      }
  }
}
.intro-image-block{
  >div{
    width: 100%!important;
  }
 @media (min-width:1400px){
    padding-left:30px;
 }
  img{
      width: 100%;
      border-radius: 15px;
      @media(min-width:576px){
        border-radius: 20px;
      }
  }
  .btn{
    display:flex;
    margin-top:30px;
    @media(min-width:576px){
      display:none
    }
  }
}
.single-intro-block{
  margin-top:50px;
}
`