import { FilterPodcastModel } from "../models/responseModels"
import { repositoryPodcast } from "../repositories/podcast"
import { StatusCode } from "../utils/statusCode"

export const serviceListEpisodes = async():Promise<FilterPodcastModel>=>{
    let responseFormat:FilterPodcastModel = {
        statusCode:0,
        body:[]
    }
    const data = await repositoryPodcast()
     responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent
     responseFormat.body = data
    
    return responseFormat
}