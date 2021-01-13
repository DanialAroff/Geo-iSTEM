let opener = document.getElementsByClassName('instruction-opener');

function openInstructions() {
    const tl = gsap.timeline(); 
    tl.to(opener, {y: '-100%', duration: 0.1})
    .to('.instructions-container', {top: '0', duration: 0.2});
   
}

function closeInstructions() {
    const tl = gsap.timeline(); 
    tl.to('.instructions-container', {top: '-100%', duration: 0.2})
    .to(opener, {y: '0%', duration: 0.1})
}
