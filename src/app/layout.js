// Importando a fonte "Prompt" do Google Fonts para ser usada no layout
import { Prompt } from "next/font/google";

// Importando o componente Aside para ser exibido na estrutura do layout
import { Aside } from "@/components/aside";

// Importando o arquivo global de estilos CSS
import "./globals.css";
import { SearchForm } from "@/components/SearchForm";

// Metadados da página, usados para configurar informações gerais do site (como título e descrição)
export const metadata = {
  title: "Code Connect", // Título da página
  description: "Uma rede social para devs!", // Descrição que aparece em lugares como a tag <meta> da página
};

// Definindo a fonte "Prompt" com os pesos e subsets necessários, além da configuração 'display: swap' para carregar a fonte de forma otimizada
const prompt = Prompt({
  weight: ["400", "600"], // Pesos da fonte que serão utilizados
  subsets: ["latin"], // Subconjunto da fonte para incluir apenas caracteres latinos
  display: "swap", // Configuração para garantir que a fonte seja trocada de maneira suave quando carregada
});

// Componente que define a estrutura global da página
export default function RootLayout({ children }) {
  return (
    // Definindo o HTML da página, com a linguagem configurada para português do Brasil e utilizando a classe da fonte "Prompt"
    <html lang="pt-br" className={prompt.className}>
      <body>
        {/* Container principal da aplicação */}
        <div className="app-container">
          {/* Componente Aside será exibido no layout */}
          <div>
            <Aside />
          </div>
          {/* Área principal onde o conteúdo filho será renderizado */}
          <div className="main-content">
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
