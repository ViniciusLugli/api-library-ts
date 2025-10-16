# API Biblioteca (estudo)

Projeto de estudo para aprender TypeScript e Arquitetura Hexagonal / Clean Architecture.

## Visão geral

- Linguagem: TypeScript
- Framework: Express
- Objetivo: implementar uma API simples de biblioteca com entidades `Author` e `Book`, separando camadas em domain, application, infra e shared, usando DTOs, mappers e casos de uso.

## Estrutura do projeto

Principais pastas:

- `src/app` - ponto de entrada da aplicação (`app.ts`, `server.ts`).
- `src/application` - camada de aplicação: DTOs, mappers, use cases.
  - `useCases` - lógica de casos de uso (criar, atualizar, deletar, buscar).
  - `dto` - objetos de transferência de dados.
  - `mappers` - conversões entre entidades e DTOs.
- `src/domain` - entidades e contratos de repositórios.
- `src/infra` - implementação de infraestrutura (repositórios, rotas, controllers, middlewares, banco de dados etc.).
- `src/shared` - erros e utilitários compartilhados.

## Como rodar

Pré-requisitos:

- Node.js (recomendado >= 18)
- npm

Instalação:

```bash
npm install
```

Modo desenvolvimento (auto-reload com `ts-node-dev`):

```bash
npm run dev
```

Build e execução em produção:

```bash
npm run build
npm start
```

A API roda por padrão em `http://localhost:3000` (ou use a variável de ambiente `PORT`).

## Endpoints básicos

- `GET /` - retorna `{ message: "API is running" }`

Rotas adicionais (Authors, Books) estão implementadas em `src/infra/http/controllers` e `src/infra/http/routes`.

## Tratamento de erros

O projeto possui uma classe `AppError` em `src/shared/errors/AppError.ts` usada para lançar erros esperados (com `message` e `statusCode`).

O middleware `src/infra/http/middlewares/errorHandler.ts` formata respostas de erro e inclui stack trace em `NODE_ENV=development`.

## Arquitetura

O projeto segue princípios de Clean/Hexagonal Architecture:

- Entidades e contratos na camada `domain`.
- Casos de uso (aplicação) encapsulam regras de negócio e dependem apenas de interfaces de repositório.
- Infra implementa essas interfaces e provê controllers que traduzem HTTP <-> DTOs.

## Onde começar a estudar no código

- `src/domain/entities` - para entender o modelo (Author, Book).
- `src/application/useCases` - para ver a lógica de negócio isolada.
- `src/infra/http/controllers` - para ver como as requests são tratadas e convertidas em DTOs.
- `src/infra/http/middlewares/errorHandler.ts` - para ver como erros são formatados.

---

Gerado automaticamente com base na estrutura do projeto para ajudar no estudo de TypeScript e arquiteturas limpas.
