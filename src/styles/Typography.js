const { default: styled } = require("styled-components");

export const Typography = styled.div`
  font-family: ${p=> p.family ? p.family : `'Roboto', sans-serif`};
  font-weight: ${p=> p.weight ? p.weight : "900"};
  ${p => p.size === "large"?`
      color: #1C1C1E;
      line-height: 125%;
      font-size: 20px;
      @media (min-width:576px) {
          font-size: 30px;
      }
      @media (min-width:991px) {
          font-size: 42px;
      }
  `:""
}
  ${p => p.size === "extraLarge"?`
      line-height: 125%;
      color: ${p.color? p.color : "#FFFFFF"};
      font-size: 26px;
      @media (min-width:576px) {
          font-size: 36px;
          letter-spacing: 0.05em;
      }
      @media (min-width:991px) {
          font-size: 54px;
      }
  `:""
}
${p => p.size === "normalText"?`
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`:""}
${p => p.size === "medium"?`
  font-size: 22px;
  line-height: 160%;
  letter-spacing: 0.05em;

  color: #FFFFFF;

`:""}

`