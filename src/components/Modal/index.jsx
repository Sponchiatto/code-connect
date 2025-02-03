// "use client" é uma diretiva do Next.js indicando que este arquivo é executado no cliente (navegador)
"use client";

// Importando os hooks e funções necessárias do React
import { forwardRef, useImperativeHandle, useRef } from "react";
// Importando os estilos específicos para o componente Modal
import styles from "./modal.module.css";

// Criando o componente Modal utilizando `forwardRef` para encaminhar referências (refs) do componente pai para este componente
export const Modal = forwardRef(({ children }, ref) => {
  // Criando uma referência interna para o elemento <dialog> usando useRef
  const dialogRef = useRef(null);

  // Função para fechar o modal, chamada quando o botão de fechamento for clicado
  const closeModal = () => {
    // Chamando o método `close()` do HTML para fechar o modal
    dialogRef.current.close();
  };

  // Função para abrir o modal, chamada para exibir o modal
  const openModal = () => {
    // Chamando o método `showModal()` do HTML para abrir o modal
    dialogRef.current.showModal();
  };

  // Usando `useImperativeHandle` para expor funções específicas do componente filho ao componente pai
  // O componente pai poderá acessar essas funções ao passar uma ref para o componente Modal
  useImperativeHandle(ref, () => {
    return {
      closeModal, // Expõe a função `closeModal`
      openModal, // Expõe a função `openModal`
    };
  });

  // Renderizando o conteúdo do modal, com um cabeçalho e o conteúdo passado como children
  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <header className={styles.header}>
        {/* Botão para fechar o modal */}
        <button onClick={closeModal}>X</button>
      </header>
      {/* O conteúdo do modal é passado como filhos (children) */}
      {children}
    </dialog>
  );
});
