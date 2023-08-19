
// droo menu click 
// var dropMenuOne = document.querySelector (`.drop-menu-01`)

// dropMenuOne.forEach(function(dropMenuOne){
//     console.log(dropMenuOne);
// })


// humbarger funtion
let navLinks = document.querySelector (`.nav-links`)
let humBarger = document.querySelector (`.humbarger`)

humBarger.addEventListener (`click`,() =>{
    navLinks.classList.toggle (`active`)
    humBarger.classList.toggle (`active`)
})




// scroll function
let navBar = document.querySelector (`#nav-bar`)
let header = document.querySelector (`header`)

window.addEventListener (`scroll`, ()=>{
    if (this.scrollY >50){
        navBar.classList.add (`scrolled`)
        header.classList.add (`active`)
    }else{
        navBar.classList.remove (`scrolled`)
        header.classList.remove (`active`)
    }
})


