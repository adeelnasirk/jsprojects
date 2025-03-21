let links = document.getElementById('links');
let bar = document.getElementById('bar-icon');
let navAbout = document.querySelector(".about");
let aboutMenu = document.querySelector(".about-menu");


bar.addEventListener('click', function (event) {
    links.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    if(!links.contains(event.target)&& !bar.contains(event.target)){
        links.classList.remove('active');
    }
})

navAbout.addEventListener('mouseover', function(){
    aboutMenu.classList.add("show")
});

document.addEventListener('mouseover', function (event) {
    if(!navAbout.contains(event.target)&& !aboutMenu.contains(event.target)){
        aboutMenu.classList.remove('show')
    };
})
