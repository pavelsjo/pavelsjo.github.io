/* Card */

let imageCard = document.querySelector('img');


// setTimeout(myFunction, 10000);

// for (let index = 0; index <= 5; index++) {
//     function myFunction() {
//         imageCard.setAttribute('src','blog/01-keep-last-date-oac-df/images/step-0'+ String(index) + '.png')
//     }
        
// };

imageCard.setAttribute('src','blog/01-keep-last-date-oac-df/images/step-0'+ String(0) + '.png')

/* Header */

function openCategory(cityName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 
