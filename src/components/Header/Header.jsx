import ("./header.css");
const Header = () => {

    return(

        <header >
            <nav className="navBar">
                <h1>Portfolio</h1>
                <ul>
                    <li><a href="#containerAbout">About</a></li>
                    <li><a href="#containerTecnologias">Experience</a></li>
                    <li><a href="#containerTecnologias">Projects</a></li>
                    <li><a href="#containerForm">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header