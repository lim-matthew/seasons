function alertSummer() {
    alert("these");
}

function alertAutumn() {
    alert("buttons");
}

function alertWinter() {
    alert("dont");
}

function alertSpring() {
    alert("do anything yet");
}

function normalImg(x) {
    x.src="./img/fortnitemap.jpg"
}

function winterImg(x) {
    x.src="./img/fortnitemap_winter.jpg"
}
  
function autumnImg(x) {
    x.src="./img/fortnitemap_autumn.jpg"
}

function springImg(x) {
    x.src="./img/fortnitemap_spring.jpg"
}

function unknownImg(x) {
    x.src="./img/fortnitemap_unknown.jpg"
}

function sussy(x) {
    x.src="./img/sussy.jpg"
    setTimeout(function(){
        x.src="./img/fortnite_man.png"
    }, 1000);
}

function badbutton() {
    let i = 0;
    while (prompt("will u let me in the trainee program?") != "yes") {
        i++;
        if (i==3) {
            alert("hint: type 'yes'");
        }
        if (i==6) {
            alert("bruh");
        }
    }
    alert("thanks, see u then");
}


var box = document.getElementById("man");



function up() {
    man.style.top = (parseInt(man.style.top) - 80) + 'px';
}

function right() {
    man.style.left = (parseInt(man.style.left) + 80) + 'px';
}

function left() {
    man.style.left = (parseInt(man.style.left) - 80) + 'px';
}

function down() {
    man.style.top = (parseInt(man.style.top) + 80) + 'px';
}

function reset() {
    man.style.top = 0;
    man.style.left = 0;
    man.style.height = '200px';
    man.style.width = '100px';
}

function swag() {
    man.style.height = '50px';
    man.style.width = '1000px';
    setTimeout(function(){
        man.style.height = '200px';
        man.style.width = '100px';
    }, 1000);
}


