const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

//Informar que as requisições serão JSON
app.use(cors());
app.use(express.json());
app.use(routes);


/** 
 * Rota / Recurso
*/

/**
 * GET: Buscar
 * POST: Criar
 * PUT: Alterar
 * DELETE: Deletar
 */

 /**
  * Tipo de Parametros
  * 
  * query parms: /users?name=diego (listar algo, buscar) após o ? -- filtrar, paginar e afins
  * rout parms: /users/:id   /users/1  geralmente dados de um único usuário. Identificar recursos
  * request body: json utilizado para enviar as respotas (informações)
  * 
  */


  /**  
   * Base de Dados***
   * Driver: SELECT * FROM ...
   * Query Builder: table('users).select(*).where
   */

app.listen(3333);