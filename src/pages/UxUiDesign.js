import PortfolioCard from '../components/PortfolioCard';
import { DesignList } from '../components/PortfolioCardInfo';
import { Title } from '../pages/Portfolio';

function UxUiDesign() {
    return (
        <>
            <Title className='olive'>UX/UI Projects</Title>
            { DesignList.map( i => (
                    <PortfolioCard
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
        </>
    );
}

export default UxUiDesign;