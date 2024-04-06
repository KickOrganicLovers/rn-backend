//this is test router

import  express from "express"
import router_01 from "./src/router/router_01";
import router_02 from "./src/router/router_02";
import router_03 from "./src/router/router_03";

const app: express.Express = express()
const port: number = 8800;

app.use('/home', router_01)
app.use('/json', router_02)
app.use('/insert', router_03)

app.get("/", (req: express.Request, res: express.Response) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000')
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`port ${port} でサーバー起動中`)
})