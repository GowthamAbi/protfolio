function Nav() {
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-8  text-black font:Arial,Helvetica,sans-serif">
            <div className="text-lg font-semibold">
                <p>Gowtham / Software Developer</p>
            </div>
            <div className="flex space-x-6 mt-2 md:mt-0">
                <a href="/About" className="hover:text-blue-500">ABOUT ME</a>
                <a href="/Resume" className="hover:text-blue-500">RESUME</a>
                <a href="/Projects" className="hover:text-blue-500">PROJECTS</a>
                <a href="/Contact" className="hover:text-blue-500">CONTACT</a>
            </div>
        </nav>
    );
}

export default Nav;
