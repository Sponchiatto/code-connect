# Code Connect - Rede Social para Desenvolvedores

**Code Connect** é uma plataforma social criada para conectar desenvolvedores de todo o mundo. A rede permite que os usuários compartilhem postagens, interajam entre si e acompanhem suas atividades de forma dinâmica.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js**: Framework React para construção de aplicações web rápidas e escaláveis com renderização no lado do servidor.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Prisma**: ORM para interação com banco de dados.
- **Winston**: Biblioteca para logging de eventos importantes, como erros e ações do sistema.
- **Next Image**: Otimização automática de imagens para garantir um carregamento eficiente.

## Funcionalidades Principais

### 1. **Postagens**
   - Exibição de postagens com título, conteúdo e autor.
   - Suporte a conteúdo em Markdown com conversão para HTML.
   
### 2. **Paginação**
   - Carregamento dinâmico das postagens com suporte a paginação (6 postagens por página).
   - Navegação entre as páginas de postagens com links "Página Anterior" e "Próxima Página".

### 3. **Perfil de Autor** *(Em desenvolvimento)*
   - Exibição do avatar e nome do autor ao lado de cada post.
   - Integração com componente `Avatar` para exibição da imagem de perfil.

### 4. **Design Responsivo** *(Em desenvolvimento)*
   - Layout adaptável utilizando Tailwind CSS.
   - Imagens e elementos ajustáveis para diferentes tamanhos de tela.

### 5. **Sistema de Logs**
   - Implementação de logs robustos utilizando **Winston**.
   - Registra eventos e erros em arquivos como `error.log` e `combined.log`.

## Configuração e Execução

### Requisitos

- **Node.js** (14+)
- **npm** ou **yarn**
- **PostgreSQL** (ou outro banco de dados suportado pelo Prisma)

### Instalação

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

3. Configure o banco de dados:

Crie um arquivo `.env` na raiz do projeto e adicione a URL do banco de dados:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/codeconnect"
```

4. Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`.

## Contribuição

Se quiser contribuir, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com suas alterações: `git checkout -b minha-alteracao`.
3. Commit suas mudanças: `git commit -m 'Adicionando nova funcionalidade'`.
4. Envie para sua branch: `git push origin minha-alteracao`.
5. Abra um pull request no repositório original.

## Autor

- **Portfólio**: [Acesse aqui](https://portfolio-murex-seven-43.vercel.app/)
- **GitHub**: [Perfil no GitHub](https://github.com/Sponchiatto)

---
Este README fornece uma visão geral do projeto **Code Connect**, suas funcionalidades e como configurá-lo localmente. Caso tenha dúvidas, fique à vontade para abrir uma issue no repositório!

