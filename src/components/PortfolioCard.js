
import styled from 'styled-components';
import Img from '../assets/card-img.png';
import Figma from '../assets/icon-figma.png';

const Wrapper =  styled.div`
margin: 4rem auto 2rem auto;
width: 80%;
vertical-align: middle;
`

const DividerTwo = styled.div`
width: 60%;
box-sizing: border-box;
margin-top: auto;
margin-bottom: auto;
padding: 0 4rem;
`

const DividerOne = styled.div`
width: 40%;
margin-top: 2rem;
`
const ProjectT = styled.h5`
    font-family: 'Covered By Your Grace',cursive;
    font-size: 3rem;
    margin: 0;
    color: var(--yellow);
    font-weight: 500;
`

const Description = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-size: 1.2rem;
`
const Cols = styled.div`
    width: 33%;
    flex-wrap: wrap;
    & a{
        text-decoration: none;
        margin: 3rem 0;
    }
`

const SmallTitles = styled.p`
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    color: var(--cobalt);
    margin: auto 0.5rem;
    font-size: 1.2rem;
`

const Tech = styled.p`
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    color: var(--cobalt);
    font-size: 2rem;
    margin: auto 0;
`

const PIcon = styled.img`
    height: 2.5rem;
    margin-left: 0.5rem;
`

const TechIcon = styled.img`
    height: 2rem;
    margin-left: 0.5rem;
    margin: 0.5rem;
`


function PortfolioCard() {
    return (
        <Wrapper className='flex'>
            <DividerOne>
                <img className='cardImg' alt='title of project' src={Img} />
            </DividerOne>
            <DividerTwo>
                <ProjectT>Title of Project</ProjectT>
                <Description>
                    elit in sit enim. eget porta viverra Nullam in Quisque turpis vel Praesent Ut Nullam tortor. vitae ex sollicitudin. libero, Cras efficitur. nibh consectetur.
                </Description>
                <div className='flex'>
                    <Cols className='flex'>
                        <SmallTitles>type:</SmallTitles>
                        <Tech>App</Tech>
                    </Cols>
                    <Cols className='centered'>
                        <a className='flex' href='https://github.com/Makita7/myPortfolio'>
                            <SmallTitles>Prototype</SmallTitles>
                            <PIcon alt='icon' src={Figma} />
                        </a>
                    </Cols>
                    <Cols className='centered'>
                        <Tech>Tech</Tech>
                        <div>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                            <TechIcon src={Figma} alt='tech name'/>
                        </div>
                    </Cols>
                </div>
            </DividerTwo>
        </Wrapper>
    );
}

export default PortfolioCard;