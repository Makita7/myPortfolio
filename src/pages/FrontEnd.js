import PortfolioCard from '../components/PortfolioCard';
import {Title} from '../pages/Portfolio';

function FrontEnd() {
    return (
        <>
            <Title className='watermelonRed'>Frontend</Title>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
        </>
    );
}

export default FrontEnd;