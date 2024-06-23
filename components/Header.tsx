import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white p">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <h1 className=" text-4xl  font-semibold">Hamze <span className=" text-accent">MO</span> </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />

                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>

        </header>
    )
}
