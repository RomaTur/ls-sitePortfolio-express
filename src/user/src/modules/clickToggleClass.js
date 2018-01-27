module.exports = (elemClass, buttonClass, fnActive, fn) => {
    ////////////
    fn = fn || function(){};
    fnActive = fnActive || function(){}; 
    
    let elem = document.querySelector('.' + elemClass)
    let button = document.querySelector('.' + buttonClass)
    let containerToggle = () => {
        elem.classList.toggle(elemClass + '--active');
        (elem.classList.contains(elemClass + '--active')) ? fnActive() : fn();
    };
    if (elem && button) {
        button.addEventListener('click', containerToggle);
    }
    ///////////////

};