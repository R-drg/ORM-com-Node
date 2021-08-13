# Sequelize

## Como iniciar

Para iniciar no modo desenvolvimento, utilize-se dos comandos abaixo

```shell
$ docker-compose up

$ yarn dev
```

## Documentação da API

### Listar todos usuários

__URL__: `/users`

__METHOD__: `GET`

__Resposta bem sucedida__

__Code__: `200 OK`

```json
[
    {
        "id": 1,
        "name": "Rodrigo Henrique",
        "email": "rodrigo@domain.com",
        "password": "senhafacil",
        "createdAt": "2021-08-13T21:24:29.349Z",
        "updatedAt": "2021-08-13T21:29:07.731Z"
    },
    {
        "id": 2,
        "name": "Rick Sanchez",
        "email": "rick@domain.com",
        "password": "rickmorty",
        "createdAt": "2021-08-13T21:30:19.208Z",
        "updatedAt": "2021-08-13T21:30:19.208Z"
    }
]
```

### Listar Usuário por ID

__URL__: `/users/:id`

__METHOD__: `GET`

__Resposta bem sucedida__

```json
{
    "id": 2,
    "name": "Rick Sanchez",
    "email": "rick@domain.com",
    "password": "rickmorty",
    "createdAt": "2021-08-13T21:30:19.208Z",
    "updatedAt": "2021-08-13T21:30:19.208Z"
}
```

### Criar Usuário

__URL__: `/users`

__METHOD__: `POST`

__Requisição__

```json
{
    "name": "[valid name]",
    "email": "[valid email]",
    "password": "[valid password]
}
```

__Exemplo de Requisição__

```json
lmao
```

__Resposta bem sucessida__

__Code__: `201 CREATED`

```json
{
    "id": 1,
    "name": "Rodrigo Henrique",
    "email": "rodrigo@domain.com",
    "password": "senhadificil",
    "updatedAt": "2021-08-13T21:24:29.349Z",
    "createdAt": "2021-08-13T21:24:29.349Z"
}
```

### Atualizar Usuário

__URL__: `/users/:id`

__METHOD__: `PUT`

__Requisição__

Todos campos são opcionais

```json
{
    "name": "[valid name]",
    "email": "[valid email]",
    "password": "[valid password]
}
```

__Exemplo de Requisição__

```json
{
    "password": "senhafacil"
}
```

__Resposta bem sucedida__

__Code__: `200 OK`

```json
{
    "id": 1,
    "name": "Rodrigo Henrique",
    "email": "rodrigo@domain.com",
    "password": "senhafacil",
    "createdAt": "2021-08-13T21:24:29.349Z",
    "updatedAt": "2021-08-13T21:29:07.731Z"
}
```

### Deletar Usuário

__URL__: `/users/:id`

__METHOD__: `DELETE`

__Resposta bem sucedida__

__Code__: `200 OK`

```json
{
    "message": "User with id 2 has been deleted"
}
```