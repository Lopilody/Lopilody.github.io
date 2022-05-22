 
 document.addEventListener('click', function (event) {

  console.log(event.target);

      if (event.target.classList.contains("searche")) {  
        event.target.parentElement.parentElement.querySelector(".infocontainer").style.display = "none";
        event.target.parentElement.parentElement.querySelector(".lore").style.display = "flex"; 
      }
      if(event.target.classList.contains("lore")) {

        event.target.parentElement.parentElement.querySelector(".lore").style.display = "none"; 
        event.target.parentElement.parentElement.querySelector(".infocontainer").style.display = "grid";
      }
      if(event.target.classList.contains("loretext")) {
        
        event.target.parentElement.parentElement.querySelector(".lore").style.display = "none"; 
        event.target.parentElement.parentElement.querySelector(".infocontainer").style.display = "grid";
      }
      if(event.target.classList.contains("loretitle")) {
       
        event.target.parentElement.parentElement.querySelector(".lore").style.display = "none"; 
        event.target.parentElement.parentElement.querySelector(".infocontainer").style.display = "grid";
      }
      
  })
    window.onload = function () {

      function changeImage() {
          let BackgroundImg =
              [
                  "bloodborne-ludwig-wallpaper.jpg",
                  "588027.jpg",
                  "Bloodborne-PS4-Wallpaper-46.jpg",
                  "qhdOfn.jpg"
              ]
          let i = Math.floor((Math.random() * BackgroundImg.length));
          document.querySelector('body').style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
      }
      window.setInterval(changeImage, 10000);
  }