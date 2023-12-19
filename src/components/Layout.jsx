import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();


    return (
        <>
            <div className='md:flex md:min-h-screen'>
                <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                    <h2 className='text-white text-4xl font-light mb-5 text-center '>Client Control</h2>
                    <nav className='mt-10'>
                        <Link className={`${location.pathname === '/' ? 'bg-blue-700 rounded ' : ''}p-1 text-white block`} to='/'>Clients</Link>
                        <Link className={`${location.pathname === '/client/new' ? 'bg-blue-700 rounded ' : ''}p-1 text-white block`} to='/client/new'>New Client</Link>
                    </nav>
                </aside>
                <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout
