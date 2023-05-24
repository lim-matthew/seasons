
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


