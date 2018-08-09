## Build

O Build de uma aplicação pode se tornar um processo chato ao longo do tempo, especialmente quando necessitamos de manter atualizado o versionamento do projeto.

Felizmente, o Lummi ajuda a gente com isso também!

Há duas formas de empacotar a aplicação utilizando a estrutura Vuelluminati:

1. `npm run build`
2. `node lummi run build [-M=MAJOR] [-m=MINOR] [-p=PATCH]`


### `npm run build`

Este comando irá empacotar a aplicação inteira no ambiente `prod` e gerar todos os arquivos no diretório `/dist`.

**O Lummi irá substituir temporariamente o ambiente atual por `prod` e, assim que completado o processo de build, retorna para o ambiente anterior**

### `node lummi run build`

Este comando faz o mesmo que o comando acima. A diferença é que ele aceita 3 parâmetros opcionais:

- `-M` *(adiciona 1 ao Major atual)*
- `-m` *(adiciona 1 ao Minor atual)*
- `-p` *(adiciona 1 ao Patch atual)*

Caso não seja familiarizado com versionamento semântico, veja: [Semantic Versioning](https://semver.org/)

Suponhamos que você esteja na versão `1.0.0` da sua aplicação, e fez uma pequena, mas considerável, alteração na sua aplicação.

Utilizando o comando

```
node lummi run build -m -p
```

Você irá automaticamente atualizar o seu arquivo `package.json` para a versão `1.1.1`, assim que finalizado o build.