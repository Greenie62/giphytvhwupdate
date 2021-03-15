
var channels = ['mr robot', 'cowherd', 'wwe', 'patriots','nba','shaq','biden'];
var clickerBtns = ['up','down','power'];
var remoteGrid = document.querySelector(".clickerGrid")

channels.forEach(c=>{
    var channelBtn = document.createElement("div");
    channelBtn.className = 'channel-btn'
    channelBtn.innerHTML = `<p>${c}</p>`
    channelBtn.onclick=(e)=>changeMovie(e)
    channelGrid.appendChild(channelBtn)
})

clickerBtns.forEach(c=>{
    var clickerBtn = document.createElement("div");
    clickerBtn.className = 'clicker-btn'
    clickerBtn.innerHTML = `<p>${c}</p>`
    clickerBtn.onclick=(e)=>remoteClick(e)
    clickerGrid.appendChild(clickerBtn)
})


async function changeMovie(e){
    hasClicked = true;
    console.log(e.target)
    // if(e.target.textContent === "up"){
    //     changeChannel('up')
    //     console.log("Channel: " + channel)
    // }
    // else if(e.target.textContent === "down"){
    //     changeChannel('down')
    //     console.log("Channel: " + channel)

    // }
   // else{
    channel=0;
    channelDOM.innerHTML = channel + 1
    console.log(e.target.textContent)
    data = await fetchGiphy(e.target.textContent)

    tvLight.style.backgroundColor='green'
//}
    tvArea.innerHTML = `<img src=${data[channel].images.fixed_height.url} alt='giphy' class='giphy'>`

}