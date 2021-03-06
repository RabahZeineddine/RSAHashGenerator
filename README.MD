# RSA HASH Generator 

This small app let you **encrypt/decrypt** using **[ursa](https://www.npmjs.com/package/ursa)**

> It encrypts/decrypts using pair of generated key, RSA based.

## Using my hosted App

### Encrypt

 To encrypt any text you want, you have to make a request as follow 

```
    METHOD: GET = https://hashgenerator.mybluemix.net/encrypt?key=<TEXT>

```

| Attribute | Value |
| --- | --- |
| TEXT | The text that you would like to encrypt |

the response for this request will be like 

```
    {
        "encrypted": "<HASH KEY>"
    }
```


For example : 
if you make a request like this 

```
METHOD: GET = https://hashgenerator.mybluemix.net/encrypt?key=Hello there
```

the response for this request will be like 

```
    {
        "encrypted": "VCXq+c0WxTY+bT0DJzVdPL1UMQkFIXBDAC9hfq1I7PZ2onNOOGjZhHdtALc2yhwYfLogyll9NNJjcypuYHKaHaJQAdU2yIOrGenJk/L8xPu4mVqhKnMDKklqKkDeD17+x8oEVZW373+2IAEoOOx/g8OOMC0S3bm4B7buHyPMgOGuYEQ3rWUCkD7YZxErh+0Fg3Y5hogG9uhUOldprUx7ImULjYuvlacGoMZ42LVTw7IC/Y7vXSLjxuBS44s52baRvrlzhseLQLWiPC8jjh1qj90LKtHtvnmKMSlO9yUIM4xCwcjoS04/A1pPcMCArQDCPHTi2ZbB42S4DXbZ1pGU1w=="
    }
```
    

### Decrypt

to decrypt any encrypted text using this app, you have to make a request as follow

```
    METHOD: POST https://hashgenerator.mybluemix.net/decrypt
```

The content body must be like: 

```
    {
        "hash": "<YOUR HASH>"
    }
```

for example, to decrypt the hello there hash the content body will be like

```
    {
	    "hash": "VCXq+c0WxTY+bT0DJzVdPL1UMQkFIXBDAC9hfq1I7PZ2onNOOGjZhHdtALc2yhwYfLogyll9NNJjcypuYHKaHaJQAdU2yIOrGenJk/L8xPu4mVqhKnMDKklqKkDeD17+x8oEVZW373+2IAEoOOx/g8OOMC0S3bm4B7buHyPMgOGuYEQ3rWUCkD7YZxErh+0Fg3Y5hogG9uhUOldprUx7ImULjYuvlacGoMZ42LVTw7IC/Y7vXSLjxuBS44s52baRvrlzhseLQLWiPC8jjh1qj90LKtHtvnmKMSlO9yUIM4xCwcjoS04/A1pPcMCArQDCPHTi2ZbB42S4DXbZ1pGU1w=="
    }
```

the response for this request will be like 

```
    {
        "decrypted": "Hello there"
    }
```

> You might treat the response whereever you are going to use it, as if you encrypt a text with the plus sign "+", the decrypted text will have a space instead of "+". 

## Using local with your own keys

Make sure you have a pair of keys and replace the **key.pub** with your **public key** and the **key.pem** with your **private key** 

### key.pub / public key format

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjoa+Pb9L8Uq7h3rVri3A
/v+yHTheOqUP1wgsj3H0WbbSCjxAUMBxmQeV9slBR4wFL+9kdi7TT0os8m0tsxv8
ubLeGvMY2NBEWO45chhbUDkdZ5JGehatRhbRcEkbq31MLiSh4ri4B/GV7hoeTouH
OhfY5lMgF9Wql98siRFre/KrSX4lnNeZqGiEk66OjU3IFEGa4OlES8NhUpFzXOLj
nO5KkVmt4Ym2fH5TlOhMFkxMQq+Q3QZex0ctUiez5RjPt7cRB2McbHGeWNiTGPmv
IAwTUwuSkoFx/YWgBu5U1VKyAXxkp64UG0yKiZ1bYu7gDmUUDr5nv2jE8SbAP6Xt
UQIDAQAB
-----END PUBLIC KEY-----
```

### key.pem / private key format

```
    -----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAjoa+Pb9L8Uq7h3rVri3A/v+yHTheOqUP1wgsj3H0WbbSCjxA
UMBxmQeV9slBR4wFL+9kdi7TT0os8m0tsxv8ubLeGvMY2NBEWO45chhbUDkdZ5JG
ehatRhbRcEkbq31MLiSh4ri4B/GV7hoeTouHOhfY5lMgF9Wql98siRFre/KrSX4l
nNeZqGiEk66OjU3IFEGa4OlES8NhUpFzXOLjnO5KkVmt4Ym2fH5TlOhMFkxMQq+Q
3QZex0ctUiez5RjPt7cRB2McbHGeWNiTGPmvIAwTUwuSkoFx/YWgBu5U1VKyAXxk
p64UG0yKiZ1bYu7gDmUUDr5nv2jE8SbAP6XtUQIDAQABAoIBAHoF2GhrGCysK+Ox
AbKPD5YB+k9UDDCvUuFp6SSijm4kvKzwqqu4J0m6GeVgptgHhAVnMp6QNm/C9LpV
...
-----END RSA PRIVATE KEY-----
```

That's it! 

### Run the app locally 

install dependencies

```
    npm install
```

> On Windows, you'll need to install some dependencies first, check [ursa](https://www.npmjs.com/package/ursa) to know how to install it.

run the app

```
    npm start
```

the app will run on port 3000 unless you change that in server.js file.

to encrypt and decrypt locally, use the same request as above but with your local link 
for example 

#### To encrypt 
```
    METHOD: GET http://localhost:3000/encrypt?key=<TEXT>
``` 

#### To decrypt 

```
    METHOD: POST https://localhost:3000/decrypt
```

Content body
```
    {
        "hash": "<YOUR HASH>"
    }
```