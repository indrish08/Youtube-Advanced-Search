// const axios = require('axios');
// const fs = require('fs');
// const express=require('express');
// let exp=express();

// Set the API key, the target country, the search query, and the maximum number of results
const apiKey = 'AIzaSyCbUFozA3Gss_hcObFhxB22TcSXlxUiYUM';
const maxResults = 10;
// const targetCountry = 'US';
// const searchQuery = 'javascript tamil';

const form = document.querySelector('form');
// console.log(form);
const targetCountryInput = document.querySelector('input[name="targetCountry"]');
const searchQueryInput = document.querySelector('input[name="searchQuery"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the target country and the search query from the form
  const targetCountry = targetCountryInput.value;
  const searchQuery = searchQueryInput.value;

  // Make the API request
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=${targetCountry}&q=${searchQuery}&type=video&key=${apiKey}&maxResults=${maxResults}`;

  axios.get(url)
    .then(response => {
      const videoData = response.data.items;
      console.log(videoData);
      displayVideos(videoData);
    })
    .catch(error => {
      console.log(error);
    });
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Get the target country and the search query from the form
//   // const targetCountry = targetCountryInput.value;
//   const searchQuery = searchQueryInput.value;

// // console.log(searchQuery);

// // Make the API request
// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=${targetCountry}&q=${searchQuery}&key=${apiKey}&maxResults=${maxResults}`;

//   // Get the data from the API
//   // function 
//   axios.get(url).then(response => {
//     videoData = response.data.items;
//     // console.log(videoData);
//     // fs.writeFileSync('video-data.json', JSON.stringify(videoData));
//     // console.log('Video data saved as JSON file');
//     // handleData(videoData);
//     displayVideos(videoData);
//   });
// });

// exp.get('/',(req,res)=>{
//   res.sendFile(__dirname+"/index.html");
// })

// // Start the server
// exp.listen(3000, () => {
//   console.log(`Server is listening on port ${port}`);
// });

  function displayVideos(data) {
    // const parentContainer = document.querySelector('#parent-container');
    // parentContainer.style.display = 'flex'; 
    // Loop through the video data and create elements for each piece of information
    for (const video of data) {
      const thumbnail = document.createElement('img');
      thumbnail.src = video.snippet.thumbnails.medium.url;
      // thumbnail.style.float='left';
      thumbnail.style.width='300px';

      const text = document.createElement('p');
      text.innerHTML = "<b>"+video.snippet.title + 
                        "</b><br><br> <b>Description: </b>" + video.snippet.description + 
                        "<br><br> <b>Channel: </b>" + video.snippet.channelTitle;
      text.style.marginLeft = "10px";
      
      // const title = document.createElement('p');
      // title.innerHTML = `<b>Title: </b> ${video.snippet.title}<br>`;

      // const description = document.createElement('p');
      // description.innerHTML = `<b>Description: </b>${video.snippet.description}`;
      // // description
    
      // const channel = document.createElement('p');
      // channel.innerHTML = `<b>Channel: </b>${video.snippet.channelTitle}`;
      
      // const videoLink = 'https://www.youtube.com/watch?v=' + video.id.videoId;
      var a = document.createElement('a');
      // var link = document.createTextNode(videoLink);
      a.href= 'https://www.youtube.com/watch?v=' + video.id.videoId ;
      a.target="_blank";
      a.appendChild(thumbnail); 
      
      // const line = document.createElement('p');
      // line.textContent = '\n';
      
      const container = document.createElement('div');
      container.style.display = "flex";
      container.style.marginBottom = "20px";
      container.appendChild(a);
      container.appendChild(text);
      
      document.body.appendChild(container);

      // const views = document.createElement('p');
      // views.textContent = `Views: ${video.views}`;
      
      // parentContainer.appendChild(thumbnail);
      // parentContainer.appendChild(a);
      // parentContainer.appendChild(text);
      // parentContainer.appendChild(title);
      // parentContainer.appendChild(description);
      // parentContainer.appendChild(channel);
      // parentContainer.appendChild(line);
      // parentContainer.appendChild(views);
      
        // const lineBreak = document.createElement('br');
        // parentContainer.appendChild(lineBreak);
        // parentContainer.appendChild(lineBreak);
        // parentContainer.appendChild(lineBreak);
      }    

    // const videoList = document.getElementById('video-list');
    // for (const video of data) {
    //   const videoTitle = video.snippet.title;
    //   const videoLink = 'https://www.youtube.com/watch?v=' + video.id.videoId;
    //   var a = document.createElement('a');
    //   var link = document.createTextNode(videoLink);
    //   a.appendChild(link); 
    //   a.href=videoLink;
    //   a.target="_blank";
    //   const listItem = document.createElement('li');
    //   const listItem2 = document.createElement('br');
    //   listItem.textContent = videoTitle;
    //   // listItem2.textContent = '<br>';
    //   videoList.appendChild(listItem);
    //   videoList.appendChild(a);
    //   videoList.appendChild(listItem2);
    //   // videoList.appendChild(a2.appendChild(document.createTextNode('<br>  httttttpp')));
    // }
  }

function handleData(data) {
  console.log(data);
  console.log(data.length);
//   // const firstVideo = videoData[0];
//   // console.log(firstVideo.snippet.title);
//   // console.log(firstVideo.snippet.description);
//   // console.log(videoData[0].id.videoId);
//   // for(let i=0;i<data.length;i++)
//   // console.log(data[i]);
//   document.getElementById('l1').innerHTML=data[i].snippet.title;
}


