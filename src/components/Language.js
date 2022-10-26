import { DividerThree, Title } from '../pages/About';
import styled from 'styled-components';
import EN from '../assets/lang-EN.png'
import SPA from '../assets/lang-SPA.png'

const IconWrapper = styled.div`
    max-width: 25rem;
    margin: 0 auto;
    display: table;
`

function Language() {
    return (
        <DividerThree>
            <Title className='cobalt'>
                Languages
            </Title>
            <IconWrapper>
                <img className='langIcon' alt='english' src={EN} />
                <img className='langIcon' alt='spanish' src={SPA} />
            </IconWrapper>
        </DividerThree>
    );
}

export default Language;