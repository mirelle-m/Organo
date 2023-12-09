import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./style.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          value={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          value={cargo}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          value={imagem}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          valor={time}
          obrigatorio={true}
          label="Time"
          itens={props.times}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
