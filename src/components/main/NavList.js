import navigation from '../../data/navigation'

const NavList = () => {
    let navList = navigation;

    return (
        <nav className="hidden text-sm font-bold uppercase text-widest mt-[72px] md:block">
            <ul className="flex flex-row md:flex-col md:-my-[16px]">
                {navList.map((item) => (
                    <li key={item.id} className="md:my-[16px]">
                        <a
                            className="inline-flex items-center hover:text-white active:text-white transition group text-color"
                            href={item.url}
                        >
                            <span className="text-xs tracking-wide">{item.id}</span>
                            <span className="inline-block h-px mx-[16px] -mt-px group-hover:w-[48px] group-hover:bg-white transition w-[24px] bg-gray"></span>
                            <span className="text-xs tracking-widest uppercase">{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavList