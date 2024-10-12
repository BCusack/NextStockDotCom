// Navbar
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-6">
            <div className="flex items-center"> {/* Use flex to align logo and text */}
                <Image
                    src="/sd.png"
                    alt="StocksDigital Logo"
                    width={30}
                    height={30}
                    className="dark:invert"
                />
                <div className="ml-2">StocksDigital</div> {/* Add margin-left to space logo and text */}
            </div>
            <div className="space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Snippets</Link>
            </div>
        </nav>
    )
}