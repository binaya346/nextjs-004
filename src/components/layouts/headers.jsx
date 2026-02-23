const Headers = () => {
    return (
        <>
            <header className="w-full bg-white px-6 sticky top-0 z-10 lg:hidden">
                <nav className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3 text-3xl font-semibold">
                        <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
                        <div>AntByte labs</div>
                    </div>
                    <div className="hamburger">
                        <img src="/images/hamburger-menu.png" alt="hamburger menu" className="h-auto w-10" />
                    </div>
                </nav>
            </header>

            {/* <!-- Desktop Navigation --> */}
            <header className="hidden lg:block w-full bg-white px-20 sticky top-0 z-10">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3 text-3xl font-semibold">
                        <span className="font-extrabold text-white h-10 w-10 bg-black flex items-center justify-center rounded-lg">A</span>
                        <div>AntByte labs</div>
                    </div>

                    <nav>
                        <ul className="flex gap-5">
                            <li>
                                <a href="#" className="text-base py-2 relative group">
                                    Services
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base py-2 relative group">
                                    Products
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base py-2 relative group">
                                    Projects
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base py-2 relative group">
                                    About
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base py-2 relative group">
                                    Contact
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-brand-dark transition-all duration-500 group-hover:w-1/2"></span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <button className="px-8 py-4 rounded-lg text-lg bg-brand-dark text-white border border-brand-dark capitalize">Get Started</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Headers;