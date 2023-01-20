let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", mynavtoggle);


function mynavtoggle() {
    // alert("hello");
    navToggler.classList.toggle("active");
    let nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
        console.log(nav)
    }

    else{
        nav.removeAttribute("style");
    }
}