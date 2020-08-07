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

        const query = "SELECT * FROM produtos WHERE idlistas = ? and status != 0 LIMIT 5 OFFSET ?";

        const query2 = "SELECT COUNT(*) as count FROM produtos";

        await db.all(query, [idlistas, (page-1)*5], (err, rows) => {
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
    }
};