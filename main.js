let logo = document.querySelector(".lnXdpd");
logo.src = chrome.runtime.getURL("images/google1.png");
logo.srcset = chrome.runtime.getURL("images/google1.png");

/*let background = document.querySelector(".L3eUgb");
background.style.backgroundColor = "images/stars1.png";
background.style.backgroundRepeat = "repeat";
NE RADI*/

logo.onmouseover = () => {
    logo.style.cursor = "pointer";
}

logo.addEventListener('click', () => {
    window.open("https://www.google.com")
})

let footer1 = document.querySelector(".uU7dJb");
footer1.style.backgroundColor = "rgb(15, 23, 41)";
footer1.style.borderBottom = "1px solid #b1d237";
footer1.style.color = "lightgrey";

let footer2 = document.querySelector(".KxwPGc");
footer2.style.backgroundColor = "rgb(15, 23, 41)";

let footer3 = document.querySelector(".ayzqOc");
footer3.style.color = "lightgrey";

let logo2 = document.querySelector(".jfN4p");
logo2.src = chrome.runtime.getURL("images/google1.png");
