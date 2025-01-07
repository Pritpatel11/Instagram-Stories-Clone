var arr = [
    {dp:"https://wallpapers.com/images/hd/motu-patlu-happy-d6ji2dkipv619c4x.jpg",
    story:"https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg"},
    {dp:"https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
    story:"https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg"},
    {dp:"https://i.pinimg.com/474x/f9/2a/48/f92a489aa687d15bca828fc118d5c7dc.jpg",
    story:"https://wallpapercave.com/wp/wp10326199.jpg"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNAjRXJddZulh-JqdzW2esaoFATjaOoKIIw&s",
    story:"https://m.media-amazon.com/images/M/MV5BZDc2MDcxNGMtNTk1NS00M2EzLWIzY2ItYWEwYjdiM2NiNjRlXkEyXkFqcGc@._V1_.jpg"},
    {dp:"https://wallpapercave.com/wp/wp9529857.jpg",
    story:"https://i.ytimg.com/vi/HjdIEEgRuCo/maxresdefault.jpg"},
    
]

function instastroy(){
    var cluter = "";
    
    var storyy = document.querySelector(".storiya");
    
    arr.forEach(function(elm,idx){
        // console.log(elm.dp,elm.story);
        cluter += `<div class="stroy">
                  <img id= "${idx}" src="${elm.dp}" alt="">
                  </div>` 
    })
    storyy.innerHTML = cluter;
    storyy.addEventListener("click",function(dets){
        document.querySelector(".full-story").style.display = "block"
        document.querySelector(".full-story").style.backgroundImage = `url(${arr[dets.target.id].story})`
        // console.log(arr[dets.target.id].story);
        
        setTimeout(function(){
            document.querySelector(".full-story").style.display = "none"
        },3000)
        console.log(time);
    });
}
instastroy();
  
    

