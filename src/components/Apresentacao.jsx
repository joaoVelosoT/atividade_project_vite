import("./apresentacao.css");
import imagem from "../assets/image/imageApresentacao.png"
const Apresentacao = () => {
  return (
    <div className="apresentacao">
      <div className="apresentacaoText">
      <h2>Hi, I’m João</h2>
      <p>
        I’m a full-stack developer with 5 years of experience using React and
        NodeJS. Reach out if you’d like to learn more!
      </p>
      <button>Contact Me</button>
      </div>
      <div className="apresentacaoImage">
        <img src={imagem} alt="" />
      </div>
    </div>
  );
};

export default Apresentacao;
