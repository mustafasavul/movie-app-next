import Link from "next/link";
import Image from 'next/image'

function Header({children}) {
    return (
        <header className="shadow">
            <nav className="flex flex-col items-center justify-between flex-wrap bg-teal p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <Link href={"/"}>
                        <a>
                            <Image src="/logo.svg" width="200" height="100" priority/>
                        </a>
                    </Link>
                </div>

                <div
                    className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    {children}
                </div>

            </nav>
        </header>
    )
}

export default Header;