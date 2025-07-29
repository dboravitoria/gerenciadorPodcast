import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/listEpisodes";
export const listEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{
    const content = await serviceListEpisodes()
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify(content))
}