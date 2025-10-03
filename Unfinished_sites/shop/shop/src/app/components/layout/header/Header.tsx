import Link from 'next/link'

export default function Header () {
    const user="Guest"

    return (
        <div className="m-5 mb-2">
        <header className="flex gap-4 bg-heading rounded-full h-20 w-full px-5 mb-0">
        <Link className="text-7xl font-merriweather cursor-pointer" href="/">Shop</Link>
        <div className="ml-auto">
        <Link href="/contact" className="relative mx-4 text-gray-800 hover:text-blue-400 transition-colors duration-300 ease-in-out
             before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 
             before:transition-all before:duration-300 hover:before:w-full">Contact</Link>
        <Link href="/about" className="relative mx-4 text-gray-800 hover:text-blue-400 transition-colors duration-300 ease-in-out
             before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-400 
             before:transition-all before:duration-300 hover:before:w-full">About</Link>
        </div>
        </header>
        </div>
    )
}