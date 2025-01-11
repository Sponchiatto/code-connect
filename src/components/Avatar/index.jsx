// Importando o componente Image do Next.js para otimizar o carregamento da imagem do avatar
import Image from "next/image";

// Importando os estilos específicos para o componente Avatar
import styles from "./avatar.module.css";

// Componente Avatar que exibe uma imagem de avatar e o nome do usuário
export const Avatar = ({ name, imageSrc }) => {
  return (
    // Lista não ordenada para exibir o avatar e o nome do usuário
    <ul className={styles.avatar}>
      {/* Exibindo a imagem do avatar com o componente Image do Next.js */}
      <li>
        <Image
          src={imageSrc} // Fonte da imagem do avatar
          width={32} // Largura da imagem (32px)
          height={32} // Altura da imagem (32px)
          alt={`Avatar do(a) ${name}`} // Texto alternativo para a imagem
        />
      </li>
      {/* Exibindo o nome do usuário */}
      <li>@{name}</li>
    </ul>
  );
};
