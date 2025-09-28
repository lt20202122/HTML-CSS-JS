import Link from 'next/link'
export default function Header () {
    const user="Guest"

    return (
        <div className="flex gap-4 bg-heading rounded m-5 h-20 ps-1">
        <h1 className="text-7xl font-merriweather">Shop</h1>
        <div className="ml-auto">
        <Link href="/contact" className="mx-4">Contact</Link>
        <Link href="/about" className="mx-4">About</Link>
        </div>
        </div>
            
    )
}