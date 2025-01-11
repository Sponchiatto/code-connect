// Importando o componente CardPost para exibir informações sobre cada post
import { CardPost } from "@/components/CardPost";

// Importando o logger para registrar mensagens de log
import logger from "@/logger";

// Importando o arquivo de estilos CSS específico para a página
import styles from "./page.module.css";

// Importando o componente Link do Next.js para navegação entre páginas
import Link from "next/link";

// Função assíncrona para buscar posts a partir de uma página específica
async function getAllPosts(page) {
  try {
    // Realizando a requisição para obter posts, com a paginação de 6 posts por página
    const response = await fetch(
      `http://localhost:3042/posts?_page=${page}&_per_page=6`
    );

    // Se a resposta da API não for bem-sucedida, gera um erro
    if (!response.ok) throw new Error("Falha na rede");

    // Registrando no log a mensagem de sucesso
    logger.info("Posts recebidos com sucesso");

    // Retorna os posts em formato JSON
    return response.json();
  } catch (error) {
    // Em caso de erro, registra uma mensagem de erro no log e retorna um array vazio
    logger.error("Ops, algo correu mal: " + error.message);
    return [];
  }
}

// Função que representa a página inicial (Home)
export default async function Home({ searchParams }) {
  // Obtendo o número da página a partir dos parâmetros de pesquisa (query parameters)
  const currentpage = searchParams?.page || 1; // Página padrão é 1 se não houver um parâmetro de página

  // Chama a função para obter os posts da página atual e também os links para a página anterior e próxima
  const { data: posts, prev, next } = await getAllPosts(currentpage);

  return (
    // Container principal da página
    <main className={styles.grid}>
      {/* Mapeia os posts e renderiza um CardPost para cada um */}
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      {/* Links para navegação entre as páginas, se existirem */}
      <div className={styles.links}>
        {/* Link para a página anterior, se houver */}
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}

        {/* Link para a próxima página, se houver */}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
