import styled from "styled-components";
import Photo from '../assets/photo.png';
import Language from "../components/Language";
import Tech from "../components/Tech";
import { Divider } from "../components/PortfolioCard";

const Wrapper = styled.div`
    margin: 4rem auto 2rem auto;
    width: 80%;
    vertical-align: middle;
    @media screen and (max-width: 800px) {
        margin: 2rem auto 1rem auto;
    }
`

const Name = styled.p`
    font-family: 'Covered By Your Grace', cursive;
    font-size: 3rem;
    color: var(--seaGreen);
    margin: 0;
`

const Im = styled.p`
    padding: 0 0.8rem 0 0;
    font-size: 1.3rem;
`

const DividerOne = styled.div`
    width: 60%;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0 4rem;
    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0;
        & p{
            text-align: center;
        }
    }
`

const DividerTwo = styled.div`
    width: 40%;
    margin-top: 2rem;
`

const Btn = styled.button`
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    background-color: #75AEA7;
    border: 0px;
    color: white;
    padding: 0.7rem;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    & a{
        text-decoration: none;
        color: white;
    }
`
const Title = styled.p`
    font-family: 'Covered By Your Grace', cursive;
    text-align: center;
    font-size: 3rem;
    margin: 0.6rem 0.2rem;
    color: var(--yellow);
`

const DividerThree = styled.div`
    width: 50%;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export{Title, DividerThree};

function About() {
    return (
        <>
            <Wrapper className="flex celBlock">
                <DividerOne>
                <img className="profilepic fade-in OnlyCel" alt="photo of Sofia Makita" src={Photo} />
                    <div className="flex NameFix">
                        <Im>Hi, I'm </Im>
                        <Name>Sofia</Name>
                    </div>
                    <p>
                        elit in sit enim. eget porta viverra Nullam in Quisque turpis vel Praesent Ut Nullam tortor. vitae ex sollicitudin. libero, Cras efficitur. nibh consectetur. Hendrerit Cras sed turpis luctus amet, laoreet vitae ex. tincidunt convallis. volutpat nec viverra gravida nec porta Nullam faucibus elit vitae felis.
                        elit in sit enim. eget porta viverra Nullam in Quisque turpis vel Praesent Ut Nullam tortor. vitae ex sollicitudin. libero, Cras efficitur. nibh consectetur. Hendrerit Cras sed turpis luctus amet, laoreet vitae ex. tincidunt convallis. volutpat nec viverra gravida nec porta Nullam faucibus elit vitae felis.
                    </p>
                    <Btn>
                        <a href="https://drive.google.com/file/d/1SQI9e_glOZOruFBN1ev_QvPYqoKRg21B/view?usp=sharing">
                            Download CV
                        </a></Btn>
                </DividerOne>
                <DividerTwo className="NotCel">
                    <img className="profilepic fade-in" alt="photo of Sofia Makita" src={Photo} />
                </DividerTwo>
            </Wrapper>
            <Wrapper className="flex celBlock">
                <Tech/>
                <Language/>
            </Wrapper>
            <Divider className="dividerFix OnlyCel"/>
        </>
    );
}

export default About;