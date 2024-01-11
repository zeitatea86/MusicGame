/*
document.firstElementChild.lastElementChild.firstElementChild.innerHTML = "Boss";
document.getElementById("title").innerHTML="Mihai";
document.getElementsByClassName("btn")[0].style.color="red";
document.getElementsByTagName("li")[2].style.color="blue";


document.querySelector("h1");                                          #### Tag locator
<h1 id=​"title">​Mihai​</h1>​
document.querySelector("#title");                                      #### ID locator
<h1 id=​"title">​Mihai​</h1>​
document.querySelector(".btn");                                        #### class locator
<button class=​"btn" style=​"color:​ red;​">​Click Me​</button>​
document.querySelector("li a");                                        #### looking for an "a"  inside a "li"
<a href=​"https:​/​/​www.google.com">​Google​</a>​
document.querySelector("li.item");                                     #### looking for "item"  inside "li"
<li class=​"item">​…​</li>​::marker​<a href=​"https:​/​/​www.google.com">​Google​</a>​</li>​
document.querySelectorAll("#list .item");                              #### query all classes "item" inside id "list"
NodeList(3) [li.item, li.item, li.item]
document.querySelector("h1").style.fontSize="50px";                    #### change font size to tag
'50px'
document.querySelector(".btn").style.backgroundColor="yellow";         #### change color to class
'yellow'
document.querySelector("h1").classList.add("huge");                    #### Add class to be implemented in JS
undefined
document.querySelector("h1").classList.remove("huge");                 #### Remove class from JS
undefined
document.querySelector("a").getAttribute("href");                          #### get attribute "href" of "a"
'https://www.google.com'
document.querySelector("a").setAttribute("href","https://www.bing.com");   #### set attribute href of a to new value bing.com
undefined
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+zar1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+zar2+".png");
function (){                                                               ####  Anonymous function
        alert("clicked!");                                                 ####  Anonymous function
    });                                                                    ####  Anonymous function
*/




//Code starts from here: !!!!

//Detecting button press

var l = document.querySelectorAll(".drum").length;
for (var i = 0; i < l; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("clicked!");

        var bt = this.innerHTML;
        //this.style.color="white";
        makeSound(bt);
        buttonAnimation(bt);

    });
}

//Detecting keyboard press

document.addEventListener("keydown",function(event){                        // higher order function >>> addEventListener
    //console.log(event);                                                   // function callback "function" called by "document"
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log();
    }
}


function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+ currentKey); 
    activeButton.classList.add("pressed"); 
    setTimeout(function(){activeButton.classList.remove("pressed");},500);   //setTimeout has 2 params: "function" and "1000"
}


