import { Link } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../App";

const DropdownMenu = styled.div`
    background-color: white;
    z-index: +38;
    width: 100vh;
    height: 100vh;
    margin-top: -5rem;
    padding-bottom: 10rem;
    position: absolute;
    & a{
        text-decoration: none;
        display: flex;
        margin: 3rem;
        font-family: 'Quicksand',sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.2rem;
    }
`

function HeaderNavbarOverlay() {
    const {Open, navOpen} = useContext(NavContext);

    function DropMenuElement(props){
        return(
                <Link onClick={Open} to={props.to} className={props.className}> {props.name} </Link>
        );
    }

    console.log(navOpen+'+headerNavOver')

    return (
    <>
        { navOpen ?
            <DropdownMenu className="fade-in">
                <DropMenuElement className='yellow' to='/' name="Home"/>
                <DropMenuElement className='olive' to='/portfolio/frontend' name="Portfolio"/>
                <DropMenuElement className='cobalt' to='/about' name="About"/>
            </DropdownMenu>
            : <></>
        }
    </>
    );
}

export default HeaderNavbarOverlay;