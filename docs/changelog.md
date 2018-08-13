# Changelog {docsify-ignore-all}

## 1.2.0 <small style="color: grey;font-size: .5em;">(13/08/2018)</small>
- Lummi - Melhorias no comando de adição de ambientes
- Lummi - Adição de **módulos** nos ambientes
- Lummi - Correção de um *bug* que mostrava null ao atualizar o ambinete
- Lummi - Melhorias no comando de atualização de ambinentes

**Resumo:** O Lummi estava tornando meio cansativo atualizar apenas um item do ambiente, e não permitia cadastrar ambientes sem API. Agora todas as inserções e atualizações são feitas de forma dinâmica.

O Bug que mostrava como `null` o nome do ambiente atualizado foi corrigido.

**Módulos** são, basicamnte, sufixos para sua aplicação.

Por exemplo: sua API pode ter um ponto único de autenticação, mas todo o restante da lógica deve ser feita num módulo específico.

Anteriormente, isso não era suportado nativamente pelo Vuelumminati, forçando o desenvolvedor à adicionar manualmente esta chave.

Agora o módulo está acessível dentro dos atalhos `$module` (`envs[env].module`) e `$apm` que concatena o módulo à API (`$api/$module`)

---

## 1.0.1 <small style="color: grey;font-size: .5em;">(10/08/2018)</small>
- Lummi - Correção do template dos módulos
- Lummi - Correção do `Core/Http`
- Lummi - Correção do polyfill

---

## 1.0.0 <small style="color: grey;font-size: .5em;">(09/08/2018)</small>
- Lummi - Módulo de ambientes
- Lummi - Módulo de módulos
- Lummi - Módulo de componentes
