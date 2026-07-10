// ======================================
// TYPING ANIMATION
// ======================================

const words = [
    "Full Stack Developer",
    "Data Engineering Enthusiast",
    "Frontend Developer",
    "Backend Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typingEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    currentWord = words[wordIndex];

    if (isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex--);

    } else {

        typing.textContent = currentWord.substring(0, letterIndex++);

    }

    let speed = 120;

    if (!isDeleting && letterIndex === currentWord.length + 1) {

        speed = 1500;
        isDeleting = true;

    } else if (isDeleting && letterIndex === 0) {

        isDeleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

    }

    setTimeout(typingEffect, speed);

}

typingEffect();


// ======================================
// LOAD SKILLS
// ======================================

fetch("https://portfolioproject-production-120d.up.railway.app/api/skills")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("skillsContainer");

    container.innerHTML = "";

    data.forEach(skill => {

        container.innerHTML += `
        <div class="skill-card">
            <h3>${skill.skill_name}</h3>
            <p>${skill.skill_level}</p>
        </div>
        `;

    });

})
.catch(error => {

    console.log("Skill Error:", error);

});


// ======================================
// LOAD PROJECTS
// ======================================

fetch("https://portfolioproject-production-120d.up.railway.app/api/projects")
.then(res => res.json())
.then(data => {

    const container = document.getElementById("projectsContainer");

    container.innerHTML = "";

    document.getElementById("projectCount").innerHTML = data.length;

    data.forEach(project => {

        container.innerHTML += `

<div class="project-card">

<img src="${project.imageUrl}" alt="Project">

<div class="project-content">

<h3>${project.title}</h3>

<p>${project.description}</p>

<div class="tech">

${project.techStack}

</div>

<div class="btn-group">

<a href="${project.githubLink}" target="_blank" class="btn">

GitHub

</a>

<a href="${project.liveDemo}" target="_blank" class="btn2">

Live Demo

</a>

</div>

</div>

</div>

`;

    });

})
.catch(error => {

    console.log("Project Error:", error);

});


// ======================================
// SKILL COUNTER
// ======================================

fetch("https://portfolioproject-production-120d.up.railway.app/api/skills")
.then(res => res.json())
.then(data => {

document.getElementById("skillCount").innerHTML = data.length;

});


// ======================================
// SCROLL TO TOP
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 400){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.onclick = () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ======================================
// CONTACT FORM
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", async (e) => {
    console.log("FORM SUBMITTED");
alert("FORM SUBMITTED");

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {

alert("Please fill all fields.");

return;

}

try {  

const response = await fetch("https://portfolioproject-production-120d.up.railway.app/api/contacts", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

name,

email,

message

})

});

const data = await response.json();

alert(data.message);

contactForm.reset();

} catch (error) {

console.log(error);

alert("Something went wrong!");

}

});

}


// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".navbar ul");

if (menuBtn) {

menuBtn.addEventListener("click", () => {

navMenu.classList.toggle("showMenu");

});

}


// ======================================
// CLOSE MENU AFTER CLICK
// ======================================

document.querySelectorAll(".navbar ul li a").forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("showMenu");

});

});


// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ======================================
// SCROLL REVEAL
// ======================================

const revealElements = document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.timeline-box,.service-card,.about-container"

);

const reveal = () => {

const trigger = window.innerHeight - 100;

revealElements.forEach(element => {

const top = element.getBoundingClientRect().top;

if (top < trigger) {

element.classList.add("active");

}

});

};

window.addEventListener("scroll", reveal);

reveal();


// ======================================
// ACTIVE NAV LINK
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});


// ======================================
// BUTTON HOVER EFFECT
// ======================================

document.querySelectorAll(".btn,.btn2").forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-5px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0px)";

});

});


// ======================================
// LOADING ANIMATION
// ======================================

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});


// ======================================
// CURRENT YEAR
// ======================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {

footer.innerHTML = `© ${year} Nethra R | All Rights Reserved`;

}


// ======================================
// END OF SCRIPT
// ====================================

console.log("Portfolio Loaded Successfully 🚀");

console.log("SCRIPT VERSION 999");
alert("SCRIPT VERSION 999");