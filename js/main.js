// open side header when clicked on burger BTN
let burgerBTN = document.getElementById('burgerBTN');
let sideHeader = document.getElementById('side-header');
let testLayOut = document.getElementById('testLayOut');

burgerBTN.addEventListener('click',function(){ 

    if(sideHeader.classList == 'on'){
        sideHeader.className = 'off';
        testLayOut.style.display = 'none';
    } else {
        sideHeader.className = 'on';
        testLayOut.style.display = 'block';
    }

});

// close side header when clicked out side it
testLayOut.addEventListener('click',function(){
    if(sideHeader.classList == 'on'){
        sideHeader.className = 'off';
        testLayOut.style.display = 'none';
    } else {
        console.log("ma2fol");
    }
});

// ////////////////////////////////////////////////////////////////
// add active class when click on links
let allLinks = document.querySelectorAll('.my-links ul li');

allLinks.forEach((Link)=>{
    Link.addEventListener("click",function(){
        
        allLinks.forEach((otherLink)=>{
            otherLink.classList.remove('active');
        })

        Link.classList.add('active');

    })
})

// ////////////////////////////////////////////////////////////////
// add display block to the section when click on links
let allSections = document.querySelectorAll('body section');
let allLinksHref = document.querySelectorAll('.my-links ul li a');

allLinksHref.forEach((LinkHref)=>{
    // get href form clicked Ancur
    LinkHref.addEventListener('click',function(e){
        let theSectionName = e.target.getAttribute('href');
        
        // for each on all sections and remove active class
        allSections.forEach((Section)=>{
            Section.style.display = 'none';
        });

        // add active class to the selected section only
        let sectionSelected = document.querySelector(`${theSectionName}`);
        sectionSelected.style.display = 'flex';
    })

})

// ////////////////////////////////////////////////////////////////
// change title with animation
let box = document.querySelector('#Home .title .title-changer #box');

let content = 'Front End Developer';
let letterNum = 1;

function writeText(text){
    box.innerText = text.slice(0,letterNum);
    letterNum++;

    if(letterNum > text.length){
        letterNum = 1;
        
        if(content === 'Front End Developer'){
            content = 'Back End Developer';
        } else {
            content = 'Front End Developer';
        }
    }
}
setInterval(()=>{writeText(content)},200);

// ////////////////////////////////////////////////////////////////
// plugin
$(document).ready(function() {
    $('#particles').particleground({
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 10000, // How many particles will be generated: one particle every n pixels
      dotColor: '#fff',
      lineColor: '#fff',
      particleRadius: 8, // Dot size
      lineWidth: 1,
      curvedLines: false,
      proximity: 110, // How close two dots need to be before they join
      parallax: true,
      parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
      onInit: function() {},
      onDestroy: function() {}
    });
});

// ////////////////////////////////////////////////////////////////
