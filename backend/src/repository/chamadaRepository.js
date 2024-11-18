import con from "./connection.js";


export async function consultarChamada(){//geral 

    const comando = `   select 
                        ds_titulo,
                        ds_impacto,
                        dt_ocorrencia,
                        nm_atribuido,
                        nm_usuario 
                        from fromzero.tb_chamado
                        inner join fromzero.tb_usuario
                        on fromzero.tb_chamado.id_usuario = fromzero.tb_usuario.id_usuario;
    
    `
    
    let resposta= await con.query (comando);
    let registros = resposta[0];
    return registros;
    }
    
    export async function filtrarChamada(){//filtro

        const comando = `   select 
                            ds_titulo  titulo,
                            ds_impacto  impacto,
                            dt_ocorrencia  ocorrencia,
                            nm_atribuido   atribuido,
                            nm_usuario     usuario
                            from fromzero.tb_chamado
                            inner join fromzero.tb_usuario
                            on fromzero.tb_chamado.id_usuario = fromzero.tb_usuario.id_usuario

                            where ds_titulo like '?%';
        
        `
        
        let resposta= await con.query (comando);
        let registros = resposta[0];
        return registros;
        }


export async function adicionarChamada(chamada){

const comando = `  insert into fromzero.tb_chamado (ds_titulo, ds_impacto, dt_ocorrencia, nm_atribuido, id_usuario)
values (?, ?, ?, ?, ?);

`

let resposta= await con.query (comando, [chamada.titulo, chamada.impacto, chamada.ocorrencia, chamada.atribuido, chamada.idUsuario]);
let registros = resposta[0];
return registros.insertId;
}

export async function atualizarChamada(id, chamada){

    const comando = `   
                    update 
                    fromzero.tb_chamado
                    set ds_titulo = ?,
                        ds_impacto = ?,
                        dt_ocorrencia = ?,
                        nm_atribuido = ?
                    where id_chamado = ?;
    `
    
    let resposta= await con.query (comando, [chamada.titulo, chamada.impacto, chamada.ocorrencia, chamada.atribuido, id]);
    let registros = resposta[0];
    return registros.affectedRows;
    }


    export async function deletarChamada(id){

        const comando = `   
                        delete from fromzero.tb_chamado
                        where id_chamado = ? 
        `
        
        let resposta= await con.query (comando, [id]);
        let registros = resposta[0];
        return registros.affectedRows;
        }
    
       