import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";
async function getAllPosts(page) {
  try {
    const response = await fetch(
      `http://localhost:3042/posts?_page=${page}&_per_page=6`
    );
    if (!response.ok) throw new Error("Falha na rede");
    logger.info("Posts recebidos com sucesso");
    return response.json();
  } catch (error) {
    logger.error("Ops, algo correu mal: " + error.message);
    return [];
  }
}

export default async function Home({ searchParams }) {
  const currentpage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentpage);
  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
