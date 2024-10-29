var drumKeyButton = document.querySelectorAll(".drum");

for (let i = 0; i <= 6; i++) {

    drumKeyButton[i].addEventListener("click", function () {

        triggerSound(this.innerHTML);
        animation(this.innerHTML);

        console.log(this.innerHTML);
    })

}

document.addEventListener("keypress", function(Event) {

    triggerSound(Event.key);
    animation(Event.key);

    console.log(Event);
})


function triggerSound(keyPressedByTheEvent) {
        
    if (keyPressedByTheEvent === "w") {
        var audio0 = new Audio('./sounds/tom-1.mp3');
        audio0.play();
    }

    else if (keyPressedByTheEvent === "a") {
        var audio1 = new Audio('./sounds/tom-2.mp3');
        audio1.play();
    }

    else if (keyPressedByTheEvent === "s") {
        var audio2 = new Audio('./sounds/tom-3.mp3');
        audio2.play();
    }

    else if (keyPressedByTheEvent === "d") {
        var audio3 = new Audio('./sounds/tom-4.mp3');
        audio3.play();
    }

    else if (keyPressedByTheEvent === "j") {
        var audio4 = new Audio('./sounds/snare.mp3');
        audio4.play();
    }

    else if (keyPressedByTheEvent === "k") {
        var audio5 = new Audio('./sounds/crash.mp3');
        audio5.play();
    }

    else if (keyPressedByTheEvent === "l") {
        var audio6 = new Audio('./sounds/kick-bass.mp3');
        audio6.play();
    }

    else {

    }

};


function animation(key) {

    var drumClass = document.querySelector(`.${key}`);
    
    drumClass.style.color = "white";
    drumClass.classList.add("pressed");

    setTimeout( () => {
        drumClass.style.color = "#DA0463";
        drumClass.classList.remove("pressed");
    } , 100 );

}