import { Link, Outlet } from 'react-router-dom';
import './Layout.css'
import { useState } from 'react'

const Layout = () => {
    const [active, setActive] = useState(1)
    return (
        <>
            <div className='app'>
                <aside>
                    <h1>Redux</h1>
                    <Link to={'/'} className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>Home</Link><br />
                    <Link to={'/profile'} className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>Profile</Link><br />
                    <Link to={'/editprofile'} className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>Edit Profile</Link>
                </aside>
                <main>
                    <Outlet />
                </main>
            </div>

        </>

    )
}

export default Layout