import express from 'express'
import Mongoose from 'mongoose'
import config from '@config'
import path from 'path'
import v1Router from '@routes'
import webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import webpackHotMiddleWare from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })
const app = express()
const compiler = webpack(WebpackConfig)
app.use(webpackDevMiddleware(compiler))
app.use(
    webpackHotMiddleWare(compiler, {
        hot: true,
        publicPath: WebpackConfig.output.publicPath
    })
)
app.use(v1Router)
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'))
})
app.listen(8080, () => {
    console.log(`connected to DB: ${config.databaseUrl}`)
})
