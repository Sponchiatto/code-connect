import db from "../../../../../../prisma/db"; // Importa a instância do banco de dados Prisma.

// Função assíncrona para lidar com requisições GET e obter respostas de um comentário específico.
export async function GET(_request, { params }) {
  // Busca todas as respostas (replies) de um comentário com base no `parentId`.
  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(params.id), // Converte o parâmetro `id` para número e filtra os comentários filhos.
    },
    include: {
      author: true, // Inclui as informações do autor da resposta.
    },
  });

  // Retorna a lista de respostas em formato JSON.
  return Response.json(replies);
}
