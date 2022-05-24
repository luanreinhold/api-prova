import 'dotenv/config'  
import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

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

server.get('/corprimaria/:cor', (req , resp) => {
    try{
        const cor = req.params.cor;
        if (cor == "vermelho" || "azul" || "amarelo") {
            resp.send({
                cor: "True"
            })
        }
        else {
            resp.send({
                cor: "False"
            })
        }
    }
    catch(err) {

        resp.status(404).send({
            erro: err.message
        })
    }

})

server.post('/dia2/ingressoCinema' , (req , resp) => {
    try{
        const ingressointeiro = Number(req.body.ingressointeiro);
        const ingressomeia = Number(req.body.ingressomeia);
        const diaSemana = req.body.diaSemana;
        const nacionalidade = req.body.nacionalidade;

        if (nacionalidade == "Brasileira") {
            resp.send({
                total : ingressomeia + ingressointeiro * 5
            })
        }


        if (diaSemana == "Quarta-Feira") {
            if ( ingressointeiro && ingressomeia / 2) {
                resp.send({
                    total : ingressointeiro + ingressomeia *14.25
                })
            }
        }

    }
    catch(err) {

    }

})


server.get('/dia2/FreqCaracter/:texto/:caracter' , (req , resp) => {
    try{
        
    }
    catch(err) {

    }

})

server.post('/dia2/maiornumero' , (req , resp) => {
    try{
        
    }
    catch(err) {

    }

})

server.listen(process.env.PORT,
     () => console.log(`API Online na Porta ${process.env.PORT}`))