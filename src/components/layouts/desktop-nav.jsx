
const DesktopNav = () => {
    return (
        <div className="flex justify-between items-center py-4 px-8">
            <div className="flex items-center font-4xl font-bold">
                <span>A</span>
                <div class="logo-text">AntByte labs</div>
            </div>

            <nav>
                <ul className="flex gap-2 list-none ">
                    <li>
                        <a className="text-base pt-[8px] pb-[8px]" href="#">Services</a>
                    </li>
                    <li>
                        <a className="text-base pt-[8px] pb-[8px]" href="#">Products</a>
                    </li>
                    <li>
                        <a className="text-base pt-[8px] pb-[8px]" href="#">Projects</a>
                    </li>
                    <li>
                        <a className="text-base pt-[8px] pb-[8px]" href="#">About</a>
                    </li>
                    <li>
                        <a className="text-base pt-[8px] pb-[8px]" href="#">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="get-started">
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    )
}

export default DesktopNav;
