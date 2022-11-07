import styled from "styled-components";
import Portrait from '../assets/Portrait.png'
import And from '../assets/and.png'

const Wrapper = styled.div`
    height: 46rem;
    background-color: #F29900;
    color: white;
    @media screen and (max-width: 1100px) {
        height: 54rem;
    }
    @media screen and (max-width: 800px) {
        height: 30rem;
    }
`

const Img = styled.div`
    width: 40%;
    & img{
        height: 80%;
        margin-top: 10%;
        margin-left: 35%;
    }
    @media screen and (max-width: 1100px) {
        & img{
            height: 80%;
            margin-top: 20%;
            margin-left: -55%;
        }
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        & img{
            height: 10%;
            margin-top: 10%;
            margin-left: 35%;
        }
    }
`

const ImgTwo = styled.div`
    width: 0%;
    & img{
        visibility: hidden;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        & img{
            margin-top: 70%;
            width: 90%;
            padding-left: 5%;
            visibility: visible;
        }
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
    @media screen and (max-width: 1100px) {
        padding-left: 15%;
        & p{
            text-align: center;
        }
        & .ux{
            padding-left: 0%;
            padding-top: 105%;
        }
        & img{
            padding-top: 60%;
            padding-left: 5%;
        }
        & .front{
            padding-top: 0;
            padding-top: 15%;
        }
    }
    @media screen and (max-width: 800px) {
        width: 90%;
        padding-left: 5%;
        & p{
            width: 100%;
            padding-right: 0%;
            font-size: 2rem;
            text-align: center;
        }
        & .ux{
            padding-left: 0%;
            padding-top: 75%;
        }
        & img{
            padding-top: 25%;
            padding-left: 25%;
        }
        & .front{
            padding-top: 0;
        }
    }
`

function Home() {
    return (
        <Wrapper className="flex celBlock">
            <Img>
                <img alt="portrait" src={Portrait} className='NotCel' />
            </Img>
            <Text>
                <img  src={And} alt='and symbol' className="fade-in"  />
                <p className="front">
                    front end developer
                </p>
                <p className="ux">
                    ux/ui designer
                </p>
            </Text>
            {/* <ImgTwo>
                <img alt="portrait" src={Portrait} />
            </ImgTwo> */}
        </Wrapper>
    );
}

export default Home;