import { Router} from "express";
import {corPrimaria, frequenciaCaracter, ingresso, maiorNumero} from "./services.js";
const server = Router();

server.get('/CorPrimaria/:cor', (req , resp) => {
    try{
        const { cor } = req.params;
        const Primaria = corPrimaria(cor);
        resp.send({
            Primaria: Primaria
        })
    }
    catch(err) {

        resp.send({
            erro: err.message
        })
    }

})

server.post('/dia2/ingressoCinema' , (req , resp) => {
    try{
        const { qtdInteiras , qtdMeias , diaSemana , nacionalidade} = req.body;
        const total = ingresso (qtdInteiras , qtdMeias , diaSemana, nacionalidade);
        resp.send({
         tota: total
        });

    }
    catch(err) {

    }

})

server.get('/dia2/FreqCaractere/:texto/:caractere' , (req , resp) => {
    try{
        const {textp , caractere} = req.params;
        const freq = frequenciaCaracter(texto , caractere);
        resp.send({
            freq: freq
        })
}    
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

server.post('/dia2/maiornumero' , (req , resp) => {
    try{
        const numeros = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior : maior
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})


server.get('/dobro/:numero', (req, resp) => {
    try {
    const numero = Number(req.params.numero);
    const dobro = numero * 2;

    const resposta = {
        dobro: dobro
    }
    resp.send(resposta);
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/somar', (req, resp) => {

    try {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);

    const soma = n1 + n2;

    resp.send({
        soma: soma
    })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

server.post('/somar', (req, resp) => {
    try{
    const { n1 , n2 } = req.body

    const soma = n1 + n2;

    resp.send({
        soma: soma
    })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

server.post('/media' , (req, resp) => {

    try {
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;

    const resultado = (nota1+ nota2+ nota3)/3;
    
    resp.send({
        resultado: resultado
    })
    }

    catch(err) {
        resp.send({
            erro: err.message
        })
    }

})

server.get('/tabuada/:n' , (req, resp) => {
    try {
    let n = Number(req.params.n);
    let soma;

    for(i = 0; i < 10; i++) {
        soma = i * n 
    }

    let resultado = soma;
    resp.send(resultado);
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/temperatura/:temp' , (req , resp) => {
    
    try{
    let temp = Number(req.params.temp);

    if(temp > 37) {
        resp.send({
            mensagem: "True"
        })
    }
    else {
        resp.send({
            mensagem: "False"
        })
    }
   }
   catch(err) {
       resp.send({
           erro: err.message
       })
   }

})
export default server;
