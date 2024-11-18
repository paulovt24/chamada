import * as db from '../repository/chamadaRepository.js'

import { Router } from 'express'

const endpoint = Router()

endpoint.get('/consultar', async (req,resp) => {

    try{
        let registros = await db.consultarChamada()
        resp.send(registros)
    }
    catch(err){

        resp.status(404).send({

            erro: err.message

        })
    }
})

endpoint.get('/filtro', async (req,resp) =>{

try {

    let registros = await db.filtrarChamada()
    resp.send(registros)
    
} 
catch (error) {
    resp.status(404).send({
        erro: err.message
    })
}
})

endpoint.post('/adicionar', async (req,resp) =>{

    try {

        let chamada = req.body;
        let registro = await db.adicionarChamada(chamada);
        resp.send({
            novoId : registro
        })
        
    } 
    catch (err) {
        
        resp.status(404).send({

            erro: err.message

        })
    }
})


endpoint.put('/atualizar/:id', async (req,resp) =>{

    try {

        let id = req.params.id;
        let chamada = req.body;

        let linhasAfetadas = await db.atualizarChamada(id, chamada);
        if (linhasAfetadas >=1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


endpoint.post('/deletar/:id', async (req,resp) =>{

    try {

        let id = req.params.id;

        let linhasAfetadas = await db.deletarChamada(id);
        if (linhasAfetadas >=1){
            resp.send();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


export default endpoint;