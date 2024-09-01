import ("./about.css");
import imagem from "../assets/image/imageAbout.png"
import iconCpu from "../assets/image/iconCpu.png"
import iconMouse from "../assets/image/iconMouse.png"
const About = () => {
    return(
        <div className="containerAbout" id="containerAbout">
            <div className="containerImageAbout">
                <h3>ABOUT</h3>
                <img src={imagem} alt="" />
            </div>
            <div className="containerItem">
                <ul>
                    <li>
                        <img src={iconCpu} alt="" />
                        <p>
                        <span className="titleItem">BackEnd Developer</span>
                        I’m a front-end developer with experience
                        in building responsive and optimized sites
                        </p>
                    </li>
                    <li>
                        <img src={iconMouse} alt="" />
                        <p>
                        <span className="titleItem">FrontEnd Developer</span>
                        I’m a front-end developer with experience
                        in building responsive and optimized sites
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About