import { repositoryPodcast } from "../repositories/podcast"
export const serviceListEpisodes = async()=>{
    const data = repositoryPodcast()
    return data
}