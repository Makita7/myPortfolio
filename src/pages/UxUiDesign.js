import PortfolioCard from '../components/PortfolioCard';
import { DesignList } from '../components/PortfolioCardInfo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GoToFront from '../assets/frontend-btn.png';

const Title = styled.h1`
    font-size: 3rem;
    font-family: Kanit;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    margin-left: 10rem;
`

const LinkImgF = styled.img`
    max-width: 10rem;
    float: right;
    margin-right: 2rem;
    padding-left: 0;
    margin-top: 3rem;
`

function UxUiDesign() {
    return (
        <div className='minHeight'>
            <Link to='/portfolio/frontend' >
                <LinkImgF alt='go to frontend' src={GoToFront} />
            </Link>
            <Title className='olive'>UX/UI Projects</Title>
            { DesignList.map( i => (
                    <PortfolioCard
                        routerLink={i.routerLink}
                        id={i.id}
                        title={i.title}
                        description={i.description}
                        type={i.type}
                        design={i.category.design}
                        link={i.link}
                        figma={i.tech.figma}
                        xd={i.tech.xd}
                        ai={i.tech.ai}
                        ps={i.tech.ps}
                    />
                ))
            }
        </div>
    );
}

export default UxUiDesign;