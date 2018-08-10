# Cookie

Há a possibilidade de leitura e gravação do Token por meio dos cookies do navegador.

Para facilitar esta tarefa, `Core/abs/Cookie` foi criado e pode ser utilizado de qualquer local.

Seu construtor possui apenas uma opção: `force`.

## set

Criar cookies:

### `i.set(name, value, time)` {docsify-ignore}

``` js
import Cookie from 'Core/abs/Cookie';

const cookie = new Cookie({
  force: true,
});

// Cria um cookie que vale por 2 horas
cookie.set('My Awesome Cookie', 'My Awesome Value', 2); // => true
```

Caso exista um cookie com o mesmo nome e `force` seja falso, irá causar um `new Error`

## get

Recuperar os valores de um cookie:

### `i.get(cookieName)` {docsify-ignore}

``` js
cookie.get('My Awesome Cookie'); // => "My Awesome Value"
```

Caso não encontre o cookie, retorna `null`

## check

Verifica se um cookie existe:

### `i.check(cookieName)` {docsify-ignore}

``` js
cookie.check('My NOT Awesome Cookie'); // => false
cookie.check('My Awesome Cookie'); // => true
```

Caso não encontre o cookie, retorna `false`

## unset

Remove um cookie:

### `i.unset(cookieName)` {docsify-ignore}

``` js
cookie.unset('My NOT Awesome Cookie'); // => false
cookie.unset('My Awesome Cookie'); // => true
```

Caso não encontre o cookie, retorna `false`
