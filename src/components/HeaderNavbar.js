import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 5rem;
    background-color: white;
    position: sticky;
    text-transform: uppercase;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
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
    }
`

const Links = styled.div`
    padding-right: 2rem;
    padding-top: 1.8rem;
    & a{
        padding-right: 1rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        text-decoration: none;
    }
`


function SiteHeaderNavbar() {
    return (
        <Navbar className='flex space-between'>
            <Logo>
                <Link to='/'>Sofia Makita</Link>
                </Logo>
            <Links>
                <Link className='yellow' to='/' >Home</Link>
                <Link className='olive' to='/portfolio/frontend' >Portfolio</Link>
                <Link className='cobalt' to='/about' >About</Link>
            </Links>
        </Navbar>
    );
}

export default SiteHeaderNavbar;