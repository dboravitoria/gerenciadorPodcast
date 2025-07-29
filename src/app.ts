import * as http from 'http'
import {filterEpisodes, listEpisodes} from './controllers/podcastsController'
import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-methods'

export const app = async (req:http.IncomingMessage, res:http.ServerResponse)=>{

    const baseUrl = req.url?.split("?")[0]

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await listEpisodes(req, res)
    }
    if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await filterEpisodes(req,res )
    }
}