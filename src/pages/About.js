import styled from "styled-components";
import Photo from '../assets/photo.png';


const Name = styled.p`
    font-family: 'Covered By Your Grace', cursive;
    font-size: 3rem;
    color: var(--seaGreen);
`

const DividerOne = styled.div`
    width: 60%;
    margin-top: 2rem;
`

const DividerTwo = styled.div`
    width: 40%;
    margin-top: 2rem;
`

const Btn = styled.button`
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
`

function About() {
    return (
        <div className="flex">
            <DividerOne>
                <p className="flex">
                    Hi, I'm <Name>Sofia</Name>
                </p>
                <p>
                    elit in sit enim. eget porta viverra Nullam in Quisque turpis vel Praesent Ut Nullam tortor. vitae ex sollicitudin. libero, Cras efficitur. nibh consectetur. Hendrerit Cras sed turpis luctus amet, laoreet vitae ex. tincidunt convallis. volutpat nec viverra gravida nec porta Nullam faucibus elit vitae felis.
                </p>
                <Btn>Download CV</Btn>
            </DividerOne>
            <DividerTwo>
                <img alt="photo of Sofia Makita" src={Photo} />
            </DividerTwo>
        </div>
    );
}

export default About;