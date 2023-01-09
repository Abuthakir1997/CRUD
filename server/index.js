const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')


app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'abuthakir@1997',
    database: 'youtube'
})
app.post("/create", (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const displayname = req.body.displayname
    const location = req.body.location
    const phone = req.body.phone
    const email = req.body.email

    db.query(
        'insert into youtube.employees (firstname,lastname,displayname,location,phone, email) VALUES(?,?,?,?,?,?)',
        [firstname, lastname, displayname, location, phone, email], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send('values inserted');
            }
        }
    )
})

app.get('/employees', (req, res) => {
    db.query('select * from youtube.employees', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("backend server is running");
})