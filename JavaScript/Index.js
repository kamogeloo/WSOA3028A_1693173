




//backToTop
    let topbutton = document.getElementById("topbtn");
    window.onscroll = function() {scrollTo()};
    console.log('it works');
    
    function scrollTo() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        {
              topbutton.style.display = "block";
    } 
    else {
        topbutton.style.display = "none";
    }
    }

    

    function BacktoTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0;
    
    }





//document.addEventListener('DOMContentLoaded', () => LoadPage());
//console.log('DOM is loaded');


 //code from W3school on responsive menu
function Responsivemenu(){
    let menu =document.getElementById("menu");

    if(menu.className ==="navi")  {

        menu.className += " responsive";
    }else {
        menu.className = "navi";
    } 

    }