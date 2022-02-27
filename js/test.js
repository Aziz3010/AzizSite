// ////////////////////////////////////////////////////////////////
// accordion
const panel_heading_icon = document.querySelectorAll('.panel-heading i');
const panel_content = document.querySelectorAll('.panel-content');

panel_heading_icon.forEach((icon)=>{
    icon.addEventListener('click',function(e){
        let icon = e.target;
        let parentElement = icon.parentElement;
        let parentElement_nextElementSibling = parentElement.nextElementSibling

        panel_content.forEach((content)=>{
            content.classList.remove('active');
        })

        parentElement_nextElementSibling.classList.add("active");
    })
})
