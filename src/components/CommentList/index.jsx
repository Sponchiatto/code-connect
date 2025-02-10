import { Comment } from "../Comment"; // Importa o componente de exibição de comentários
import { ReplyModal } from "../ModalReply"; // Importa o componente para resposta de comentários (modal)
import { Replies } from "../Replies"; // Importa o componente para exibir as respostas de comentários
import styles from "./commentlist.module.css"; // Importa os estilos CSS para o componente

// Componente que exibe uma lista de comentários
export const CommentList = ({ comments }) => {
  // Verifica se não há comentários e exibe uma mensagem
  if (comments.length === 0) {
    return <p>Nenhum comentário ainda.</p>; // Mensagem de "nenhum comentário"
  }

  return (
    <section className={styles.comments}>
      {" "}
      {/* Define a seção de comentários com estilo específico */}
      <h2>Comentários</h2> {/* Título da seção */}
      <ul>
        {" "}
        {/* Lista de comentários */}
        {comments.map(
          (
            comment // Itera sobre a lista de comentários
          ) => (
            <li key={comment.id}>
              {" "}
              {/* A chave é o ID do comentário para garantir a unicidade */}
              <Comment comment={comment} /> {/* Exibe o comentário */}
              <ReplyModal comment={comment} />{" "}
              {/* Modal para responder ao comentário */}
              <Replies comment={comment} />{" "}
              {/* Exibe as respostas para o comentário */}
            </li>
          )
        )}
      </ul>
    </section>
  );
};
