const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database/db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
    return
  }
});

module.exports = {
    async index(request, response, next){
        const idusuarios = request.headers.authorization;

        const query = "SELECT LIS.idlistas, LIS.nome, LIS.descricao FROM usuarios_listas as USUL JOIN listas as LIS ON USUL.idlistas = LIS.idlistas WHERE LIS.status = 1 AND USUL.idusuarios = ?";

        await db.all(query, [idusuarios], (err, rows) => {
            if(err){
                console.log(err.message);
                return next(err);
            }

            return response.json({
                rows
            });
        });
    },

    create(request, response){
        const {nome, descricao} = request.body;

        idusuarios = request.headers.authorization;

        const query = "INSERT INTO listas (nome, descricao) VALUES (?, ?)";

        const query2 = "INSERT INTO usuarios_listas (idusuarios, idlistas) VALUES (?, ?)"

        db.run(query, [nome, descricao], function(err) {
            if(err) return console.log(err.message);
            
            db.run(query2, [idusuarios, this.lastID], function(err) {
                if(err) return console.log(err.message);
            });
        });

        return response.json({
            nome
        });
    
    },

    put(request, response){
        const { idlistas, string } = request.body;
        //const idusuarios = request.headers.authorization;
        

        if(string == 'excluir'){
            query = "UPDATE listas SET status = -1 WHERE idlistas = ?";
        }
        else if(string == 'alterar'){
            query = "UPDATE listas SET status = 2 WHERE idlistas = ?";
        }

        db.run(query, [idlistas], function(err) {
            if(err) return console.log(err.message);
        });

        return response.status(204).send();
    }
};