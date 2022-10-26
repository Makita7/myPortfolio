import styled from 'styled-components';
import { Title , DividerThree } from '../pages/About';
import Photoshop from '../assets/icon-photoshop.png';
import Illustrator from '../assets/icon-illustrator.png';
import HTML from '../assets/icon-html-5.png';
import XD from '../assets/icon_adobe-xd.png';
import CSS from '../assets/icon-css-3.png';
import Figma from '../assets/icon-figma.png';
import Sass from '../assets/vscode-icons_file-type-sass.png';
import Git from '../assets/icon-git.png';
import ReactI from '../assets/icon-react.png';
import Vue from '../assets/icon-vue.png';
import JS from '../assets/icon-javascript.png';

const LinksData = [
    {
        id : 1,
        img: Photoshop,
        name: 'Photoshop'
    },
    {
        id : 2,
        img: Illustrator,
        name: 'Illustrator'
    },
    {
        id : 3,
        img: Figma,
        name: 'Figma'
    },
    {
        id : 4,
        img: XD,
        name: 'adobe xd'
    },
    {
        id : 5,
        img: HTML,
        name: 'html-5'
    },
    {
        id : 6,
        img: CSS,
        name: 'css-3'
    },
    {
        id : 7,
        img: Sass,
        name: 'sass'
    },
    {
        id : 8,
        img: JS,
        name: 'javascript'
    },
    {
        id : 9,
        img: Vue,
        name: 'vue js'
    },
    {
        id : 10,
        img: ReactI,
        name: 'react'
    },
    {
        id : 11,
        img: Git,
        name: 'git'
    },
];

const IconWrapper = styled.div`
    max-width: 25rem;
    margin: 0 auto;
`

function Tech() {
    return (
        <DividerThree>
            <Title className='watermelonRed'>
                Tech
            </Title>
            <IconWrapper>
                {LinksData.map(i => (
                    <img className='techIcon' id={i.name} src={i.img} alt={i.name} />
                    ))}
            </IconWrapper>
        </DividerThree>
    );
}

export default Tech;