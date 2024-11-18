
import chamadaController from './controller/chamadaController.js'

export default function AdicionarRotas(servidor){
    servidor.use(chamadaController)
}