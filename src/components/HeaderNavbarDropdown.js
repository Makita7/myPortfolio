import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from "react";
import styled from "styled-components";

const ToogleBtn = styled.button`
    padding: 8px;
    border-radius: 10px;
    background-color: #26a0a0;
    border: 0px;
    margin-left: -3rem;
    margin-top: 1rem;
`

const DropdownMenu = styled.div`
    background-color: antiquewhite;
    z-index: +8;
    width: 100%;
    height: 100%;
    position: absolute;
    margin-left: -24rem;
`
/** use context
 * save navOpen in context to use it from this part of the app but also from the open nav that will have to be
 * located outside of the nav otherwise it won't cover everything
 */

function HeaderNavbarDropdown() {
    const [navOpen, setNavOpen] = useState(false);

    let Open = e => {
        setNavOpen(!navOpen)
    }

    function DropMenuElement(props){
        return(
                <Link onClick={Open} to={props.to} className='dropLinks'> {props.name} </Link>
        );
    }

    return(
        <>
        <div className='OnlyCel CelNav'>
            {!navOpen ?
                <ToogleBtn onClick={Open}>
                    <FaBars color="white" size={15}/>
                </ToogleBtn>
                : <></>
            }

            { navOpen ?
                <DropdownMenu>
                    <DropMenuElement className='yellow' to='/' name="Home"/>
                    <DropMenuElement className='olive' to='/portfolio/frontend' name="Portfolio"/>
                    <DropMenuElement className='cobalt' to='/about' name="About"/>
                </DropdownMenu>
                : <></>
            }
        </div>
        </>
    );
}

export default HeaderNavbarDropdown;
