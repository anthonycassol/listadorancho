const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database/db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
    return
  }
});

module.exports = {
    async create(request, response, next){
        const {email, nome, sobrenome, senha} = request.body;

        const query = "INSERT INTO usuarios (email, nome, sobrenome, senha) VALUES (?, ?, ?, ?)";

        const result = await db.run(query, [email, nome, sobrenome, senha], function(err) {
            if(err){
                console.log(err.message);
                return next(err);
            }
        });

        return response.json({
            nome
        });
    }
};