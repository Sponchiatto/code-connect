"use client"; // Define que este componente deve ser um Client Component, necessário para componentes de erro no Next.js

import { ArrowBack } from "@/components/icons/Arrowback"; // Ícone de seta para voltar
import Image from "next/image"; // Componente otimizado do Next.js para imagens
import Link from "next/link"; // Componente para navegação interna no Next.js
import { Heading } from "@/components/Heading"; // Componente personalizado para títulos
import { useEffect } from "react"; // Hook do React para efeitos colaterais
import style from "./error/error.module.css"; // Importa os estilos CSS para o componente de erro
import banner from "./error/500.png"; // Imagem de erro (garanta que o caminho está correto)

export default function Error({ error }) {
  // useEffect é usado para registrar o erro no console assim que ele ocorrer
  useEffect(() => {
    console.error(error); // Exibe o erro no console para depuração
  }, [error]); // Dependência do efeito é o erro, garantindo que seja registrado sempre que mudar

  return (
    <div className={style.errorContainer}>
      {/* Título principal do erro */}
      <h2 style={{ color: "white" }}>Something went wrong!</h2>

      <div className={style.container}>
        {/* Exibe a imagem de erro */}
        <Image src={banner} alt="Error banner" />

        {/* Título personalizado informando que ocorreu um erro */}
        <Heading>Opa! Ocorreu um erro.</Heading>

        {/* Texto explicativo para o usuário */}
        <p className={style.text}>
          Não conseguimos carregar a página, volte para seguir navegando.
        </p>

        {/* Link para redirecionar o usuário de volta ao feed */}
        <Link href="/">
          Voltar ao feed <ArrowBack color="#81FE88" />
        </Link>
      </div>
    </div>
  );
}
