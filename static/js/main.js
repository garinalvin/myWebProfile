
function switchPage(pageId) {
    // console.log(pageId)

    const sections = document.querySelectorAll("section")
    sections.forEach(sect => {
        sect.style.display = "none";
        
        if (sect.classList.contains(pageId)) {
            sect.style.display = "block";
        }
    })

}

document.addEventListener("DOMContentLoaded", function () {


    // switchPage("Home");
    navigatePage();
    let intervalId = setInterval(
        playShootingStar, 2000
    )
    toggleMenu();
    


})

function navigatePage() {
    document.addEventListener("click", (event) => {

        

        let elTargetClick = event.target
        // console.log(elTargetClick.classList)
        if (elTargetClick.classList.contains("nav-menu")) {
            switchPage(elTargetClick.id);
            document.querySelector(".nav-main").classList.remove("active");

            //style current menu
            document.querySelectorAll(".nav-menu").forEach(menu=>{
               if (menu.id === elTargetClick.id){
                elTargetClick.classList.add("curr-menu");
               }
               else{
                if(menu.classList.contains("curr-menu")){
                    menu.classList.remove("curr-menu");
                }
               }
            })

        }

    })
}

function playShootingStar(){
    let randomNumb = Math.floor(Math.random()*1000+1);
    // console.log(randomNumb)
    const elHomeSect = document.querySelector(".home");
    if (elHomeSect.style.display !== "none"){
        const elShooting = document.querySelector(".shooting");
        elShooting.style.left = `${randomNumb}px`;
        elShooting.style.animationPlayState = "running";

    }


};

function toggleMenu(){

    let elMenu= document.querySelector(".nav-main");

    let elBurgers = document.querySelector(".nav-burger");

    elBurgers.addEventListener("click", ()=>{
        elMenu.classList.toggle("active");
        // console.log("clciked");
    }
    );
};