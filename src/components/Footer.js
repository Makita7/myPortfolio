import styled from "styled-components";
import {IoLogoWhatsapp} from 'react-icons/io'
import { IoMdMail } from "react-icons/io";
import {FaLinkedin} from 'react-icons/fa'

const FooterCont = styled.div`
    height: 8rem;
    background-color: white;
    justify-content: center !important;
`
const Wrapper = styled.div`
    justify-content: center;
    display: flex;
`

const Lets = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 1.5rem 0.5rem;
    color: var(--black);
`

const Connect = styled.p`
    font-family: 'Covered By Your Grace', cursive;
    font-size: 3rem;
    margin: 0.6rem 0.2rem;
    color: var(--yellow);
`

const Social = styled.ul`
    color: blue;
    justify-content: center;
    padding: 0;
    margin-top: 0;
    & a{
        margin: 0 0.5rem;
    }
`

function SiteFooter() {
    return (
        <FooterCont>
            <Wrapper>
                <Lets>Let's</Lets>
                <Connect>Connect</Connect>
            </Wrapper>
            <Social className="flex">
                <a className="cobalt" href="https://www.linkedin.com/in/sofia-makita-348a29172/">
                    <FaLinkedin size={28}/>
                </a>
                <a className="seaGreen" href="">
                    <IoMdMail size={28} />
                </a>
                <a className="olive" href="">
                    <IoLogoWhatsapp size={28}/>
                </a>
            </Social>
        </FooterCont>
    );
}

export default SiteFooter;