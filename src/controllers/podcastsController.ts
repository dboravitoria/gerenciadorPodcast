import { IncomingMessage, ServerResponse} from "http";

export const listEpisodes = async (req:IncomingMessage, res:ServerResponse) =>{
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify({"message": "Seja Bem-vinda Débora!"}))
}