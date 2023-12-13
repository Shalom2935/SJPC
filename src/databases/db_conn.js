

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sjpc"
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "INSERT INTO `membres`(`nom`, `prenom`, `naissance`, `ville`, `telephone`) VALUES ('[value-2]','[value-3]','2005-12-13','[value-5]','000')";
    //con.query(sql, function (err, result) {
    //    if (err) throw err;
    //    console.log("1 record inserted");
    //});
});

