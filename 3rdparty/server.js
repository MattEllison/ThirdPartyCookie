var http = require('http');
var fs = require('fs');
//var index = fs.readFileSync('index.html');
console.log('starting')
var refs = [];
http.createServer(function (req, res) {
    var ref = req.headers.referer;
    console.log(ref)
    refs.push(ref);
    refs = [...new Set(refs)];

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Set-Cookie': `Caller=${refs.join()}`,
        "Access-Control-Allow-Origin": ref.substr(00, ref.length - 1),
        'Access-Control-Allow-Credentials': true,
    });
    res.end(refs.join())
}).listen(9615);
