// Importando o componente CardPost para exibir informações sobre cada post
import { CardPost } from "@/components/CardPost";
// Importando o logger para registrar mensagens de erro e depuração
import logger from "@/logger";
// Importando o arquivo de estilos CSS específico para a página
import styles from "./page.module.css";
// Importando o componente Link do Next.js para navegação entre páginas
import Link from "next/link";
// Importando a conexão com o banco de dados através do Prisma
import db from "../../prisma/db";

// Função assíncrona para buscar posts a partir de uma página específica, com suporte a pesquisa por título
async function getAllPosts(page, searchTerm) {
  try {
    const where = {}; // Objeto de filtros para a busca no banco de dados

    // Se um termo de pesquisa foi fornecido, filtra os posts pelo título
    if (searchTerm) {
      where.title = {
        contains: searchTerm, // Busca posts que contenham o termo no título
        mode: "insensitive", // Faz a busca sem diferenciar maiúsculas e minúsculas
      };
    }

    const perPage = 4; // Define o número de posts por página
    const skip = (page - 1) * perPage; // Calcula quantos posts devem ser pulados com base na página atual
    const prev = page > 1 ? page - 1 : null; // Calcula a página anterior (se aplicável)
    const totalItems = await db.post.count({ where }); // Obtém o número total de posts que correspondem ao filtro
    const totalPages = Math.ceil(totalItems / perPage); // Calcula o número total de páginas
    const next = page < totalPages ? page + 1 : null; // Determina se há uma próxima página

    // Busca os posts da página atual, ordenando do mais recente para o mais antigo
    const posts = await db.post.findMany({
      take: perPage, // Limita a quantidade de posts retornados
      skip, // Define quantos posts devem ser ignorados (para paginação)
      where, // Aplica os filtros (se houver)
      orderBy: { id: "desc" }, // Ordena os posts pelo id
      include: {
        author: true, // Inclui os dados do autor no retorno
        comments: true, // Inclui dados do comentário
      },
    });

    // Retorna os posts e as informações de paginação
    return { data: posts, prev, next };
  } catch (error) {
    // Registra um erro caso ocorra alguma falha ao buscar os posts
    logger.error("Falha ao obter posts", { error });

    // Retorna um objeto vazio e sem links de navegação em caso de erro
    return { data: [], prev: null, next: null };
  }
}

// Função que representa a página inicial (Home)
export default async function Home({ searchParams }) {
  // Obtém o número da página a partir dos parâmetros de pesquisa da URL (query parameters)
  const currentpage = parseInt(searchParams?.page || 1); // Define a página padrão como 1 caso não seja especificada
  const searchTerm = searchParams?.q; // Obtém o termo de pesquisa (se houver)

  // Busca os posts da página atual e obtém os links para a página anterior e próxima
  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(currentpage, searchTerm);

  return (
    // Container principal da página
    <main className={styles.grid}>
      {/* Mapeia os posts e renderiza um CardPost para cada um */}
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      {/* Links para navegação entre páginas, caso existam */}
      <div className={styles.links}>
        {/* Link para a página anterior, se houver */}
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página anterior
          </Link>
        )}

        {/* Link para a próxima página, se houver */}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
