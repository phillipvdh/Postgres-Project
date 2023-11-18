import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import forged_weapon_routes from './handlers/forged_weapon'

const app: express.Application = express()
const address: string = "127.0.0.1:3000"

const corsOptions = {
    origin: 'http://someotherdomain.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.get('/test-cors', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled with a middle ware' })
})

forged_weapon_routes(app)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
