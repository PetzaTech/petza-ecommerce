import Image from "next/image"
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline"

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-dark p-1 flex-grow py-2 space-x-2">
                <div className="mt-0 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="/logo.svg"
                        width={150}
                        height={40}
                        objectFit="contain"
                        alt="Petza Logo"
                        className="cursor-pointer"
                        style={{ objectFit: "contain" }}
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex ml-2 items-center h-10 rounded-sm flex-grow cursor-pointer bg-white">
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink text-sm rounded-l-sm focus:outline-none px-4"
                        type="text"
                        placeholder="Search products..."
                    />
                    <MagnifyingGlassIcon
                        className="h-10 p-2.5 text-dark bg-orange-400 hover:bg-orange-500 rounded-r-sm"
                        strokeWidth={2}
                    />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Hello, Akshit Kumar</p>
                        <p className="link-lg">Pet Account</p>
                    </div>

                    <div className="link">
                        <p>Appointments</p>
                        <p className="link-lg">& Orders</p>
                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-primary rounded-full text-center text-dark font-bold">
                            7
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline link-lg mt-2">Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-dark/90 text-white text-sm">
                <p className="link flex items-center font-semibold hover:outline-2 rounded-xs">
                    <Bars3Icon className="h-6 mr-1" />
                    All
                </p>
                <p className="link hidden md:inline-flex whitespace-nowrap">
                    Pet Food
                </p>
                <p className="link hidden lg:inline-flex">Accessories</p>
                <p className="link hidden sm:inline-flex">Fashion</p>
                <p className="link hidden sm:inline-flex">Medicine</p>
                <p className="link hidden lg:inline-flex">Toys</p>
                <div className="flex items-center space-x-3">
                    <p className="link">Barks</p>
                    <p className="link">Meows</p>
                    <p className="link">Chirps</p>
                    <p className="link">Swims</p>
                </div>

                <div className="ml-auto flex items-center">
                    <Image
                        src="/petcare.svg"
                        width={70}
                        height={40}
                        objectFit="contain"
                        alt="PetCare"
                        className="cursor-pointer"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
