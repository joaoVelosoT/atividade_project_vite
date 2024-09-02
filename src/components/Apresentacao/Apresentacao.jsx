import("./apresentacao.css");
const Apresentacao = ({title, subTitle, textButton, image}) => {

  return (
    <div className="apresentacao">
      <div className="apresentacaoText">
      <h2>{title}</h2>
      <p>
        {subTitle}
      </p>
      <button>{textButton}</button>
      </div>
      <div className="apresentacaoImage">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Apresentacao;
