```markdown
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
- **Docker** (para PostgreSQL)

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

3. Configure o banco de dados utilizando Docker:

Se você estiver utilizando Docker para configurar o PostgreSQL, siga os passos abaixo:

- Certifique-se de ter o Docker instalado.
- No diretório raiz do projeto, crie o arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
services:
  # 'services' define um ou mais serviços, cada um representando um contêiner.
  
  postgres:
    # 'postgres' é o nome dado a este serviço. Você pode nomear o serviço como desejar.

    image: postgres:15-alpine
    # 'image' especifica a imagem Docker a ser usada para criar o contêiner.
    # 'postgres:15-alpine' indica que estamos usando a versão 15 da imagem do PostgreSQL, baseada na distribuição Alpine Linux, que é uma versão mais leve.

    ports:
      - 5434:5432
    # 'ports' permite mapear portas entre o contêiner e o host (sua máquina).
    # '5432:5432' significa que a porta 5432 do contêiner será mapeada para a porta 5432 do seu host. Isso permite que você acesse o serviço PostgreSQL pela porta 5432 na sua máquina.

    environment:
      POSTGRES_DB: codeconnect_dev
      # 'environment' define variáveis de ambiente dentro do contêiner.
      # 'POSTGRES_DB' define o nome do banco de dados a ser criado automaticamente quando o contêiner for iniciado pela primeira vez. Aqui, o banco de dados será chamado de 'codeconnect_dev'.

      POSTGRES_HOST_AUTH_METHOD: trust
      # 'POSTGRES_HOST_AUTH_METHOD' define o método de autenticação.
      # 'trust' significa que não é necessária senha para conectar ao banco de dados. Isso não é recomendado para ambientes de produção por razões de segurança.

```

4. Inicie o contêiner Docker para o PostgreSQL:

```bash
docker-compose up -d
```

Isso criará e iniciará o banco de dados PostgreSQL na sua máquina.

5. Configure a URL do banco de dados no arquivo `.env`:

Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão ao banco de dados:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/codeconnect"
```

6. Execute as migrações do Prisma:

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
```
