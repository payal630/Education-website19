// ================= SCROLL ANIMATION =================

const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

fadeElements.forEach(el=>observer.observe(el));

// ================= BACK TO TOP =================

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        topBtn.classList.add('show');
    }else{
        topBtn.classList.remove('show');
    }
});

topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});
const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}
const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
/*================ MOBILE MENU =================*/

const menuToggle=document.getElementById("menu-toggle");

const navLinks=document.getElementById("nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}
/*================ ANIMATED COUNTERS =================*/

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const achievementSection = document.querySelector(".achievements");

if (achievementSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

                observer.disconnect();

            }

        });

    });

    observer.observe(achievementSection);

}
/*================ PRELOADER =================*/

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";

        preloader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 500);

    }

});
/*================ DARK MODE =================*/

const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
            themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }else{
            localStorage.setItem("theme","light");
            themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    });

}
/*================ ACTIVE NAV LINK =================*/

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }

});
