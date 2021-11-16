import Link from "next/link";
import Image from 'next/image'

function Header({children}) {
    return (
        <header className="shadow">
            <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">
                    <Link href={"/"}>
                        <a>
                            <Image src="/logo.svg" width="200" height="100" priority />
                        </a>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    {children}
                    <div>
                        <a href="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;