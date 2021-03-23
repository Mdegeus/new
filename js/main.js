const btnToTop = document.querySelector(".btn-back-top");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

btnToTop.addEventListener('click', topFunction);

if (localStorage.getItem('Theme') == null || localStorage.getItem('Theme') == ""){
    localStorage.setItem('Theme', 'dark-theme');
}

if (document.querySelector('.theme-switcher')){
    const button = document.querySelector('.theme-switcher')

    if (localStorage.getItem('Theme') === "dark-theme"){
        button.textContent = "<Theme: Dark>"
    }else{
        button.textContent = "<Theme: Light>"
    }

    button.addEventListener('click', function(){
        if (localStorage.getItem('Theme') === "dark-theme"){
            localStorage.setItem('Theme', "light-theme");
            document.documentElement.className = localStorage.getItem('Theme')
            button.textContent = "<Theme: Light>"

        }else{
            localStorage.setItem('Theme', "dark-theme");
            document.documentElement.className = localStorage.getItem('Theme')
            button.textContent = "<Theme: Dark>"
        }
    });
}


document.documentElement.className = localStorage.getItem('Theme')