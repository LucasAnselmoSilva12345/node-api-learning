# Node API Learning

## Descrição

"Node API Learning" é um projeto de aprendizado para a criação de uma API simples de conteúdo de vídeos, que implementa as operações CRUD (Create, Read, Update, Delete). O banco de dados utilizado é o PostgreSQL, hospedado no Neon. A API em si está hospedada no Render.

## Funcionalidades

A API permite a gestão de uma coleção de vídeos, fornecendo as seguintes operações:

- **Criar (Create):** Adicionar novos vídeos à coleção.
- **Ler (Read):** Obter a lista de todos os vídeos ou informações detalhadas de um vídeo específico.
- **Atualizar (Update):** Modificar informações de vídeos existentes.
- **Deletar (Delete):** Remover vídeos da coleção.

### Estrutura da Tabela

A tabela de vídeos no banco de dados PostgreSQL possui a seguinte estrutura:

```sql
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
```

## Tecnologias Utilizadas

- **Node.js:** Plataforma utilizada para construir a API.
- **Fastify:** Framework web para Node.js, utilizado para estruturar a API.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional, utilizado para persistência de dados.
- **Neon:** Serviço de hospedagem para o banco de dados PostgreSQL.
- **Render:** Serviço de hospedagem para a API.

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/LucasAnselmoSilva12345/node-api-learning
    cd node-api-learning
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Configuração do Banco de Dados:**

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

    ```plaintext
    PGHOST=''
    PGDATABASE=''
    PGUSER=''
    PGPASSWORD=''
    ENDPOINT_ID=''
    ```

    Certifique-se de substituir os valores `PGHOST`, `PGDATABASE`, `PGUSER`, `PGPASSWORD` e `ENDPOINT_ID` pelos detalhes do seu banco de dados PostgreSQL hospedado no Neon.

4. **Inicialize a aplicação:**

    ```bash
    npm run dev
    ```

## Links Importantes

- **API Online:** [https://node-api-learning-ehgn.onrender.com/](https://node-api-learning-ehgn.onrender.com/)
- **Hospedagem do Banco de Dados:** [Neon](https://console.neon.tech/app/projects)
- **Hospedagem da API:** [Render](https://dashboard.render.com/)