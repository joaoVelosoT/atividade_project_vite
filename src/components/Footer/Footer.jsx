import "./footer.css"
import icon_email from "/src/assets/image/icon_email.png"
import icon_linkedin from "/src/assets/image/icon_linkedin.png"
import icon_github from "/src/assets/image/icon_github.png"
const Footer = ({contentEmail, contentLinkedin, contentGithub}) => {
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
                    <a href="">{contentEmail}</a>
                </li>
                <li>
                    <img src={icon_linkedin} className="icon" alt="" />
                <a href="https://www.linkedin.com/in/joaovitor1804/">{contentLinkedin}</a>
                </li>
                <li>
                    <img src={icon_github}  className="icon" alt="" />
                    <a href="https://github.com/joaoVelosoT">{contentGithub}</a>
                </li>
            </ul>
        </div>
       </footer>
    )
}

export default Footer;