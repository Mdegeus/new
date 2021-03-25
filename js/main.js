const btnToTop = document.querySelector(".btn-back-top");
const btnTB = document.querySelector(".btn-timeBased");
const button = document.querySelector('.theme-switcher');

const bgURL = 'https://www.youtube.com/embed/gdZLi9oWNZg'

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

btnToTop.addEventListener('click', topFunction);

if (localStorage.getItem('Theme') == null || localStorage.getItem('Theme') == ""){
    localStorage.setItem('Theme', 'dark-theme');
}

if (localStorage.getItem('Theme') == null || localStorage.getItem('Theme') == ""){
    localStorage.setItem('Theme', 'dark-theme');
}

if (localStorage.getItem('Theme') === "dark-theme"){
    button.textContent = "<Theme: Dark>";
}else{
    button.textContent = "<Theme: Light>";
}

button.addEventListener('click', function(e){
    e.preventDefault();
    if (localStorage.getItem('Theme') === "dark-theme"){
        localStorage.setItem('Theme', "light-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "<Theme: Light>";

    }else{
        localStorage.setItem('Theme', "dark-theme");
        document.documentElement.className = localStorage.getItem('Theme');
        button.textContent = "<Theme: Dark>";
    }
});

document.documentElement.className = localStorage.getItem('Theme')


function SwitchWithTime(){
    if (localStorage.getItem('timeBased-Theme') == 'true'){
        const date = new Date();
        if (date.getHours() > 22 && date.getHours() < 6){
            localStorage.setItem('Theme', "dark-theme");
            document.documentElement.className = localStorage.getItem('Theme');
            button.textContent = "<Theme: Dark>";
        }else{
            localStorage.setItem('Theme', "light-theme");
            document.documentElement.className = localStorage.getItem('Theme');
            button.textContent = "<Theme: Light>";
        }
    }
}

function timeBasedbtnClick(){
        btnTB.textContent = "timeBased: " + localStorage.getItem('timeBased-Theme');
}

btnTB.addEventListener('click', function(){
    if (localStorage.getItem('timeBased-Theme') == 'true'){
        localStorage.setItem('timeBased-Theme', false)
    }else{
        localStorage.setItem('timeBased-Theme', true)
        SwitchWithTime();
    }
    timeBasedbtnClick()
});

setInterval(SwitchWithTime ,1000)
timeBasedbtnClick()

function GlitchState(){
    const all = document.querySelectorAll("*")
    for (let i = 0; i < all.length; i++){
        const taggsName = all[i].tagName.toLowerCase();
        if (taggsName != 'html' && taggsName != 'html' && taggsName != 'body'){
            all[i].style.visibility = 'hidden';
        }
    }
}

document.querySelector('.HomeButton').addEventListener('click', function(e){
    if (e.altKey){
        e.preventDefault();
        const audio = new Audio('../audio/kh.mp3');
        audio.play();
        //document.style.animation = change-background;
        GlitchState();
        document.write(`<p>HI</p>`);
        setInterval(function(){
            document.write(`<p>HI</p>`);
        }, 1000)
    }
});