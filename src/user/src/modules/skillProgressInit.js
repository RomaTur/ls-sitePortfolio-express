module.exports = (container, bar, attr) => {
    //////////////
    let doFnElemVisible = require('./doFnElemVisible');
    let skill = [...document.querySelectorAll('.' + container)]; 
    let svgCircles = [...document.querySelectorAll('.' + bar)]; 
    let percent = []; 
    let currentCircle; 
    let handleClick = () => {
        skill.forEach((item, i) => {
            percent[i] = parseInt(item.getAttribute(attr)); 
            currentCircle = item.getElementsByClassName(bar); 
            currentCircle[0].style.strokeDashoffset = ((100 - percent[i]) / 100) * Math.PI * 180; 
        })
    }
    if (skill && svgCircles) {
        svgCircles.forEach(i => {
            i.style.strokeDashoffset = Math.PI * 180;
        })
        doFnElemVisible({
            elemClass: 'skills',
            fn: handleClick
        });
    }
    ////////////////////
};