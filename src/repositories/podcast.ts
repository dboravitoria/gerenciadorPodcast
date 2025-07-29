import fs from 'fs'
import path from 'path'
import { Podcast } from '../models/interfacePodcast'

const pathData = path.join(__dirname, "../repositories/podcasts.json")
const lang = "utf-8"

export const repositoryPodcast = async (podcastName?:string):Promise<Podcast[]> =>{
    const data = fs.readFileSync(pathData, lang);
    let jsonFile = JSON.parse(data);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:Podcast)=>{
          return  podcast.podcastName === podcastName
        })
    };

    return jsonFile;
};