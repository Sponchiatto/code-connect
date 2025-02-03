// Importando módulos e dependências necessários
import logger from "@/logger"; // Responsável por registrar logs no sistema
import { remark } from "remark"; // Biblioteca para processar markdown
import html from "remark-html"; // Plugin do remark para converter markdown em HTML

import styles from "./page.module.css"; // Estilos específicos para o componente
import { CardPost } from "@/components/CardPost"; // Componente CardPost para exibir o post
import db from "../../../../prisma/db"; // Importa a instância do Prisma para interação com o banco de dados
import { redirect } from "next/navigation"; // Função de redirecionamento do Next.js

// Função assíncrona para buscar um post do banco de dados usando um slug
async function getPostBySlug(slug) {
  try {
    // Busca o primeiro post que corresponde ao slug fornecido e inclui os dados do autor
    const post = await db.post.findFirst({
      include: {
        author: true,
        comments: true
      },
      where: {
        slug,
      },
    });

    // Se o post não for encontrado, lança um erro
    if (!post) {
      throw new Error(`Post com slug ${slug} não foi encontrado`);
    }

    // Processa o conteúdo markdown para HTML usando a biblioteca remark
    const processedContent = await remark().use(html).process(post.markdown);

    // Converte o conteúdo processado para string HTML
    const contentHtml = processedContent.toString();

    // Atualiza o conteúdo do post com o HTML gerado
    post.markdown = contentHtml;

    // Retorna o post com o conteúdo processado
    return post;
  } catch (error) {
    // Registra um erro no logger caso ocorra falha ao obter o post
    logger.error("Falha ao obter o post com o slug: ", {
      slug,
      error,
    });
  }

  // Redireciona para a página de "not-found" se ocorrer erro
  redirect("/not-found");
}

// Componente da página do post
const PagePost = async ({ params }) => {
  // Obtém o post chamando a função getPostBySlug com o slug da URL
  const post = await getPostBySlug(params.slug);

  return (
    <div>
      {/* Exibe o CardPost com os detalhes do post e destaque ativado */}
      <CardPost post={post} highlight />

      {/* Exibe a legenda "Código:" antes do conteúdo do post */}
      <h3 className={styles.subtitle}>Código:</h3>

      {/* Renderiza o conteúdo HTML do markdown de forma segura */}
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

// Exporta o componente como padrão
export default PagePost;
