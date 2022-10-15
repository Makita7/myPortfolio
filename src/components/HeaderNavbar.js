import { Link } from 'react-router-dom';

function SiteHeaderNavbar() {
    return (
        <nav className='flex space-between'>
            <p>Sofia Makita</p>
            <div>
                <Link to='/' >Home</Link>
                <Link to='/portfolio' >Portfolio</Link>
                <Link to='/about' >About</Link>
            </div>
        </nav>
    );
}

export default SiteHeaderNavbar;