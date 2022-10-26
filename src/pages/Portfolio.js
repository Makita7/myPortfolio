import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import GoToDesign from '../assets/design-btn.png';
import GoToFront from '../assets/frontend-btn.png';


const Title = styled.h1`
    font-size: 3rem;
    font-family: Kanit;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
`

const LinkImgF = styled.img`
    max-width: 10rem;
    float: right;
    margin-right: 2rem;
    padding-left: 0;
`
const LinkImgD = styled.img`
    max-width: 7rem;
    float: left;
    margin-left: 2rem;
    padding-left: 0;
`

export {Title};


function Portfolio() {
    return (
        <div>
            <div>
                <Link to='ux-ui' >
                    <LinkImgD alt='go to frontend' src={GoToDesign} />
                </Link>
                <Link to='frontend' >
                    <LinkImgF alt='go to frontend' src={GoToFront} />
                </Link>
            </div>
            <Outlet/>
        </div>
    );
}

/**
 *  page> cards and call to list>card with only design && list of portfolio pieces

    the card should have a conditional  rendering so if photoshop is true it shows the icon and if not it doesn't
 */


export default Portfolio;