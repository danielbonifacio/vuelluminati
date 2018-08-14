# Configuração inicial

Após ter clonado o repositório, para torná-lo seu, você precisa configurar algumas coisas.

## package.json

Você pode alterar as keys para os respectivos valores do seu projeto

- `"name"`
- `"version"`
- `"description"`
- `"author"`

Saiba mais sobre como funciona o package.json na [documentação oficial do npm](https://docs.npmjs.com/files/package.json).

## app.json

As configurações aqui inseridas serão lidas pela aplicação.

- `"title"` Título da aplicação
- `"tokenKey"` Chave onde o [Token](/token) será inserido
- `"tokenStorage"` Local onde o storage será inserido

### `title` {docsify-ignore}

Este será o título que irá aparecer no seu navegador. Em rotas, este será concatenado após o `route.meta.title`

### `tokenKey` {docsify-ignore}

A chave que irá conter o Token. Por padrão, seu valor é `"token"`

Caso você utilize mais de um tipo de token, ou queira dar um pouco mais de segurança para a aplicação, altere o nome desta chave.

### `tokenStorage` {docsify-ignore}

Informa o local onde o token será inserido.

Pode receber 3 valores:

- `'cookie'` Armazena o token nos **document.cookie** do navegador
- `'local'` Armazena o token no **localStorage** do navegador
- `'session'` Armazena o token no **sessionStorage** do navegador

## index.html

Você pode alterar o conteúdo da tag `<title>` que é lido pelo navegador antes de carregar o javascript.

## .git
Caso esteja trabalhando dentro de um projeto git, certifique-se de remover o diretório `.git` da raiz.

**Atenção:** o comando abaixo irá **deletar permanentemente** o diretório .git do local onde seu terminal estiver aberto.
```
rm -rf .git
```

## .eslintignore

Caso não deseje usar lint ou configurar diretórios ou arquivos específicos para serem analisados, use o arquivo `.eslintignore`

Saiba mais sobre a configuração do ESLint na [documentação oficial](https://eslint.org/docs/user-guide/configuring)

## envs.json/env.json

Você pode alterar manualmente `Core/Config/envs.json` e `Core/Config/env.json` desde que entenda o que está fazendo.

Remover o ambiete `"prod"` irá causar vários bugs na hora de empacotar a aplicação.

Caso você não possua estes arquivos, veja [como gerar ambientes com o Lummi](http://localhost:3000/#/enviroment?id=gerando-ambientes).
