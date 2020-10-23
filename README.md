
# Buysilia
> É um projeto, proposto pela Resília Educação, de criação de um marketplace. 

## Inicialização do projeto
No terminal digite o comando `npm install` para baixar as dependências desse projeto. Depois do download, use o comando `npm start` para iniciar.


## Rotas
Nosso projeto foi feito usando API REST com 4 verbos HTTP `GET, POST, PUT e DELETE` fazendo requisições com 4 tabelas do banco de dados:  **client**, **product**, **provider** e **purchase**.

### Método GET

- Para consultar apenas um *cliente*, *fornecedor* ou *produto* utilize o seu testador de requisições de preferência no método `GET` e use as rotas, uma por vez:
`http://localhost:3000/client/:id`,
`http://localhost:3000/provider/:id` ou
`http://localhost:3000/product/:id`.
Substitua o `:id` pelos identificadores do *cliente*, *fornecedor* ou *produto*.
O retorno será um json com as informações do *cliente*, *fornecedor* ou *produto*.

- Caso queira consultar todos os *clientes*, *fornecedores*, *produtos* ou *compras* use as rotas no método `GET`, uma por vez:
 `http://localhost:3000/client`,
 `http://localhost:3000/provider/`,
 `http://localhost:3000/product/` ou
 `http://localhost:3000/purchase/`.
 O retorno será um array de objetos com as informações do *cliente*, *fornecedor* ou *produto*.

- Caso queira consultar todos os produtos de um determinado fornecedor use a rota no método `GET`:
`http://localhost:3000/product/provider/:providerId`.
Substitua `:providerId` pelo identificador do fornecedor.
O retorno será um array de objetos com as informações *fornecedor*.

- Caso queira consultar todas as compras de um cliente específico use a rota no método `GET`:
`http://localhost:3000/purchase/client/:clientId`.
Substitua `:clientId` pelo identificador do cliente.
O retorno será um array de objetos com as informações *cliente*.

- Caso queira consultar todas as compras de um produto específico use a rota no método `GET`:
`http://localhost:3000/purchase/product/:productId`.
Substitua `:productId` pelo identificador do produto.
O retorno será um array de objetos com as informações *produto*.
---

### Método POST
- Para inserir um **cliente**, você terá que usar a rota `http://localhost:3000/client` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	first_name: "Exemplo",
	last_name: "Exemplo2",
	email: "exemplo@exemplo.com",
	password: "exemplo",
	cpf: "12345678901",
	phone: "21978452415",
	address: "Exemplo, casa 01"	
}
```
- Para inserir um **fornecedor**, você terá que usar a rota `http://localhost:3000/provider` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	name: "Exemplo",
	phone: "21978942478",
	company_name: "Exemplo",
	cnpj: "12345677777234",
	address: "Exemplo, casa 02"
}
```

- Para inserir um **produto**, você terá que usar a rota `http://localhost:3000/product` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	provider_id: 4,
	name: "Exemplo",
	evaluation: 9,
	description: "Esse é um exemplo de descrição",
	price: 4199.99,
	stock: 10
}
```
- Para inserir uma **compra**, você terá que usar a rota `http://localhost:3000/purchase` no método `POST` com os seguintes dados no corpo da requisição:

```json
{
	client_id: 2,
	product_id: 1
}
```
- Todos os métodos POST retornam as consultas dos *clientes*, *fornecedores*, *produtos* ou *compras*.
---
### Método PUT
- Para atualizar um **cliente**, você terá que usar a rota `http://localhost:3000/client/:id` no método `PUT`, substituindo o `:id` pelo identificador do cliente,  com a mesma estrutura de dados do **método POST**.

- Para atualizar um **fornecedor**, você terá que usar a rota `http://localhost:3000/provider/:id` no método `PUT`, substituindo o `:id` pelo identificador do fornecedor,  com a mesma estrutura de dados do **método POST**.

- Para atualizar um **produto**, você terá que usar a rota `http://localhost:3000/product/:id` no método `PUT`, substituindo o `:id` pelo identificador do produto,  com a mesma estrutura de dados do **método POST**.
- Todos os métodos PUT deverá retonar um JSON 
```json
{
	message: "$table modified"
}
```
---
### Método DELETE
- Para deletar um **cliente**, você terá que usar a rota `http://localhost:3000/client/:id` no método `DELETE`, substituindo o `:id` pelo identificador do cliente.

- Para deletar um **fornecedor**, você terá que usar a rota `http://localhost:3000/provider/:id` no método `DELETE`, substituindo o `:id` pelo identificador do fornecedor.

- Para deletar um **produto**, você terá que usar a rota `http://localhost:3000/product/:id` no método `DELETE`, substituindo o `:id` pelo identificador do produto.
 
- Para deletar uma **compra**, você terá que usar a rota `http://localhost:3000/purchase/:id` no método `DELETE`, substituindo o `:id` pelo identificador da compra.
- Todos os métodos DELETE deverá retonar um JSON 
```json
{
	message: "$table deleted"
}
```
---
## Deploy
Para hospedar gratuitamente nossa aplicação, utilizamos o Heroku. A API pode ser acessada através do link: https://stark-hamlet-20271.herokuapp.com/ + rota desejada.


## Ferramentas utilizadas
- express
- express-validator
- bcrypt
- body-parser
- sqlite3

## Colaboradores 
 - [Eduardo Oliveira](https://github.com/Eduardo-html)
 - [Felipe Streva](https://github.com/Felipe-Streva)
 - [Victoria Marques](https://github.com/vicckm)
