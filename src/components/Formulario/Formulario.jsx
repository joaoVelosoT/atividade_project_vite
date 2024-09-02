import { useState } from "react";
import "./formulario.css";
const Form = (props) => {
  // Estado inicial do formulario
  const initilForm = {
    nome: "",
    email : "",
  };

  // Estado do formulario
  const [formState, setFormState] = useState(initilForm);
  // Função para lidar com a alteração dos campos de entrada
  const handleInput = (event) => {
    //  Obter o valor e o nome do campo de entrada
    const target = event.currentTarget;
    // Extrair o valor e nome do campo de entrada
    const { value, name, email} = target;

    // Atualizar o estado do formulario com os novos valores
    setFormState({ ...formState, [name]: value , [email] : value}); // ... => espalhando informações
  };

  // Função para lidar com a submissão do formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.nome);
    console.log(formState.email);

    setFormState({...initilForm})
  };

  return (
    <div className="containerForm" id="containerForm">
      <h1>Contate-me</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">

            <div className="container-input">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              value={formState.nome}
              onChange={handleInput}
            />
            </div>
            <div className="container-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              minLength={10}
              value={formState.email}
              onChange={handleInput}
            />
            </div>
          
          </div>
          <div className="form-control">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;