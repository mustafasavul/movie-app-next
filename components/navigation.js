import Link from 'next/link'

function Navigation() {
    return <nav className="navigation">
        <Link href="/">
            <a className="dark:text-white">Homepage</a>
        </Link>

        <Link href="/about">
            <a className="dark:text-white">About</a>
        </Link>
    </nav>
}

export default Navigation;