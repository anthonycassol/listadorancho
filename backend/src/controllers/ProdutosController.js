const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database/db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
    return
  }
});

module.exports = {
    async index(request, response, next){
        const req = request.query;

        let page = req.page;

        if(!req.page) page = 1;

        const idlistas = request.query.lista;

        const query = "SELECT * FROM produtos WHERE idlistas = ? and status != 0";

        //LIMIT 5 OFFSET ?
        //, (page-1)*5

        const query2 = "SELECT COUNT(*) as count FROM produtos";

        await db.all(query, [idlistas], (err, rows) => {
            if(err){
                console.log(err.message);
                return next(err);
            }

            if(!rows[0]){
                return response.json({
                    retorno: "Nenhum produto encontrado para essa lista"
                });
            }
            else{
                db.all(query2, [], (err, count) => {
                    response.header('X-Total-Count', count[0]['count']);

                    return response.json({
                        rows
                    });
                });               
            }
        });
    },

    create(request, response){
        const {nome, descricao, idlistas} = request.body;

        idusuarios = request.headers.authorization;

        const query = "INSERT INTO produtos (nome, descricao, idlistas) VALUES (?, ?, ?)";

        db.run(query, [nome, descricao, idlistas], function(err) {
            if(err) return console.log(err.message);
        });

        return response.json({
            nome
        });
    },

    put(request, response){
        var { idprodutos, valor, string, status } = request.body;
        //const idusuarios = request.headers.authorization;

        if(string == 'preco'){
            if(!valor){
                valor = 0;
            }

            console.log(valor);

            const query = "UPDATE produtos SET preco = ? WHERE idprodutos = ?";

            db.run(query, [valor, idprodutos], function(err) {
                if(err) return console.log(err.message);
            });

        }

        else if (string == 'quantidade'){

            if(!valor) {
                valor = 0;
            }
                
            const query = "UPDATE produtos SET quantidade = ? WHERE idprodutos = ?";

            db.run(query, [valor, idprodutos], function(err) {
                if(err) return console.log(err.message);
            });
            
        }

        else if (string == 'status'){
            var query = "UPDATE produtos SET status = 2 WHERE idprodutos = ?";

            if(status == 2){
                query = "UPDATE produtos SET status = 1 WHERE idprodutos = ?";
            }
            
            db.run(query, [idprodutos], function(err) {
                if(err) return console.log(err.message);
            });
        }

        return response.status(204).send();
    }
};