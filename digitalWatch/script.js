
let timeElement = document.getElementById("timeText");
let dateElement = document.getElementById("dateText");
let gradientBorder = document.getElementsByClassName("watchWrapper");
let watchElement = document.getElementsByClassName("watch")[0];



// for repeted execution after specific time
setInterval( () =>{
    
    const currentTime = new Date();
    timeElement.innerText = currentTime.toLocaleTimeString('en-US'); /* en-US for Am/pm indicator*/

    // for date
    const currentDate = new Date();
    dateElement.innerText = currentDate.toLocaleDateString();


},1000);


function cssGradientBorder(){


 const randomColor = () => `rgb(${Math.floor(Math.random() * 255)},
                                 ${Math.floor(Math.random() * 255)},
                                 ${Math.floor(Math.random() * 255)})`;

  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();

gradientBorder[0].style.background = `linear-gradient(to bottom left,${color1},${color2},${color3})`;


//  for css text gradinet for time
timeElement.style.background = `linear-gradient(to top right,${color3},${color2},${color1})`;
timeElement.style.backgroundClip = "text";
timeElement.style.webkitTextFillColor = "transparent";

//  css text gradient for date
dateElement.style.background = `linear-gradient(to top right, ${color1}, ${color2}, ${color3})`;
dateElement.style.backgroundClip = "text";
dateElement.style.webkitTextFillColor = "transparent";

}

setInterval( cssGradientBorder,1000);


// Toggle Theme
let toggleButton = document.getElementsByTagName("button")[0];

// alternative
// function toggleTheme() {
  // document.body.classList.toggle("dark");
// }

function changeBg(){
  if(toggleButton.innerText === "Dark Mode"){
    toggleButton.innerText = " Light Mode";
    document.body.style.background = "black";
    document.body.style.color = "white";

    toggleButton.style.backgroundColor = "white";
    toggleButton.style.color = "black";
    watchElement.style.backgroundColor = "black";

  }else{
    toggleButton.innerText = "Dark Mode";
    document.body.style.background = "white";
    document.body.style.color = "black";

    toggleButton.style.backgroundColor = "black";
    toggleButton.style.color = "white";
    watchElement.style.backgroundColor = "white";


  }
}

toggleButton.addEventListener("click", changeBg);


// for audio
// let tick = new Audio("tick.mp3");
// tick.play();
