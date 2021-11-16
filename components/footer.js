import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    const nFullYear = new Date();
    const fullYear = nFullYear.getFullYear()
    return (
        <footer className="w-full bg-yellow-500 shadow">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                    <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                        <Link href={"/"}>
                            <a>
                                <Image src="/logo.svg" width="100" height="60" priority/>
                            </a>
                        </Link>

                        <address className="not-italic text-white">
                            Alya Life Residence Barış Sok. No: 1 Kat: 10
                            Daire: 119 Kadıköy/İstanbul
                        </address>
                    </div>
                </div>
                <div className="pt-2 text-white">
                    <p>© {fullYear}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;