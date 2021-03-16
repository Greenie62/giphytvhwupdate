let channel = 0;
let data = [];
let hasClicked = false;

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


  function addChannel(){
      let channel = channelInput.value;
      console.log("Value: " + channel);

      var channelBtn = document.createElement("div");
      channelBtn.className = 'channel-btn'
      channelBtn.innerHTML = `<p>${channel}</p>`
      channelBtn.onclick=(e)=>changeMovie(e)
      channelGrid.appendChild(channelBtn)

      var channelCount = channelGrid.children.length;

      if(channelCount > 9){
          channelGrid.style.gridTemplateColumns='repeat(3,1fr)'
      }

      if(channelCount > 13){
        channelGrid.style.gridTemplateColumns='repeat(4,1fr)'
    }

    channelInput.value = ""

  }
  
  
  