import { Podcast } from "./interfacePodcast";

export interface FilterPodcastModel{
    statusCode:number,
    body: Podcast[],
}