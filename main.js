import './style.css'
import {gsap} from "gsap";

let tl = gsap.timeline({defaults:{
        opacity:0,
    }})

function init () {
    tl.from("#demo", {autoAlpha:0, ease:"linear", })
    tl.from("#main" , {})
    tl.fromTo("#images" , {opacity:0 ,backgroundColor: "#00000030"} , {opacity:1 , backgroundColor: "#ffffff30"} , 0)
    tl.from("h1" , {xPercent:200,   } )
        .from("h2" , {xPercent:-150,  } ,"-=0.5")
        .from("p" , {y:30 , } , "+=0.5")
        .from("button" , {y:60 , } , "<+=0.1")
        .from("#items > img" , { scale:0, y:100, stagger:.1 , transformOrigin:"50% 50%", ease:"back", } , "-=.2")
        .from(".img-box" , {opacity:0, color:"#0022ff" , transformOrigin:"top center",} , "-=1")
        .from("#swiz" , { scale:1.1 } , 0)
}

let swiz = document.querySelector(".swiz")

swiz.addEventListener("mouseenter" , () => {
    tl.to("#swiz" , {opacity:1, scale:1.1} )
    swiz.classList.add("filter")
})
swiz.addEventListener("mouseleave" , () => {
    tl.to("#swiz" , {opacity:1, scale:1})
    swiz.classList.remove("filter")
})

window.addEventListener("load" , () => init())