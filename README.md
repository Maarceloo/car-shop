# Car Shop 🚗

Neste projeto apliquei os princípios de Programação Orientada a Objetos (**POO**) para a construcao de uma `API` com **CRUD**  para gerenciar uma concessionária de veículos. Isso foi feito utilizando o banco de dados **MongoDB** através do framework do **Mongoose**

---

## 📋 Pré-requisitos

- A aplicação necessita do `Docker` instalado localmente, execute o comando no terminal para verificar a instalação.

```
docker -v
```

</br>

- A aplicação necessita que as portas estejam disponiveis:
`Node - 3001`
`MongoDb - 27017`
</br>
- Verifique a disponibilidade de portas no terminal executando o seguinte comando:

```
docker ps -a
```

---

### 🔧 Instalação

Rodando a aplicacão.

Clone o repositorio:

```
git@github.com:Maarceloo/car-shop.git
```

Acesse `car-shop`

```
cd car-shop
```

Instale as dependencias:

```
npm install
```

Suba os containers:

```
docker-compose up -d
```

Abra o VSCode:

```
code .
```

---

## ⚙️ Executando

Voce precisa da extensao `Thunder Client` do VSCode instalada para continuar.
Utilizando o `Thunder Client` importe o arquivo **thunder-collection_car_shop.json**

Rode a aplicacao:

```
npm run dev
```

`Utilize o Thender Client para visualizar a execucao do CRUD`

---

### 🔩 Rodando os Testes

Execute o comando abaixo no terminal para rodar os testes:

```
npm run test:mocha
```

Ou

```
npm run test:coverage
```

---

## 🛠️ Construído com

- [Typescript](https://www.typescriptlang.org/)
- [Node.Js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Dcker](https://www.docker.com/)

---
⌨️ Desenvolvido por [Marcelo De Lima](https://github.com/Maarceloo) 🛠️
