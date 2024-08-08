import express from "express"
const servidor = express()


servidor.listen(5001, () => console.log(`subiu caralho`));

servidor.get('/calculadora/soma/:n1/:n2', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let soma = n1+n2;
    resp.send(`a soma é ${soma}`);
})

servidor.get('/calculadora/subtrair/:n1/:n2', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let sub = n1-n2;
    resp.send(`a sub é ${sub}`)
})

servidor.get('/calculadora/multiplicar/:n1/:n2', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let mult = n1 * n2;
    resp.send(`a multiplicação é ${mult}`)
})

servidor.get('/calculadora/divisao/:n1/:n2', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let div = n1/n2;
    resp.send(`a div é ${div}`)
})

servidor.get('/calcuacai/:n1/:n2/:n3', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let n3 = Number(rep.params.n3)

    let p = 13.50;
    let m = 15;
    let g = 17.50;

    let somafinal = (n1*p) + (n2*m) + (n3*g);

    resp.send(`o total a pagar a pagar é ${somafinal}`)
})

servidor.get('/calcumedia/aluno/idade/curso/:n1/:n2/:n3', (rep, resp) =>{
    let aluno = (rep.params.aluno)
    let idade = Number(rep.params.idade)
    let curso = (rep.params.curso)
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let n3 = Number(rep.params.n3)
    let final = (n1+n2+n3)/3
    resp.send(`${aluno}
    ${idade}
    ${curso}
    ${n1}
    ${n2}
    ${n3}
    a média final é ${final}`)
})


