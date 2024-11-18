import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import AdicionarRotas from './rotas.js'

const servidor= express();

servidor.use(cors())
servidor.use(express.json())

AdicionarRotas(servidor)

servidor.listen(process.env.PORTA, () => console.log(`A API SUBIU NA ${process.env.PORTA}` ));