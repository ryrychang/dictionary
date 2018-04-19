const express = require('express')
const app = express()

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
  // webpack-dev-middleware options
}))

const request = require('request')

const BASE = 'https://od-api.oxforddictionaries.com/api/v1'
const APP_ID = 'f22efe53'
const APP_KEY = '70276fd53c941679255df18417969839'

app.get('/synonyms', function (req, res) {
  request.get({
    url: `${BASE}/entries/en/${req.query.word}/synonyms`,
    headers: {
      app_id: APP_ID,
      app_key: APP_KEY
    }
  }, (error, response, body) => {
    if (error) console.log(error)
    res.send(JSON.parse(body))
  })
})

app.get('/definitions', function (req, res) {
  request.get({
    url: `${BASE}/entries/en/${req.query.word}`,
    headers: {
      app_id: APP_ID,
      app_key: APP_KEY
    }
  }, (error, response, body) => {
    if (error) console.log(error)
    res.send(JSON.parse(body))
  })
})

app.listen(3050, () => console.log('Hello! Listening on 3050.'))
