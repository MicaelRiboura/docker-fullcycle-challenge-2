const express = require('express');
const mysql = require('mysql');

const app = express();
const path = require('path');
const port = 3000;

app.engine('html', require('ejs').renderFile);

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};

const connection = mysql.createConnection(config);
connection.query(`insert into people(name) values('Micael')`);
connection.end();

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    const connection = mysql.createConnection(config);
    connection.query(`SELECT * FROM people`, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).send('Internal Server Error');
        }

        return res.render(path.join(__dirname, 'public', 'index.html'), {
            people: results.map(person => person.name),
        });
    });
    connection.end();
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});