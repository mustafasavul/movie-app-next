import Link from 'next/link'

function Navigation() {
    return <nav className="navigation">
        <Link href="/">
            <a>Homepage</a>
        </Link>

        <Link href="/about">
            <a>About</a>
        </Link>
    </nav>
}

export default Navigation;