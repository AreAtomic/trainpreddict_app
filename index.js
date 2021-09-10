const express = require('express')
const favicon = require('express-favicon')
const path = require('path')
const app = express()
const http = require('http')
const https = require('https')
const fs = require('fs')

const dotenv = require('dotenv')
dotenv.config()

app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', function (req, res) {
    return res.send('pong')
})
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

/**
 * @prod
 */

if (process.env.NODE_ENV == 'production') {
    const privateKey = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/privkey.pem'
    )

    const certificate = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/cert.pem'
    )

    const ca = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/chain.pem'
    )

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
    }

    http.createServer(function (req, res) {
        res.writeHead(301, {
            Location: 'https://' + req.headers['host'] + req.url,
        })
    })

    https.createServer(credentials, app).listen(443)
}

/**
 * @preprod
 */

if (process.env.NODE_ENV == 'preprod') {
    const privateKey = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/privkey.pem'
    )
    const certificate = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/cert.pem'
    )
    const ca = fs.readFileSync(
        '/etc/letsencrypt/live/trainpreddict.fr/chain.pem'
    )
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca,
    }
    https.createServer(credentials, app).listen(3000)
}