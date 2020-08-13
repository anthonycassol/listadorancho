const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database/db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
    return
  }
});

module.exports = {
    create(request, response){
        const {email, senha} = request.body;

        const query = "SELECT idusuarios, nome, sobrenome, email, status FROM usuarios WHERE email = ? AND senha = ?";

        console.log(query);

        db.all(query, [email, senha], (err, rows) => {
            if(err){
                console.log(err.message);
                return next(err);
            }

            if(!rows[0]){
                return response.status(400).json({
                    error: 'Usuário ou senha incorretos'
                });
            }
            
            return response.json({
                rows
            });
        });
    }
};