// Display Informaton
document.getElementById('myName').textContent = "Rana Abdullah Jaber";
document.getElementById('titMyName').textContent = "Rana Abdullah Jaber";
document.getElementById('Birthdate').textContent = "10/10/1977";
document.getElementById('Email').textContent = "rana_abdullah77@yahoo.com";
document.getElementById('Phone').textContent = "+1718-111-0011";
document.getElementById('Address').textContent = "AL-Iraq/Baghda";
document.getElementById('Language').textContent = "Arabic , English";

// $(document).ready(function() {
//     var currentSrc = $('#Picture').attr('src');
//     if(currentSrc==null || currentSrc==""){       
//          $('#Picture').attr('src','http://i38.photobucket.com/albums/e149/eloginko/profile_male_large_zpseedb2954.jpg');
//     }


//     function readURL(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
            
//             reader.onload = function (e) {
//                 $('#Picture').attr('src', e.target.result);
//             }
            
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
    
//     $("#imgInp").change(function(){
//         readURL(this);
//     });
    
//     $("#Picture").click(function () {
//         $("#imgInp").click();
//     });

// });





function myFunction(xx) {
    var x = document.getElementById(xx);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $('.btnPlus').click(function(){
    $(this).find('i').toggleClass('fa-plus fa-minus')
});




// Calculater
//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}
// Dark mode

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }
//  Typint Text In Header
!(function($) {
    "use strict";
  
    // Hero typed
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
});
// Dark Mode

    // Add this to your javascript file

/* Body */
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode


