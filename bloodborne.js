let middleitemAnim;
document.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('middleitem')) {
        console.log('fsůdlkafjslkd')
        middleitemAnim = event.target.animate(
            [
                {
                    backgroundPositionY: "top",
                },
                {
                    backgroundPositionY: "bottom",
                },
                {
                    backgroundPositionY: "top",
                },
            ],
            {
                duration: 40000,
                fill: "forwards",
                delay: 0,
                iterations: Infinity,
            }
        );
    }
    else if(!(event.target.classList.contains('middleitem'))) middleitemAnim.pause();
})
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