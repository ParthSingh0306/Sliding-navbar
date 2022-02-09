const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

     let getMode = localStorage.getItem("mode");
     if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
     }

 //    js code to toggle dark and light modes code 
      modeToggle.addEventListener("click", () => {
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark");


// js code to keep our mode even page refreshes or reopen
          if(!body.classList.contains("dark")){
              localStorage.setItem("mode", "light-mode");
          }else{
            localStorage.setItem("mode", "dark-mode");
          }
      });


 //    js code to toggle searchBox
        searchToggle.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
    });

//     js code to toggle siderbar
       sidebarOpen.addEventListener("click", () => {
         nav.classList.add("active");
       });


       body.addEventListener("click", e => {
        let clickedElm = e.target;

        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
         nav.classList.remove("active");
        }
      });


