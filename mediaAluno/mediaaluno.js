import prompt from 'prompt-sync'
let ler = prompt()
import { mediaAluno } from "func.js";

console.log(`insira o nome do aluno`);
let nome = ler();

console.log(`insira o curso`)
let cur = ler();

console.log(`insira a idade`)
let idade = Number(ler())

console.log(`insira a nota 1`)
let n1 = Number(ler())

console.log(`insira a nota 1`)
let n2 = Number(ler())


console.log(`insira a nota 1`)
let n3 = Number(ler())


console.log(mediaAluno(n1, n2,n3))