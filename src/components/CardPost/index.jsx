// Importando o componente Image do Next.js para otimizar o carregamento da imagem
import Image from "next/image";

// Importando o componente Avatar para exibir o avatar do autor do post
import { Avatar } from "../Avatar";

// Importando os estilos específicos para o componente CardPost
import styles from "./cardpost.module.css";

// Importando o componente Link do Next.js para navegação entre páginas
import Link from "next/link";
import { incrementThumbsUp } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";
import { ModalComment } from "../ModalComment";

// Componente CardPost que exibe informações sobre um post, incluindo título, conteúdo e autor
export const CardPost = ({ post, highlight }) => {
  // Para fazer com que os dados do form e do post cheguem no arquivo de Thumbs up é usado o método bind
  // Isso faz com o post chegue devidamente
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    // Artigo que representa o post, com largura ajustável dependendo do destaque
    <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
      {/* Cabeçalho do post, contendo a imagem de capa */}
      <header className={styles.header}>
        <figure style={{ height: highlight ? 300 : 133 }}>
          {/* Exibindo a imagem de capa do post com o componente Image */}
          <Image
            src={post.cover} // Fonte da imagem de capa do post
            fill // Preenche o container do <figure> com a imagem
            alt={`Capa do post de título: ${post.title}`} // Texto alternativo para acessibilidade
          />
        </figure>
      </header>

      {/* Corpo do post, contendo título e resumo do conteúdo */}
      <section className={styles.body}>
        <h2>{post.title}</h2> {/* Título do post */}
        <p>{post.body}</p> {/* Resumo do corpo do post */}
        <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
      </section>

      {/* Rodapé do post, contendo o avatar do autor */}
      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton />
            <p>{post.likes}</p>
          </form>
          <div>
            <ModalComment />
            <p>{post.comments.length}</p>
          </div>
        </div>
        {/* Exibindo o avatar do autor, passando a imagem e o nome */}
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
