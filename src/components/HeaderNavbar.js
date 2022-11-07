import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from "../App";
import styled from 'styled-components';
import HeaderNavbarDropdown from './HeaderNavbarDropdown';

const Navbar = styled.nav`
    height: 5rem;
    background-color: white;
    text-transform: uppercase;
    top: 0;
    position: sticky;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    @media screen and (max-width: 800px){
        height: 4rem !important;
    }
`

const Logo = styled.p`
    & a{
        font-family: 'Kanit', sans-serif;
        font-weight: 500;
        font-size: 1.7rem;
        padding-left: 2rem;
        color: #26A0A0;
        margin-top: 1.4rem !important;
        text-decoration: none;
        @media screen and (max-width: 800px){
            font-size: 1.2rem;
        }
    }
`

const Links = styled.div`
    padding-right: 2rem;
    padding-top: 1.8rem;
    content-visibility: visible;
    & a{
        padding-right: 1rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        text-decoration: none;
    }
    @media screen and (max-width: 800px) {
        content-visibility: hidden;
        display: none;
    }
`


function SiteHeaderNavbar() {
    const [screenWidth, setScreenWidth] = useState(false);
    const {Open} = useContext(NavContext);

    const WIDTH = window.screen.availWidth;

    useEffect(() => {
        setScreenWidth(WIDTH > 800);
    }, [WIDTH])

    return (
        <Navbar className='flex space-between'>
            <Logo>
                <Link to='/'>Sofia Makita</Link>
                </Logo>
            {screenWidth ?
                <Links>
                    <Link className='yellow' to='/' >Home</Link>
                    <Link className='olive' to='/portfolio/frontend' >Portfolio</Link>
                    <Link className='cobalt' to='/about' >About</Link>
                </Links>
            : <></> }

            {!screenWidth ? <HeaderNavbarDropdown/>: <></>}
        </Navbar>
    );
}

export default SiteHeaderNavbar;