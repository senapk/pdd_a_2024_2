# Revisão

- O que é TypeScript e como ele se relaciona com o JavaScript?

É um superset de javascript que faz principalmente uma camada de validação dos dados.

- Porque dizemos que Typescript é transpilado ao invés de compilado?

Traspilado porque ao invés de gerar um código binário executável, ele gera um código em linguagem javascript.

- Qual é a diferença entre variáveis ​​declaradas com `var`, `let` e `const` em TypeScript?

var cria uma variável global, não presa ao escopo.
let cria uma variável de escopo.
const cria uma variável imutável, ou seja, seu conteúdo não pode ser alterado durante o tempo de vida da variável

- Como você define um tipo explícito para uma variável em TypeScript?

let idade: number = 10;

- O que é inferência de tipos?

Quando é possível descobrir o tipo da variável pelo tipo do valor que é recebido do lado direito do igual.

- Qual a diferença entre atribuição de tipo e inicialização de variável? Me dê um exemplo de variável inicializada e não inicializada.

let idade: number; //atribuição de tipo
let idade: number = 10; //inicialização.


- Qual valor possui uma variável não inicializada?
- Quais os três tipos de dados primitivos em TypeScript?
- Quais os três tipos de dados que representam "ausência de valor" em TypeScript? Quando usar cada um deles?
- O que é o tipo `any` em TypeScript?
- Crie uma variável que pode ser do tipo `string` ou `number`.
- Como você declara um array de números em TypeScript?
- Como converter de `string` para `number` em TypeScript?
- Como converter de `number` para `string` em TypeScript?
- Dado um número quebrado, como você arredonda ele para baixo?
- Como verificar se uma variável que pode ser `null` possui um valor?
- Se `for` e `while` podem fazer a mesma coisa, por que usar um em vez do outro?
