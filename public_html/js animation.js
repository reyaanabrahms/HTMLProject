let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded' , ()=>{

	setTimeout(() =>{

		logoSpan.forEach((span,idx)=>{
			setTimeout(()=>{
				span.classList.add('active');
			},(idx + 1)*400)
		});
		setTimeout(() =>{

			logoSpan.forEach((span,idx)=>{
				setTimeout(()=>{
					span.classList.remove('active');
					span.classList.add('fade');
				},(idx + 1)*50)
			})
		},2000);
		
		setTimeout(()=>{

			intro.style.top = '-100vh'
		},2300)

	})
});

// Splitting();
// ScrollOut({
//    targets: '[data-splitting]'
// });//for logo animation

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}//slide show on photo gallery

function validateForm() {
  let v = document.forms["myForm"]["volunteer"].value;
  let w = document.forms["myForm"]["fname"].value;
  let x = document.forms["myForm"]["lname"].value;
  let y = document.forms["myForm"]["phone"].value;
  let z = document.forms["myForm"]["email"].value;
  if (w == "" || x == "" || y == "" || z == "" || v == "None"){
    alert("missing details must be filled out");
    return false;
  }
}//validation

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function mycourses() {
  document.getElementById("courses").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}//fuction for the drop down

function mycourses2() {
  document.getElementById("courses2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}//fuction for the drop down



//    /^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i