
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

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (event.target.matches('.fa-solid fa-bars')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
