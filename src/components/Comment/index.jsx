import Image from "next/image"; // Componente otimizado do Next.js para carregar imagens
import styles from "./comment.module.css"; // Importa os estilos CSS para o componente

// Componente que exibe um comentário individual
export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      {/* Exibe a imagem do avatar do autor do comentário */}
      <Image
        src={comment.author.avatar} // URL do avatar do autor
        width={32} // Largura da imagem
        height={32} // Altura da imagem
        alt={`Avatar do(a) ${comment.author.name}`} // Texto alternativo acessível
      />

      {/* Exibe o nome do autor do comentário em destaque */}
      <strong>@{comment.author.name}</strong>

      {/* Exibe o texto do comentário */}
      <p>{comment.text}</p>
    </div>
  );
};
