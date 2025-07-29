import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/listEpisodes";
import { serviceFilterEpisodes } from "../services/filterEpisode";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/responseModels";

const typeContent = {"Content-type": ContentType.JSON}

export const listEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content:FilterPodcastModel = await serviceListEpisodes()
    res.writeHead(content.statusCode, typeContent)
    res.end(JSON.stringify(content.body))
}


export const filterEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{

    

    const content:FilterPodcastModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, typeContent)
    res.end(JSON.stringify(content.body))
}