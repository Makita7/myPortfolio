import PortfolioCard from '../components/PortfolioCard';
import { FrontendList } from '../components/PortfolioCardInfo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoToDesign from '../assets/design-btn.png';

const Title = styled.h1`
    font-size: 3rem;
    font-family: Kanit;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    margin-right: 10rem;
`

const LinkImgD = styled.img`
    max-width: 7rem;
    float: left;
    margin-left: 2rem;
    padding-left: 0;
`

function FrontEnd() {
    return (
        <>
            <Link to='/portfolio/ux-ui' >
                <LinkImgD alt='go to design' src={GoToDesign} />
            </Link>
            <Title className='watermelonRed'>Frontend</Title>
            { FrontendList.map( i => (
                    <PortfolioCard
                        id={i.id}
                        title={i.title}
                        description={i.description}
                        type={i.type}
                        link={i.link}
                        html={i.tech.html}
                        css={i.tech.css}
                        sass={i.tech.sass}
                        js={i.tech.js}
                        vue={i.tech.vue}
                        react={i.tech.react}
                        git={i.tech.git}
                        yarn={i.tech.yarn}
                        pnpm={i.tech.pnpm}
                    />
                ))
            }
        </>
    );
}

export default FrontEnd;