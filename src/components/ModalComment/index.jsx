// "use client" é uma diretiva do Next.js indicando que este arquivo é executado no cliente (navegador)
"use client";

// Importando hooks e componentes necessários do React e outros módulos
import { useRef } from "react";
// Importando o componente IconButton e o ícone de chat
import { IconButton } from "../iconButton";
import { Chat } from "../icons/Chat";
// Importando o componente Modal
import { Modal } from "../Modal";

// Componente ModalComment, responsável por exibir o ícone de chat que ao ser clicado abre o modal
export const ModalComment = () => {
  // Criando uma referência para o componente Modal, que será usada para acessar suas funções
  const modalRef = useRef(null);

  return (
    <>
      {/* Modal é renderizado, passando a referência `modalRef` para poder controlar sua abertura */}
      <Modal ref={modalRef}>
        <h1>Olá Mundo</h1> {/* O conteúdo do modal será o título "Olá Mundo" */}
      </Modal>

      {/* IconButton renderiza um botão com o ícone de chat, ao ser clicado abre o modal */}
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat /> {/* O ícone de chat é exibido dentro do botão */}
      </IconButton>
    </>
  );
};
