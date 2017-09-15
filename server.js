var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;
app.set('port', port);





var fs = require('fs')
    , ursa = require('ursa')
    , crt
    , key
    , msg
    ;

key = ursa.createPrivateKey(fs.readFileSync('./key.pem'));
crt = ursa.createPublicKey(fs.readFileSync('./key.pub'));


app.get('/encrypt', function (req, res) {
    var key = req.query.key || null;
    if (key) {
        res.status(200).json({
            encrypted: crt.encrypt(key, 'utf8', 'base64')
        });
    } else {
        res.status(400).json({ error: true, description: "Bad request, make sure you are sending the right parameters." });
    }

});

app.post('/decrypt', function (req, res) {
    var hash = req.body.hash || null;
    if (hash) {
        res.status(200).json({
            decrypted: key.decrypt(hash, 'base64', 'utf8')
        });
    } else {
        res.status(400).json({ error: true, description: "Bad request, make sure you are sending the right parameters." });
    }
});



// console.log('Encrypt with Public');
// msg = crt.encrypt("Everything is going to be 200 OK", 'utf8', 'base64');
// console.log('encrypted', msg, '\n');

// console.log('Decrypt with Private');
// msg = key.decrypt(msg, 'base64', 'utf8');
// console.log('decrypted', msg, '\n');

// console.log('############################################');
// console.log('Reverse Public -> Private, Private -> Public');
// console.log('############################################\n');

// console.log('Encrypt with Private (called public)');
// msg = key.privateEncrypt("Everything is going to be 200 OK", 'utf8', 'base64');
// console.log('encrypted', msg, '\n');

// console.log('Decrypt with Public (called private)');
// msg = crt.publicDecrypt(msg, 'base64', 'utf8');
// console.log('decrypted', msg, '\n');




// Listen on the specified port
app.listen(port, function () {
    console.log('Client server listening on port ' + port);
});
