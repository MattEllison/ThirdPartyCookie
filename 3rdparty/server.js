var http = require('http');
var fs = require('fs');
//var index = fs.readFileSync('index.html');
console.log('starting')
var refs = [];
var userCount = 0;
http.createServer(function (req, res) {
    var ref = req.headers.referer;
    console.log(req.headers.cookie)
    //refs.push(ref);
    //refs = [...new Set(refs)];
    var headers = {
        'Content-Type': 'text/plain',
        "Access-Control-Allow-Origin": ref.substr(00, ref.length - 1),
        'Access-Control-Allow-Credentials': true,
    };

    if (!req.headers.cookie) {
        userCount++
        console.log('setting cookie')
        headers['Set-Cookie'] = `Caller=${userCount}`;
    }
    res.writeHead(200, headers);

    res.end(`has cookie ${req.headers.cookie}`)


}).listen(9615);
