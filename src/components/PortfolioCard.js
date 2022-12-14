
import styled from 'styled-components';
import Img from '../assets/card-img.png';
import Figma from '../assets/figma.svg';
import PNPM from '../assets/pnpm.svg'
import { BsGithub } from 'react-icons/bs';
import { SiHtml5, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiYarn, SiCss3, SiReact } from 'react-icons/si';
import { FaSass, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Wrapper =  styled.div`
    margin: 4rem auto 2rem auto;
    width: 80%;
    vertical-align: middle;
    @media screen and (max-width: 800px){
        margin: 2rem auto;
    }
`

const DividerTwo = styled.div`
    width: 60%;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0 4rem;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
    @media screen and (max-width: 800px){
        padding: 0 0;
    }
`

const DividerOne = styled.div`
    width: 40%;
    margin-top: 2rem;
    @media screen and (max-width: 1200px){
        width: 100%;
    }
`
const ProjectT = styled.h5`
    font-family: 'Covered By Your Grace',cursive;
    font-size: 3rem;
    margin: 0;
    color: var(--yellow);
    font-weight: 500;
    @media screen and (max-width: 1200px){
        width: 100%;
        text-align: center;
        margin-top: 1rem;
    }
`

const Description = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.2rem;
    @media screen and (max-width: 1200px){
        text-align: center;
    }
    @media screen and (max-width: 800px){
        font-size: 1rem;
    }
`
const Cols = styled.div`
    width: 33%;
    flex-wrap: wrap;
    & a{
        text-decoration: none;
        margin: 3rem 0;
    }
    @media screen and (max-width: 800px){
        width: 100% !important;
        margin: 1.5rem 0.2rem 0.6rem 0.2rem;
    }
`

const SmallTitles = styled.p`
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    color: var(--cobalt);
    margin: auto 0.5rem;
    font-size: 1.2rem;
    @media screen and (max-width: 800px){
        margin: 4rem 0.5rem 0 0.5rem;
    }
`

const App = styled.p`
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    color: var(--cobalt);
    font-size: 2rem;
    margin: auto 0;
    @media screen and (max-width: 800px){

    }
`

const Tech = styled.p`
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    color: var(--cobalt);
    font-size: 2rem;
    margin: 2.8rem 0 auto;
    @media screen and (max-width: 800px) {
        margin: 0 0 auto;
    }
`

const PIcon = styled.img`
    height: 2.5rem;
    margin-left: 0.5rem;
`

const MoreDetail = styled.button`
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

const Divider = styled.div`
    border-bottom: 0px #ababab solid;
    height: 2rem;
    content-visibility: hidden;
    @media screen and (max-width: 800px) {
        content-visibility: visible;
        border-bottom: 1px #ababab solid;
    }
`

export { Divider };

function PortfolioCard({ routerLink, title, id, description, type, link, xd, figma, ps , ai, html, css, sass, js, react, vue, git, design, yarn, pnpm }) {

    console.log(routerLink);
    const [screenWidth, setScreenWidth] = useState(false);

    const WIDTH = window.screen.availWidth;
    console.log('portCard' + WIDTH <= 800)

    useEffect(() => {
        setScreenWidth(WIDTH <= 800);
    }, [WIDTH])

    return (
        <Wrapper className='flex block fade-in' key={id}>
            <DividerOne>
                <img className='cardImg' alt='title of project' src={Img} />
            </DividerOne>
            <DividerTwo>
                <ProjectT>{title}</ProjectT>
                <Description>
                    {description}
                </Description>
                <MoreDetail>
                    <Link to={routerLink}>
                        More Info
                    </Link>
                </MoreDetail>
                <div className='flex'>
                    <Cols className='flex block fixCol'>
                        <SmallTitles>type:</SmallTitles>
                        <App>{type}</App>
                    </Cols>
                    <Cols className='centered'>
                        <a className='flex linkFix block' href={link} >
                            {design ?
                                <>
                                    <SmallTitles>Prototype</SmallTitles>
                                    <PIcon alt='prototype icon' src={Figma} />
                                </>
                                :
                                <>
                                    <SmallTitles>Repository</SmallTitles>
                                    <BsGithub className='github' size={40} />
                                </>
                            }
                        </a>
                    </Cols>
                    {!screenWidth ?
                        <Cols className='centered NotCel'>
                            <Tech className='techFix'>Tech</Tech>
                            <div>
                                {ai ? <SiAdobeillustrator size={35} className="ai iconPad" /> : <></>}
                                {ps ? <SiAdobephotoshop size={35} className="ps iconPad" /> : <></>}
                                {figma ? <img src={Figma} alt='figma icon' className='figma iconPad' /> : <></>}
                                {xd ? <SiAdobexd size={35} className="xd iconPad" /> : <></>}
                                {html ? <SiHtml5 className='html iconPad' size={35} /> : <></>}
                                {css ? <SiCss3 size={35} className='css iconPad' /> : <></>}
                                {sass ? <FaSass className="sass iconPad" size={35} /> : <></>}
                                {js ? <IoLogoJavascript size={28} className='js iconPad' /> : <></>}
                                {react ? <SiReact size={35} className="react iconPad" /> : <></>}
                                {vue ? <FaVuejs size={35} className='vue iconPad'  /> : <></>}
                                {git ? <FaGitAlt size={35} alt='icon git' className=' git iconPad' /> : <></>}
                                {yarn ? <SiYarn size={35} className='yarn iconPad'  /> : <></>}
                                {pnpm ? <img src={PNPM} alt='pnpm icon' className='pnpm iconPad' /> : <></>}
                            </div>
                        </Cols>
                        : <></>
                    }
                </div>
                    {screenWidth ?
                        <Cols className='centered OnlyCel'>
                            <Tech className='techFix'>Tech</Tech>
                            <div>
                                {ai ? <SiAdobeillustrator size={35} className="ai iconPad" /> : <></>}
                                {ps ? <SiAdobephotoshop size={35} className="ps iconPad" /> : <></>}
                                {figma ? <img src={Figma} alt='figma icon' className='figma iconPad' /> : <></>}
                                {xd ? <SiAdobexd size={35} className="xd iconPad" /> : <></>}
                                {html ? <SiHtml5 className='html iconPad' size={35} /> : <></>}
                                {css ? <SiCss3 size={35} className='css iconPad' /> : <></>}
                                {sass ? <FaSass className="sass iconPad" size={35} /> : <></>}
                                {js ? <IoLogoJavascript size={28} className='js iconPad' /> : <></>}
                                {react ? <SiReact size={35} className="react iconPad" /> : <></>}
                                {vue ? <FaVuejs size={35} className='vue iconPad'  /> : <></>}
                                {git ? <FaGitAlt size={35} alt='icon git' className=' git iconPad' /> : <></>}
                                {yarn ? <SiYarn size={35} className='yarn iconPad'  /> : <></>}
                                {pnpm ? <img src={PNPM} alt='pnpm icon' className='pnpm iconPad' /> : <></>}
                            </div>
                        </Cols>
                        : <></>
                    }
            </DividerTwo>
            <Divider/>
        </Wrapper>
    );
}

export default PortfolioCard;