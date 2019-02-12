let sectionarray = [document.getElementById('rood'), document.getElementById('oranje'), document.getElementById('geel'), document.getElementById('groen'), document.getElementById('blauw'), document.getElementById('rainbow')];
let navbararray = document.getElementsByClassName('navbaritem');
let navbariconarray = document.getElementsByClassName('nav__icon');
let sectionarraycounter = 0;
let scrolledbool = false;
let buttons = [document.getElementById('previous'), document.getElementById('next')]

navbariconarray[0].classList.add('nav--active');
removeArrows();
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    //up
    if(e.keyCode == '38')
    {
        if(sectionarraycounter > 0) {
            navbariconarray[sectionarraycounter].classList.remove('nav--active');
            sectionarraycounter--;
            navbariconarray[sectionarraycounter].classList.add('nav--active');
            sectionarray[sectionarraycounter].scrollIntoView();
        }
    }
    //down
    else if(e.keyCode == '40') {
        if(sectionarraycounter < 5) {
            navbariconarray[sectionarraycounter].classList.remove('nav--active');
            sectionarraycounter++;
            navbariconarray[sectionarraycounter].classList.add('nav--active');
            sectionarray[sectionarraycounter].scrollIntoView();
        }
    }
}



window.addEventListener('wheel', function(e) {
    
    if(!scrolledbool) {
        console.log(e.deltaY);
        console.log('gay');
        

        if(Math.sign(e.deltaY) == 1) {        
            if(sectionarraycounter < 5) {
                scrolledbool = true;
                navbariconarray[sectionarraycounter].classList.remove('nav--active');
                sectionarraycounter++;
                removeArrows();
                navbariconarray[sectionarraycounter].classList.add('nav--active');
                sectionarray[sectionarraycounter].scrollIntoView();
                sectionarray[sectionarraycounter].classList.add('nav--active');
                setTimeout(function () {scrolledbool = false}, 700);
            }
        }
        else if(Math.sign(e.deltaY) == -1) {
            if(sectionarraycounter > 0) {
                scrolledbool = true;
                navbariconarray[sectionarraycounter].classList.remove('nav--active');
                sectionarraycounter--;
                removeArrows();
                navbariconarray[sectionarraycounter].classList.add('nav--active');
                sectionarray[sectionarraycounter].scrollIntoView();
                setTimeout(function () {scrolledbool = false}, 700);
            }
       }
    }
       
});
buttons[0].addEventListener('click', function() {
    if(sectionarraycounter > 0) {
        navbariconarray[sectionarraycounter].classList.remove('nav--active');
        sectionarraycounter--;
        removeArrows();
        navbariconarray[sectionarraycounter].classList.add('nav--active');
        sectionarray[sectionarraycounter].scrollIntoView();
    }
});
buttons[1].addEventListener('click', function() {
    if(sectionarraycounter < 5) {
        navbariconarray[sectionarraycounter].classList.remove('nav--active');
        sectionarraycounter++;
        removeArrows();
        navbariconarray[sectionarraycounter].classList.add('nav--active');
        sectionarray[sectionarraycounter].scrollIntoView();
    }
});


for(let i = 0; i < navbararray.length; i++) {
    navbararray[i].addEventListener('click', function() {
        navbariconarray[sectionarraycounter].classList.remove('nav--active');
        sectionarraycounter = i;
        removeArrows();
        navbariconarray[sectionarraycounter].classList.add('nav--active');
        sectionarray[sectionarraycounter].scrollIntoView();
    })
}

function removeArrows() {
    if(sectionarraycounter == 0) {
        buttons[0].style.display = "none";
    }
    else {
        buttons[0].style.display = null;
    }
    if(sectionarraycounter == 5) {
        buttons[1].style.display = "none";
    }
    else {
        buttons[1].style.display = null;
    }
}
