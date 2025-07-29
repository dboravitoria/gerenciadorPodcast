import * as http from 'http'
import {listEpisodes} from './controllers/podcastsController'


const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse)=>{
    if(req.method === 'GET' ){
        await listEpisodes(req, res)
    }
})

const port = process.env.PORT

server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta http://localhost:${port}`)
})