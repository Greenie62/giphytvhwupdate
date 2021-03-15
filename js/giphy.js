
let apikey='6gRm9WZ0hk8YcvjvVS4tX2HAAnV5WmgE'
let channel = 0;
let data = [];

async function fetchGiphy(channel){
  let res =  await fetch(`https://api.giphy.com/v1/gifs/search?q=${channel}&api_key=${apikey}`)
  let data = await res.json();
    console.log(data.data)
  return data.data;
}


function changeChannel(dir){
    if(dir === "up"){
        channel++
    }
    else{
        if(channel === 0)return;
        channel--
    }
}


