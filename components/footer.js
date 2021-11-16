import Image from 'next/image'
import Navigation from './navigation'

function Footer() {
    return (
        <footer className="w-full bg-gray-700 text-white">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
                    <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                        <Image src="/logo-white.svg" width="80" height="80" priority />

                        <address className="opacity-60">
                            Alya Life Residence Barış Sok. No: 1 Kat: 10
                            Daire: 119 Kadıköy/İstanbul
                        </address>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                        <Navigation />
                    </div>
                </div>
                <div className="opacity-60 pt-2">
                    <p>© 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;