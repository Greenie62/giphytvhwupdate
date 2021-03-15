
let apikey='6gRm9WZ0hk8YcvjvVS4tX2HAAnV5WmgE'
let channel = 0;
let data = [];
let hasClicked = false;

async function fetchGiphy(channel='patriots'){
  let res =  await fetch(`https://api.giphy.com/v1/gifs/search?q=${channel}&api_key=${apikey}`)
  let data = await res.json();
    console.log(data.data)
  return data.data;
}





async function remoteClick(e){
  let btn = e.target.textContent;
  console.log("Btn: " + btn);

  switch(btn){

    case "up":
      console.log("upCase")
      if(channel === data.length-1)return;
         channel++
         console.log("channel: " + channel)
         channelDOM.innerHTML = parseInt(channelDOM.innerHTML) + 1
         tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`

      break;

    case "down":
      console.log("Case")

      if(channel === 0)return;
         channel--
         channelDOM.innerHTML = parseInt(channelDOM.innerHTML) - 1

         console.log("channel: " + channel)
         tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`


      break;

    case "power":
if(!hasClicked){
  data = await fetchGiphy()
  console.log("else else fired!")
  tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`
  tvLight.style.backgroundColor = 'green'
  channelDOM.innerHTML = channel + 1

  hasClicked = true;
  return;
}
        
if(tvLight.style.backgroundColor === "red"){
            tvLight.style.backgroundColor = "green"
                tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`
                channelDOM.innerHTML = channel + 1
            }
          else{
            tvLight.style.backgroundColor = "red"
            tvArea.innerHTML = ""
            channelDOM.innerHTML = ""
          }


      break;

    default:
      console.log("unknown btn")
  }
}


