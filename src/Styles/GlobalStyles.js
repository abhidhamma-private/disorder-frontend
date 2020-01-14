import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export default createGlobalStyle`
    ${reset};
    * {
        font-family:"KakaoL";
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    body {
        margin:0;
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.fontColor};
        font-size:14px;
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

`;
