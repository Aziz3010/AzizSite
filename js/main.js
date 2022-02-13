// open side header when clicked on burger BTN
let burgerBTN = document.getElementById('burgerBTN');
let sideHeader = document.getElementById('side-header');

burgerBTN.addEventListener('click',function(){ 

    if(sideHeader.classList == 'on'){
        sideHeader.className = 'off';
    } else {
        sideHeader.className = 'on';
    }

});

// ////////////////////////////////////////////////////////////////