import About from "./About";
import Apresentacao from "./Apresentacao";
import Projects from "./Projects";

import ("./main.css");

const Main = () => {
    return(
        <main>
            <Apresentacao/>
            <About/>
            <Projects/>
        </main>
    )
}

export default Main