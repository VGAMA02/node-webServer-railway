const http = require('http');

http.createServer((req,res) =>{
    console.log(req);
    res.setHeader('Content-Disposition', 'attachmen; filename=lista.csv');
    res.writeHead(200,{'Content-Type': 'application/csv'});
    res.write('id','nombre\n');
    res.write('1','Brandon\n');
    res.write('2','Verde\n');
    res.write('3','Ranfla\n');
    res.write(JSON.stringify(personas));
    res.end();
}).listen(8080);

console.log('escuchando en el puerto',8080);