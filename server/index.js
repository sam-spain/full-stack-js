import Express, { response } from 'express'
import Mongoose from 'mongoose'
import config from '@config'
import path from 'path'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'

Mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const app = Express()
const compiler = Webpack(WebpackConfig)
app.use(WebpackDevMiddleware(compiler))
app.use(v1Router)
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'))
})
app.listen(8081, () => {
    console.log(`connected to DB: ${config.databaseUrl}`)
})
