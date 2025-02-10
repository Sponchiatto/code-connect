"use client"; // Indica que o componente é um componente do lado do cliente (React)

import { useRef } from "react"; // Hook useRef para criar referências mutáveis para o DOM
import { Modal } from "../Modal"; // Componente Modal que será utilizado para exibir a caixa de resposta
import styles from "./replymodal.module.css"; // Estilos CSS para o modal de resposta
import { SubmitButton } from "../SubmitButton"; // Botão para submeter a resposta
import { Comment } from "../Comment"; // Componente para exibir um comentário
import { postReply } from "@/actions"; // Função para enviar a resposta para o banco de dados
import { Textarea } from "../TextArea"; // Componente de textarea para digitação da resposta

export const ReplyModal = ({ comment, post }) => {
  // Cria uma referência para o Modal (usado para abrir/fechar)
  const modalRef = useRef(null);

  // Função que abre o modal ao ser chamada
  const openModal = () => {
    modalRef.current.openModal(); // Chama a função openModal do Modal
  };

  // Define a função de ação que será chamada ao submeter o formulário
  const action = postReply.bind(null, comment); // Passa o comentário como parâmetro para postReply

  return (
    <>
      {/* Modal que será aberto quando o botão de "Responder" for clicado */}
      <Modal ref={modalRef}>
        {/* Formulário de resposta */}
        <form action={action}>
          <div className={styles.body}>
            {/* Exibe o comentário original que está sendo respondido */}
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          {/* Textarea para digitar a resposta */}
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            {/* Botão de submit para enviar a resposta */}
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>

      {/* Botão de "Responder", ao ser clicado abre o Modal */}
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
