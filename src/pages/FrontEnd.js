import PortfolioCard from '../components/PortfolioCard';
import {Title} from '../pages/Portfolio';
import { FrontendList } from '../components/PortfolioCardInfo';

function FrontEnd() {
    return (
        <>
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