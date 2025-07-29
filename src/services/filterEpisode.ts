import { FilterPodcastModel } from "../models/responseModels"
import { repositoryPodcast } from "../repositories/podcast"
import { StatusCode } from "../utils/statusCode"

export const serviceFilterEpisodes = async (podcastName?:string):Promise<FilterPodcastModel> =>{

    let responseFormat: FilterPodcastModel ={
        statusCode: 0,
        body: []
    }
    
    const queryString = podcastName?.split("?p=")[1] ?? ""

    const data = await repositoryPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent
    
    responseFormat.body = data
    return responseFormat
}