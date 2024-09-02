import ("./about.css");
import iconCpu from "/src/assets/image/iconCpu.png"
import iconMouse from "/src/assets/image/iconCpu.png"

const About = ({title, image}) => {

    
    return(
        <div className="containerAbout" id="containerAbout">
            <div className="containerImageAbout">
                <h3>ABOUT</h3>
                <img src={image} alt="" />
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