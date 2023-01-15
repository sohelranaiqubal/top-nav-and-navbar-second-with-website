







let navbar = document.querySelector('.navbar');
let loginBox = document.querySelector('.login-box .fa-search');
//<i class="fas fa-times"></i> 
loginBox.addEventListener('click', ()=>{
    navbar.classList.toggle('showInput');
    if (navbar.classList.contains('showInput')) {
        loginBox.classList.replace('fa-search' ,'fa-times')
    } else {
        loginBox.classList.replace('fa-times' ,'fa-search')

      
    }
  
});

let sidebaropenBtn = document.querySelector('.navbar .fa-bars');
let sidebarcloseBtn = document.querySelector('.navlinks .fa-times')
let navlinks = document.querySelector('.navlinks');

sidebaropenBtn.addEventListener('click',()=>{
    navlinks.style.left='0'
});
sidebarcloseBtn.addEventListener('click', ()=>{
    navlinks.style.left='-100%'
})



let htmlArrow = document.querySelector('.html-arrow');
htmlArrow.addEventListener('click',()=>{
    navlinks.classList.toggle('html');
})

let cssArrow = document.querySelector('.css-arrow');
cssArrow.addEventListener('click',()=>{
    navlinks.classList.toggle('css');
})

let moreArrow = document.querySelector('.more-arrow');
moreArrow.addEventListener('click',()=>{
    navlinks.classList.toggle('more');
})



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// let accordion = document.querySelectorAll('.accordion');
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i= 0; i<len; i++){
    acc[i].addEventListener('click',function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}


// Second accordion javascript code

var sacc = document.getElementsByClassName('sec-accordion');
var i;
for (i=0; i < sacc.length; i++){
    sacc[i].addEventListener('click', function(){
        this.classList.toggle('active');
        this.classList.toggle('showAnswer');
        var second_acc_panel = this.nextElementSibling;
        if (second_acc_panel.style.maxHeight) {
            second_acc_panel.style.maxHeight = null;
        } else {
            second_acc_panel.style.maxHeight = second_acc_panel.scrollHeight + 'px'; 
        }

    })
}



// staarts from here slideshow gallary

let flag = 0;
showSlides(flag);

function plusSlides(num) {
  showSlides(flag = flag + num);
}

function currentSlide(num) {
  showSlides(flag = num);
}

function showSlides(num) {
  
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (num == slides.length) { flag = 0; num=0;}
  if(num < 0){flag = slides.length - 1; num = slides.length-1;}
  for (let y of slides) {
    y.style.display = "none";
  }
  for (let y of dots) {
    y.className = y.className.replace(" active", "");
  }
  slides[flag].style.display = "block";
  dots[flag].className += " active";
  captionText.innerHTML = dots[flag].alt;
}


//! Tabs section javascript code starts
function openCity(evt, cityName) {
    var i;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("opendefault").click();

//!   personal life style TABS section starts 
function closeCity(evt, cityName) {
    var i;
    ttabcontent = document.getElementsByClassName("ttabcontent");
    for (let y of ttabcontent) {
      y.style.display = "none";
    }
    ttablinks = document.getElementsByClassName("ttablinks");
    for (let y of ttablinks ) {
      y.className = y.className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById('autoOpen').click();