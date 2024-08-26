import ("./header.css");
const Header = () => {

    return(

        <header >
            <nav className="navBar">
                <h1>Portfolio</h1>
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header