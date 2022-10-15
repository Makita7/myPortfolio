import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Portfolio() {
    return (
        <div>
            <div>
                <Link to='ux-ui' > UX/UI Design </Link>
                <Link to='frontend' > FrontEnd </Link>
            </div>
            <Outlet/>
        </div>
    );
}

export default Portfolio;