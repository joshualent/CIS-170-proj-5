 //w3schools responsive nav bar
function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //toggle between light and dark display mode
function toggleDisplayMode() {
    const bodyEl = document.getElementById("body");
    if (bodyEl.classList.contains("dark-mode")) {
        bodyEl.classList.add("light-mode")
        bodyEl.classList.remove("dark-mode")
    }
    else {
        bodyEl.classList.add("dark-mode")
        bodyEl.classList.remove("light-mode")
    }
    console.log("working, add functionality later");
}

//Make "View resume" button available to the user (This called on submit button)
function makeResumeAvailable() {
   const resumeDiv = document.getElementsByClassName("view-resume")[0];
   console.log(resumeDiv);
   resumeDiv.style.display = 'block';
}
let counter = 0;
function testRunning() {
    console.log("This ran", counter);
    counter++;
}


