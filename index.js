    /* navbar toggle */
let links = document.getElementById('links');
let bar = document.getElementById('bar-icon');

/*     drop down nav manu */
let navAbout = document.querySelector(".about");
let aboutMenu = document.querySelector(".about-menu");

 

    /* responsive navbar for mobile  */
bar.addEventListener('click', function (event) {
    links.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    if(!links.contains(event.target)&& !bar.contains(event.target)){
        links.classList.remove('active');
    }
})


    /* Drop Down nnavbar Menu */
navAbout.addEventListener('mouseover', function(){
    aboutMenu.classList.add("show");
});

document.addEventListener('mouseover', function (event) {
    if(!navAbout.contains(event.target)&& !aboutMenu.contains(event.target)){
        aboutMenu.classList.remove('show')
    };
})


 // On Scroll Animation
window.addEventListener('load', function () {
    const boxEl = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-box'); // ✅ Fix here
            }
        });
    }, { threshold: 0.1 });  //threshold: 1 means 100% of target is visible

    boxEl.forEach((el)=> observer.observe(el));//observe box el use for each is element is more
});



