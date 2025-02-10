"use client"; // Indica que o componente é um componente do lado do cliente (React)

import { useEffect, useState } from "react"; // Hooks do React para gerenciar estado e efeitos colaterais
import styles from "./replies.module.css"; // Estilos CSS para o componente Replies
import { Comment } from "../Comment"; // Componente para exibir um comentário
import { ReplyModal } from "../ModalReply"; // Componente para exibir o modal de resposta

export const Replies = ({ comment }) => {
  // Estado para controlar a visibilidade das respostas
  const [showReplies, setShowReplies] = useState(false);
  // Estado para armazenar as respostas do comentário
  const [replies, setReplies] = useState([]);

  // Função assíncrona para buscar as respostas do comentário a partir de uma API
  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`); // Faz uma requisição para buscar as respostas
    const data = await response.json(); // Converte a resposta em JSON
    setReplies(data); // Atualiza o estado com as respostas
  }

  // Effect que dispara a função fetchData quando a visibilidade das respostas mudar
  useEffect(() => {
    if (showReplies) {
      fetchData(); // Se as respostas devem ser mostradas, carrega os dados
    }
  }, [showReplies]); // A dependência é 'showReplies', ou seja, dispara sempre que este valor mudar

  return (
    <div className={styles.container}>
      <div className={styles.replies}>
        {/* Botão para alternar entre mostrar e ocultar as respostas */}
        <button
          className={styles.btn}
          onClick={() => setShowReplies(!showReplies)} // Alterna a visibilidade das respostas
        >
          {/* Texto do botão depende do estado 'showReplies' */}
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>

        {/* Se 'showReplies' for verdadeiro, exibe as respostas */}
        {showReplies && (
          <ul>
            {/* Mapeia e exibe cada resposta */}
            {replies.map((reply) => (
              <li key={reply.id}>
                <Comment comment={reply} />{" "}
                {/* Exibe o comentário da resposta */}
                <ReplyModal comment={reply} /> {/* Exibe o modal de resposta */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
