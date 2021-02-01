use strict";

// hamburger navigacio 
let cbOpen = true;
function hamburgerNav() {
 
    if(cbOpen==false)//ha zarva van
    {
        document.querySelector("#nav-container").classList.remove("nav-open");
        document.querySelector(".ham-menu-line").classList.remove("line-rot");
        document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
        
        cbOpen = true;
    }
    else if(cbOpen==true)
    {
      
        document.querySelector("#nav-container").classList.add("nav-open");
        document.querySelector(".ham-menu-line").classList.add("line-rot");
        document.querySelector(".ham-menu-linea").classList.add("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.add("lineb-rot");


        document.querySelector(".menu-point-cont").addEventListener('click', function() {
          document.querySelector("#nav-container").classList.remove("nav-open");
          document.querySelector(".ham-menu-line").classList.remove("line-rot");
          document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
          document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
          cbOpen = true;
        });
        cbOpen = false;
    }  
  }
 