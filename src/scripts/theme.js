import { inView, animate, scroll } from "motion";

//ADDS 'IN-VIEW' CLASS
if(document.querySelector(`[data-viewport]`) !== null){
    document.querySelectorAll(`[data-viewport]`).forEach(el => {  
        let delay = 0;
        let amount = "any";
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay") * 1000);
        }                
        if(el.getAttribute("data-viewport-amount")){
            amount = Number(el.getAttribute("data-viewport-amount"))
        }                
        inView(el, () => {
            setTimeout(() => {
                el.classList.add("in-view")
            }, delay);
        }, { amount });    
    })
}
//TYPOGRAPHY SHIFT
if(document.querySelector(`[data-viewport="typography-shift"]`) !== null){
    document.querySelectorAll(`[data-viewport="typography-shift"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }
        inView(el, ({ target }) => {
            animate(
                target.querySelector("span"),
                { y: ["1.5rem", "0"], opacity: ["0", "1"] },
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}
//FADE IN
if(document.querySelector(`[data-viewport="fade-in"]`) !== null){
    document.querySelectorAll(`[data-viewport="fade-in"]`).forEach(el => {
        let delay = 0;
        if(el.getAttribute("data-viewport-delay")){
            delay = Number(el.getAttribute("data-viewport-delay"));
        }       
        inView(el, ({ target }) => {
            animate(
                target,
                { opacity: ["0", "1"]},
                { duration: 0.75, delay, easing: [0.25, 1, 0.5, 1] }
            );
        });        
    })
}