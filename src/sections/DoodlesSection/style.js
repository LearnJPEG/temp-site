import styled from 'styled-components';


export const DoodleStyle = styled.div.attrs({ className: "doodle-block" })`

background: linear-gradient(90deg, #483B85 0%, #483B85 100%);
position: relative;
padding: 125px 20px 25px;

.image-title-block{
    margin-bottom:25px;
}
p{
    font-size: 16px;
    line-height: 175%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin-bottom:15px;
}
.btn{
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    min-height:32px;
    display: inline-flex;
    align-items: center;
    justify-content:center;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    background: #897EE3;
    border: 1px solid #000000;
    border-bottom-width: 3px;
    border-radius: 5px;    
    padding: 8px 18px;
    max-width: 180px;
    margin-top: 15px;
}
.float-badge {
    position: absolute;
    top: 50px;
    left: 25px;
    span{
        font-weight: 700;
        font-size: 10px;
        line-height: 15px;
        min-height:23px;
        display: inline-flex;
        align-items: center;
        justify-content:center;
        letter-spacing: 0.03em;
        color: #483B85;;
        background: #ffffff;
        border: 1px solid #ffffff;
        border-radius: 3px;
        padding-left: 12px;
        padding-right: 12px;
        width: auto;
        max-width: 280px;
        margin-top: 0px;
    }
}
.shape-1 {
    position: absolute;
    top: 50px;
    right: 25px;
    img {
        max-width: 50px;
    }
}
.shape-2 {
    position: relative;
    text-align: center;
    margin-top: 30px;
    img {
        max-width: 179px;
    }
}
.image-slide-wrapper {
    padding-top: 40px;
    img {
        width: 100%;
    }
    
}
@media only screen and (min-width: 1200px) {
    padding: 80px 0px 25px;
    .image-title-block{
        margin-bottom: 30px;
    }
    p{
        font-size: 20px;
    }
    .shape-1 {
        top: 80px;
        right: 50px;
        img {
            max-width: 148px;
        }
    }
    .shape-2 {
        position: absolute;
        top: 50%;
        left: 50px;
        margin-top: 0px;
        img {
            max-width: 267px;
        }
    }
    .float-badge {
        position: absolute;
        top: 80px;
        left: 50px;
    }
    .image-slide-wrapper {
        padding-top: 60px;
    }
}
`