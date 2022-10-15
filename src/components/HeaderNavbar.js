import { Link } from 'react-router-dom';

function SiteHeaderNavbar() {
    return (
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/portfolio' >Portfolio</Link>
            <Link to='/about' >About</Link>
        </nav>
    );
}

export default SiteHeaderNavbar;