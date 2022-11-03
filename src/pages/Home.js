import styled from "styled-components";
import Portrait from '../assets/Portrait.png'
import And from '../assets/and.png'

const Wrapper = styled.div`
    height: 46rem;
    background-color: #F29900;
    color: white;
`

const Img = styled.div`
    width: 40%;
    & img{
        height: 80%;
        margin-top: 10%;
        margin-left: 35%;
    }
`

const Text = styled.div`
    width: 60%;
    position: relative;
    box-sizing: border-box;
    padding-left: 10%;
    & p{
        position: absolute;
        font-size: 3.5rem;
        text-align: right;
        padding-right: 10%;
        text-transform: uppercase;
        z-index: +5;
    }
    & .front{
        font-family: 'Kanit', sans-serif;
        font-weight: 600;
        padding-top: 15%;
    }
    & .ux{
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        padding-top: 25%;
        padding-left: 10%;
    }
    & img{
        position: absolute;
        z-index: +1;
        width: 50%;
        padding-top: 3%;
        padding-left: 5%;
    }
`

function Home() {
    return (
        <Wrapper className="flex">
            <Img>
                <img alt="portrait" src={Portrait} />
            </Img>
            <Text>
                <img  src={And} alt='and symbol' className="fade-in"  />
                <p className="front">
                    front end developer
                </p>
                <p className="ux">
                    & ux/ui designer
                </p>
            </Text>
        </Wrapper>
    );
}

export default Home;