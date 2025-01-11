// Importando módulos e dependências necessários
import logger from "@/logger"; // Responsável por registrar logs no sistema
import { remark } from "remark"; // Biblioteca para processar markdown
import html from "remark-html"; // Plugin do remark para converter markdown em HTML

import styles from "./page.module.css"; // Estilos específicos para o componente
import { CardPost } from "@/components/CardPost"; // Componente CardPost para exibir o post

// Função assíncrona para buscar um post do banco de dados ou API usando um slug
async function getPostBySlug(slug) {
  // Define a URL de busca com base no slug
  const url = `http://localhost:3042/posts?slug=${slug}`;

  // Realiza a requisição à API
  const response = await fetch(url);

  // Caso a requisição falhe, registra um erro e retorna um objeto vazio
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return {};
  }

  // Se a requisição for bem-sucedida, registra uma mensagem de sucesso
  logger.info("Posts obtidos com sucesso");

  // Converte a resposta em formato JSON
  const data = await response.json();

  // Caso o post não seja encontrado, retorna um objeto vazio
  if (data.length == 0) {
    return {};
  }

  // Atribui o primeiro post encontrado à variável 'post'
  const post = data[0];

  // Processa o conteúdo markdown para HTML usando o remark
  const processedContent = await remark().use(html).process(post.markdown);

  // Converte o conteúdo processado para string HTML
  const contentHtml = processedContent.toString();

  // Atualiza o conteúdo markdown com o HTML gerado
  post.markdown = contentHtml;

  // Retorna o post com o conteúdo HTML processado
  return post;
}

// Componente da página do post
const PagePost = async ({ params }) => {
  // Chama a função para buscar o post pelo slug presente nas 'params'
  const post = await getPostBySlug(params.slug);

  // Renderiza a página do post com o CardPost e o conteúdo HTML do markdown
  return (
    <div>
      {/* Exibe o CardPost com os detalhes do post e destaque ativo */}
      <CardPost post={post} highlight />

      {/* Exibe a legenda "Código:" */}
      <h3 className={styles.subtitle}>Código:</h3>

      {/* Exibe o conteúdo HTML gerado do markdown */}
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

// Exporta o componente como padrão
export default PagePost;
