// Importando o componente Image do Next.js para otimizar o carregamento de imagens
import Image from "next/image";

// Importando os estilos específicos para o componente Aside
import styles from "./aside.module.css";

// Importando a imagem do logo que será exibida no componente Aside
import logo from "./logo.png";

// Definindo o componente Aside, que será usado para exibir o logo ou outros elementos de navegação
export const Aside = () => {
  return (
    // Elemento <aside>, com a classe de estilos específica
    <aside className={styles.aside}>
      {/* Componente Image do Next.js para renderizar a imagem com otimização de desempenho */}
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  );
};
