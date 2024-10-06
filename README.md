# Teste Técnico Contato Seguro - Resolução

### 1. DESCRIÇÃO

Este repositório contém a resolução do teste técnico de QA júnior, abordando a criação e execução de testes automatizados, testes de API e a documentação de bugs e melhorias identificados durante o processo.

Foram utilizados as seguintes ferramentas e tecnologias para a realização deste teste:

- **Docker**: Para configurar e rodar o ambiente local.
- **Cypress**: Para criar e executar os testes automatizados de frontend.
- **Postman**: Para criar e documentar os testes de API.
- **CSS Selector Helper**: Utilizado para ajudar na automação dos testes de frontend.
- **Trello**: Utilizado para a documentação dos casos de teste, cenários de teste e bug report.


### 2. CONFIGURAÇÃO DO AMBIENTE

_Para rodar o projeto localmente, siga os seguintes passos:_

1. Certifique-se de ter o Docker instalado.

2. Descompacte o projeto enviado por e-mail e acesse a pasta raiz via terminal.

3. Execute o seguinte comando para inicializar os containers: `docker-compose up --build -d`.

4. A aplicação estará disponível na seguinte URL: `http://localhost:5400`

- **Banco de dados (MySQL):** `port 3400`
- **Backend (PHP):** `port 8400`

5. Para reiniciar o ambiente posteriormente, basta rodar: `docker-compose up -d`


### 3. DOCUMENTAÇÃO

- **Casos de teste e cenários de teste**: A documentação detalhada dos casos e cenários de teste, incluindo os testes automatizados e manuais, está disponível no Trello. Para acessá-la, visite o link:
  - [Documentação de Testes](https://trello.com/b/6HYotEZY/testes)


- **Bug Reports**: Os bugs encontrados e suas respectivas descrições, assim como sugestões de melhorias, estão disponíveis no Trello. Acesse o link para visualizar os relatórios de bugs:
  - [Bug Report](https://trello.com/b/05v4J4dR/bug-report)


### 4. TESTES AUTOMATIZADOS

- **Cypress**: Os testes automatizados de frontend foram implementados utilizando o Cypress. Para rodá-los, siga os seguintes passos:

1.  Navegue até a pasta raiz do projeto.

2.  Execute o comando: `npx cypress open`

3.  No painel do Cypress, você poderá visualizar e rodar os testes e2e automatizados criados para o projeto.


### 5. TESTES DE API

- **Postman**: Os testes de API foram documentados e executados utilizando o Postman. As rotas de teste estão exportadas no formato `.json` e podem ser importadas diretamente no Postman para execução.

- [Download do arquivo `postman.json`](./Postman-json/QA-jr-test-%20CRUD.postman_collection.json)


### 6. ENTREGA

A resolução do teste foi entregue no formato de repositório GitHub e a documentação, como mencionada, está disponível nos links acima.
