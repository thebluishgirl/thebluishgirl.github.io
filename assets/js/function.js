// Função Nominal com parâmetro obrigatório.
// Função sem return é uma subrotina.

function escreve(nome, sobrenome){
    const a = sobrenome;
    if (a === undefined){
        console.log("a é undefined");
        console.log("Valor de a", a, "\n");
        console.log("valor de sobrenome", sobrenome, "\n")
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Ranna");

// Função Nominal que retorna valor.

function soma(a, b){
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log(soma(3,5));

// Expressão de função é atribuída a um contexto, por exemplo uma variável
// Função anonima não tem nome

const exibe  = function(x){
    return `Exibindo parâmetro ${x}`;
}
console.log(exibe(" -x- "));

// Onde o JavaScript está sendo executado? Qual o contexto?
// Contexto: Navegador. This depende do contexto.
// No navegador o this é  a window.
// mas se vc estiver usando a versão estrita do JS o this não será a window

function quemEoThis(){
    console.log(this === window);
}

function quemEoThisEstrito() {
    "use strict"
    console.log("strict");
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2() {
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);


let empresa = this;

// Quando criamos um objeto, criamos um escopo.
// Quando usamos o this dentro de um objeto, o this é o objeto.
const aluno = {
    nome: "Glaucio",
    matricula: 123,
    executar: function(){
        return this.nome;
    },
};

console.log(aluno.executar());

console.log("Quem é o this no conxteto global", empresa); 

//this dentro de uma função - tbm é é um objeto global.

function globalObj() {
    // "use strict";  - o this vira undefined.
    return this;
}

document.write("<h2>Escrevendo no body</h2>");
document.write(globalObj());
//globalObj().alert("Vai Corinthinas!");

// Arrow Function, funçaõ mais curta/simples, não possui o próprio contexto
// no Arrow Function o this não existe

    const novaFuncao = (a, b) => {
        console.log("Chamando de dentro de uma arrow function");
        console.log(`Exibindo o valor de ${a}`);
        console.log("Exibindo o total de caracteres " + b.length);  
    }


const funcao3 = a => console.log(`Exibindo o total de caracteres de ${a.length} `);

funcao3('Ranna Oliveira');


// Novo JavaScript ES2017
// spread operator - ...

const carros = (primeiro, segundo, ...restante) => {
    console.log(`Os carros informados foram: ${primeiro}, ${segundo} - ${restante[5]}. Todos os demais são ${restante.join(", ")}`);

}
carros("DelRey", "Brasilia", "Belina", "Fusca", "Variant", "Parati", "Monza", "Scort", "Fiat 147", "D-20", "Kombi", "BMW","Opala", "Land-Rover", "Gurgel", "Maverick", "Marea");

const frutas = ['Guaraná', 'Cupuaçu', 'Açaí'];

const todasFrutas = [...frutas, 'banana', 'abacaxi'];

console.log("Todas as frutas", todasFrutas);

// destructuring assignment - Atribuição por desestruturação 

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log('Exibindo o primeiro:', primeiro);
console.log('Exibindo o resto:', resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(" - "));

// const [p, s, t, q] = meuArray;
// console.log("Exibindo o quarto elemento", q);
const [q,...p] = meuArray.reverse();
console.log(p.reverse());
