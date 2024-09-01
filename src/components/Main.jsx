import About from "./About";
import Apresentacao from "./Apresentacao";
import Footer from "./Footer";
import Projects from "./Projects";
import Formulario from "./Formulario";
import ("./main.css");

const Main = () => {
    return(
        <main>
            <Apresentacao/>
            <About/>
            <Projects/>
            <Formulario/>
            <Footer/>
        </main>
    )
}

export default Main