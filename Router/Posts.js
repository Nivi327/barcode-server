const Router = require('express').Router();
const connection = require('./../Config/config');

const table = `barcode_data`;

Router.get('/', (req, res) => {
    connection.execute(`SELECT * FROM ${table}`, (err, result, fields) => {
        if(err) {
            return res.status(400).json({err: err});
        }
        return res.status(200).json({result});
    });
})

Router.post('/', (req, res) => {
    const {cno, dept, ram, pro} = req.body;
    console.log(cno, dept, ram, pro);
    connection.execute(`INSERT INTO ${table} (cno, dept, ram, pro) VALUES (?, ?, ?, ?)`, [cno, dept, ram, pro], (err, result, fields) => {
        if(err) {
            console.log(err);
            return res.status(400).json({err: err});
        }
        return res.status(200).json({result: "DATA INSERTED"});
    })
});

Router.put('/:id', (req, res) => {
    const {cno, dept, ram, pro} = req.body;
    const id = req.params.id;
    connection.execute(`UPDATE ${table} SET cno=?, dept=?, ram=?, pro=? WHERE id=?`, [cno, dept, ram, pro, id], (err, result, fields) => {
        if(err) {
            return res.status(400).json({err: err});
        }
        return res.status(200).json({result: "DATA UPDATED"});
    })
});

Router.delete('/:id', (req, res) => {
    const id = req.params.id;
    connection.execute(`DELETE FROM ${table} WHERE id=?`,[id], (err, result, fields) => {
        if(err) {
            return res.status(400).json({err: err});
        }
        return res.status(200).json({result: "DATA DELETED"});
    })
});

module.exports = Router;