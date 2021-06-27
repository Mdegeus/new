const projectsBtn = document.querySelectorAll(".btn-project");

for (let i = 0; i < projectsBtn.length; i++) {
    console.log('btn');
    projectsBtn[i].addEventListener('click', function(e){
        let page = window.open(projectsBtn[i].id);
    });
}