// const axios = require('axios');
// const fs = require('fs');
// const express=require('express');
// let exp=express();

const apiKey = 'AIzaSyCbUFozA3Gss_hcObFhxB22TcSXlxUiYUM';
const targetCountry = 'US';
const searchQuery = 'fullstack';
const maxResults = 3;

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const targetCountry = document.querySelector('input[id="targetCountry"]').value;
  const searchQuery = document.querySelector('input[id="searchQuery"]').value;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=${targetCountry}&q=${searchQuery}&type=video&key=${apiKey}&maxResults=${maxResults}`;

  axios.get(url)
    .then(response => {
      const videoData = response.data.items;
      // fs.writeFileSync('/JSON-Files/video-data.json', JSON.stringify(videoData));
      // console.log('Video data saved as JSON file');      
      console.log(videoData);
      displayVideos(videoData);
      // for (const video of videoData) {
      //   const vidurl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${video.id.videoId}&key=${apiKey}`;
      //   axios.get(vidurl).then(response => {
      //     const videoData1 = response.data.items;
      //     console.log(videoData1);
      // //     fs.writeFileSync(`/JSON-Files/video-data of ${video.id.videoId}.json`, JSON.stringify(videoData1));
      // //     console.log('Video data saved as JSON file' + video.id.videoId);      
      //   })
      // }
    })
});

// exp.get('/',(req,res)=>{
//   res.sendFile(__dirname+"/index.html");
// })

// // Start the server
// exp.listen(3000, () => {
//   console.log(`Server is listening on port ${3000}`);
// });

function displayVideos(data) {
  const results = document.querySelector('#results');
  results.innerHTML='';

  for (const video of data) {
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://i.ytimg.com/vi/${video.id.videoId}/mqdefault.jpg`;
    thumbnail.style.width='300px';

    const title = document.createElement('p');
    title.innerHTML = `<b>"${video.snippet.title}</b><br><br>`
    title.style.marginLeft = "10px";

    const channel = document.createElement('p');
    channel.innerHTML =  `<b>Channel: </b>${video.snippet.channelTitle}<br><br>`
    channel.style.marginLeft = "10px";
    
    const description = document.createElement('p');
    description.innerHTML = `<b>Description: </b> ${video.snippet.description}`;
    description.style.marginLeft = "10px";
    
    var thumbnailLink = document.createElement('a');
    thumbnailLink.href= `https://www.youtube.com/watch?v=${video.id.videoId}`;
    thumbnailLink.target="_blank";
    thumbnailLink.appendChild(thumbnail); 

    var titleLink = document.createElement('a');
    titleLink.href= `https://www.youtube.com/watch?v=${video.id.videoId}`;
    titleLink.target="_blank";
    titleLink.appendChild(title); 

    var channelLink = document.createElement('a');
    channelLink.href = `https://www.youtube.com/channel/${video.snippet.channelId}`;
    channelLink.appendChild(channel);
    
    const container = document.createElement('div');
    const tdiv = document.createElement('div');
    const datadiv = document.createElement('div');
    container.id = "con";

    tdiv.appendChild(thumbnailLink);
    datadiv.appendChild(titleLink);
    datadiv.appendChild(channelLink);
    datadiv.appendChild(description);
    
    container.appendChild(tdiv);
    container.appendChild(datadiv);

    results.appendChild(container);
  }
}