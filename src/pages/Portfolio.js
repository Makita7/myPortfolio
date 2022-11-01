import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
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
    const Location = useLocation();
    const [FrontendStatus, setFrontendStatus] = useState(true);


    useEffect(() => {
        setFrontendStatus(!FrontendStatus);
    }, [Location]);


    return (
        <div className='minHeight'>
            <div>
            {!FrontendStatus ?
                <>
                    <Link  className='undoOpacity' to='ux-ui' >
                        <LinkImgD alt='go to design' src={GoToDesign} />
                    </Link>
                    <Link className='opacity' to='frontend' >
                        <LinkImgF alt='go to frontend' src={GoToFront} />
                    </Link>
                </>
                :
                <>
                    <Link className='opacity' to='ux-ui' >
                        <LinkImgD alt='go to design' src={GoToDesign} />
                    </Link>
                    <Link className='undoOpacity' to='frontend' >
                        <LinkImgF alt='go to frontend' src={GoToFront} />
                    </Link>
                </>
            }
            </div>
            <Outlet/>
        </div>
    );
}

export default Portfolio;