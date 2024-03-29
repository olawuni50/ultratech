import styled from "styled-components" 
import {FaMagento} from "react-icons/fa"
import {Link} from "react-router-dom";
import {Container} from "./globalStyles"
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import {motion} from "framer-motion";

export const Nav = styled.nav`
background: ${({scrollNav})=>(scrollNav ? "#101522":"transparent")};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
margin-top: -80px;
`

export const NavBarContainer = styled(Container)`
display: flex;
justify-content:space-between;
height: 80px;


${Container} 
`;

export const NavLogo = styled(motion.LinkS)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2.5rem;
display: flex;
align-items: center;
`
export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem; 
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){ 
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style:none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click})=>(click ? 0: '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}

`;
export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}
@media screen and (max-width: 960px){
    width: 100%;
    &:hover {
        border:none;
    }
}
`

export const NavLinks = styled(LinkS)`
color: #fff;
display:flex;
align-items:center;
text-decoration: none; 
padding: 0.5rem 1rem;
height: 100%;
font-size: 1.5rem;

&.active{
    border-bottom: 3px solid #4b59f7
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
     &:hover{
         color: #4b59f7;
         transition: all 0.3s ease;
     }
}
`;

// export const NavItemBtn = styled.li`
// border-radius:50px;

// @media screen and (max-width: 960px){
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 120px;
// }`;

// export const NavBtnLink = styled(LinkR)`
// display: flex;
// justify-content: center;
// align-items: center;
// text-decoration: none;
// padding: 8px 16px;
// height: 100%;
// width: 100%;
// border:none;
// outline: none;`

export const NavText = styled.div`
display:grid;
justify-self:flex-end;
text-align:center;
margin:2rem 4rem;
padding: 0 1rem;
height: 100%;


@media screen and (max-width: 768px){
    display:none;
}
`

export const NavH1 =styled.h1`
font-size: 20px;
color:#fff;
`

export const NavP = styled.p`
font-size:18px;
color:#fff;
`

