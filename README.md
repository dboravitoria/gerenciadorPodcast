# Podcast Menager

### Domínio
Podcasts feitos em vídeo
### Descrição 
Um app ao estilo netflix, onde podemos centralizar diferentes episódio separados por categoria
### Features
- Listar epsódios de podcasts em sessões de categorias
    --[saúde, humor, fitness, mentalidade]
- Filtrar por nome de Podcast


## Como implementar features:

 - Vou retornar em uma api rest o nome do podcast, nome do episódio, imagem de capa, link e categoria

    ```js
    [
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            cover: "https://yt3.ggpht.com/QSC3tvHNaeCgvXVxgCiR3JVOUgvfT1OVMttD_YrHKiXsO4eN6DAk5HE8VTBUf0wVzqh-X6n2=s48-c-k-c0x00ffffff-no-rj",
            link: "https://youtu.be/Z0BIoJm_eXI?si=hVdoMMU4MnOpKR2-",
            category: ["humor", "tecnology"]
        }
    ]   
    ```