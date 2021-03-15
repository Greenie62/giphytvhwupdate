
var channels = ['mr robot', 'cowherd', 'wwe', 'patriots','nba','shaq','biden', "up", "down"];
var remoteGrid = document.querySelector(".remoteGrid")

channels.forEach(c=>{
    var channelBtn = document.createElement("div");
    channelBtn.className = 'channel-btn'
    channelBtn.innerHTML = `<p>${c}</p>`
    channelBtn.onclick=(e)=>changeMovie(e)
    remoteGrid.appendChild(channelBtn)
})


async function changeMovie(e){
    console.log(e.target)
    if(e.target.textContent === "up"){
        changeChannel('up')
        console.log("Channel: " + channel)
    }
    else if(e.target.textContent === "down"){
        changeChannel('down')
        console.log("Channel: " + channel)

    }
    else{
    counter=0;
    console.log(e.target.textContent)
    data = await fetchGiphy(e.target.textContent)

    tvLight.style.backgroundColor='green'
    }
    tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`

}