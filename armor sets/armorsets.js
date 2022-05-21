
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


    /*
    let searchename = [];
    function onLoad() {
        let gr = document.currentScript;
        searchename[searchename.length] = gr.textContent;
    }
    console.log(searchename);

    function myFunction() {
        let textoutput = document.getElementsByClassName('input').textoutput;
        let namegrid = [

            "Ashen Hunter set",
            "",
            "Armor searche",
            "Black Church set",
            "Butcher set",
            "Bardor set",
            "Bone Ash set",
            "Cainhurst set",
            "Charred Hunter set",
            "Choir set",
            "Constable set",
            "Decorative Old Hunter set",
            "Doll set",
            "Executinoer set",
            "Foreign set",
            "Gascoingne's set",
            "Gehrman's Hunter set",
            "Graveguard set",
            "Harrowed set",
            "Henryk's Hunter set",
            "Hunter set",
            "Knight's set",
            "Madman set",
            "Maria Hunter set",
            "Old Hunter set",
            "Shabby set",
            "Student set",
            "Tomb Prospector set",
            "White Church set",
            "Yahar'gul set",
            "Yamamura set"
        ];
        for (let index = 0; index < namegrid.length; index++) {
            if (textoutput == namegrid[index] || textoutput == namegrid[index].toLowerCase) {
                console.log("1");
            }
            else {
                console.log("0");
            }
        }
    }
    let container = document.getElementsByClassName('container');


    function Information() {
        let rightsidetable = document.getElementsByClassName('.rightside');
        rightsidetable.style.display = "none";
        let rightsidetext = document.getElementsByClassName('.rightsidetext');
        rightsidetext.style.display = "flex";
    }

    /*function myFunction() {
   let input, filter, container, griditem, name, a, i, txtValue;
   input = document.getElementsByClassName("searche");
   filter = input.value.toUpperCase();
   container = document.getElementsByClassName("container");
   griditem = container.getElementsByTagName("div");
   for (i = 0; i < li.length; i++) {
       a = griditem[i].getElementsByTagName("a")[0];
       txtValue = a.textContent || a.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
           griditem[i].style.display = "";
       } else {
           griditem[i].style.display = "none";
       }
   }
}*/