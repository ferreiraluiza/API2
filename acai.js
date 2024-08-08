import express from 'express'
const servidor = express()

servidor.listen(5002, () => console.log(`subiu essa bosta`));

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