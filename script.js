const colorselect = document.querySelector('body');

function setColors(){
    setred(colorselect)
}


function setred(element){    
    element.style.setProperty('--r', Math.floor(Math.random() * 255));
    element.style.setProperty('--b', Math.floor(Math.random() * 255));
    element.style.setProperty('--g', Math.floor(Math.random() * 255));
    console.log("this is being called");
}

setColors()