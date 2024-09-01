import "./footer.css"
import icon_email from "../assets/image/icon_email.png"
import icon_linkedin from "../assets/image/icon_linkedin.png"
import icon_github from "../assets/image/icon_github.png"
const Footer = () => {
    return (
       <footer>
        <div className="textFooter">
            <h4>Contact</h4>
            <p>Feel free to reach out!</p>
        </div>
        <div className="linksFooter">
            <ul>
                <li>
                    <img src={icon_email} className="icon" alt="" />
                    <a href="">vitorvteixeira2023@gmail.com</a>
                </li>
                <li>
                    <img src={icon_linkedin} className="icon" alt="" />
                <a href="https://www.linkedin.com/in/joaovitor1804/">linkedin.com/joaovitor1804</a>
                </li>
                <li>
                    <img src={icon_github}  className="icon" alt="" />
                    <a href="https://github.com/joaoVelosoT">github.com/joaoVelosoT</a>
                </li>
            </ul>
        </div>
       </footer>
    )
}

export default Footer;