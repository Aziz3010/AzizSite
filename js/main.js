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
        sectionSelected.style.display = 'block';
    })

})

// ////////////////////////////////////////////////////////////////
