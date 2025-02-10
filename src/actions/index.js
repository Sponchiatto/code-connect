"use server"; // Declara que essas funções serão executadas no servidor.

import { revalidatePath } from "next/cache"; // Importa a função para revalidar o cache do Next.js.
import db from "../../prisma/db"; // Importa a instância do banco de dados Prisma.

// Função para incrementar o número de "curtidas" (thumbs up) em um post.
export async function incrementThumbsUp(post) {
  // Atualiza o post no banco de dados, incrementando o número de curtidas em 1.
  await db.post.update({
    where: {
      id: post.id, // Encontra o post pelo ID.
    },
    data: {
      likes: {
        increment: 1, // Incrementa o número de curtidas.
      },
    },
  });

  // Revalida a página inicial e a página específica do post para atualizar a informação das curtidas.
  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

// Função para adicionar um comentário em um post.
export async function postComment(post, formData) {
  // Busca o usuário que está comentando, nesse caso, um usuário fixo "anabeatriz_dev".
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  // Cria um novo comentário no banco de dados, associando-o ao post e ao autor.
  await db.comment.create({
    data: {
      text: formData.get("text"), // Obtém o texto do comentário do formulário.
      authorId: author.id, // Associa o comentário ao autor encontrado.
      postId: post.id, // Associa o comentário ao post correspondente.
    },
  });

  // Revalida a página inicial e a página específica do post para refletir o novo comentário.
  revalidatePath("/");
  revalidatePath(`/${post.slug}`);
}

// Função para adicionar uma resposta a um comentário existente.
export async function postReply(parent, formData) {
  // Busca o usuário que está respondendo, no caso "anabeatriz_dev".
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  // Busca o post ao qual o comentário pertence.
  const post = await db.post.findFirst({
    where: {
      id: parent.postId, // Obtém o ID do post a partir do comentário pai.
    },
  });

  // Cria a resposta no banco de dados.
  await db.comment.create({
    data: {
      text: formData.get("text"), // Obtém o texto da resposta do formulário.
      authorId: author.id, // Associa a resposta ao autor encontrado.
      postId: post.id, // Associa a resposta ao post correto.
      parentId: parent.parentId ?? parent.id, // Define a resposta como filha do comentário original.
    },
  });

  // Revalida a página do post para refletir a nova resposta.
  revalidatePath(`/${post.slug}`);
}
