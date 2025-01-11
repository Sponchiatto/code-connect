# Code Connect - Rede Social para Desenvolvedores

**Code Connect** é uma rede social desenvolvida para conectar desenvolvedores de todo o mundo. A plataforma permite que os usuários compartilhem postagens, interajam entre si e acompanhem suas atividades de forma dinâmica.

## Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js**: Framework React para construção de aplicações web rápidas e escaláveis com renderização no lado do servidor.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **CSS Modules**: Para gerenciamento eficiente de estilos, proporcionando flexibilidade e um design responsivo.
- **Winston**: Biblioteca para logging de eventos importantes, como erros e ações do sistema.
- **Next Image**: Otimização automática de imagens para garantir um carregamento rápido e eficiente.

## Funcionalidades Principais

### 1. **Postagens**
   - Exibição de postagens com título, conteúdo e autor.
   - Suporte a conteúdo markdown com conversão para HTML, para exibir postagens formatadas corretamente.

### 2. **Paginação**
   - Carregamento dinâmico das postagens com suporte a paginação (exibe 6 postagens por página).
   - Navegação entre as páginas de postagens com links "Página anterior" e "Próxima página".

### 3. **Perfil de Autor** - Em andamento
   - Exibição do avatar e nome do autor ao lado de cada post.
   - Integração com componente `Avatar` para exibir a imagem de perfil de cada autor.

### 4. **Design Responsivo** - Em andamento
   - Layouts adaptáveis com Tailwind CSS e CSS Modules, garantindo uma experiência de usuário fluída em dispositivos móveis e desktop.
   - Imagens de capa e outros elementos são ajustados para diferentes tamanhos de tela.

### 5. **Sistema de Logs**
   - Sistema de logs robusto utilizando **Winston** para capturar eventos importantes, como erros e sucesso nas requisições.
   - Logs são registrados em arquivos específicos, como `error.log` e `combined.log`, para facilitar a manutenção e monitoramento do sistema.

## Setup e Execução do Projeto

### Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Json-server**

### Instalando Dependências

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/code-connect.git
cd code-connect
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Rodando o Projeto

Para rodar o projeto em modo de desenvolvimento, execute o comando:

```bash
npm run dev
# ou
yarn dev
```

Isso iniciará o servidor em `http://localhost:3000`, onde você pode acessar o site.

### JSON-Server
Para mockar a api, o arquivo encontra-se na pasta mocks 

```bash
json-server posts.json -p 3042
```

## Contribuições
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch com suas alterações: `git checkout -b minha-alteracao`.
3. Commit suas mudanças: `git commit -am 'Adicionando uma nova funcionalidade'`.
4. Faça o push para sua branch: `git push origin minha-alteracao`.
5. Envie um pull request.

## Autor

- **Autor**: [Portfólio](https://portfolio-murex-seven-43.vercel.app/) 
- **GitHub**: [GitHub](https://github.com/Sponchiatto)

---

