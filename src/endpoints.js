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
export default server;
