import Link from 'next/link'

function Navigation() {
    return <nav>
        <Link href="/">
            <a>Homepage</a>
        </Link>

        <Link href="/about">
            <a>About</a>
        </Link>
    </nav>
}

export default Navigation;