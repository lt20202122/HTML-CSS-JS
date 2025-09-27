import Image from "next/image";
import Greeting from "./Greeting"

export default function Header () {
    const user="Guest"

    return (
        <div className="flex gap-4">
        <Image 
            src="/assets/logo.jpg"
            alt="logo"
            width="200"
            height="100"
            className="object-cover relative rounded-2xl shadow-lg shadow-inner overflow-hidden"
        />
        <Greeting name={user}/>
        </div>
            
    )
}