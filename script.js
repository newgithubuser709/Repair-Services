// _______________________________________________________________________________________________________________
// __________________________________________________________________________________
// ____________________________________________________



//  navigation icon animation  _____________ ________ ___ ___ __ __ _ _  @

var menulineone = document.getElementById('menuline1');
var menulinetwo = document.getElementById('menuline2');
var menulinethree = document.getElementById('menuline3');
var header2 = document.getElementById('header2');

function menuToggle() {

    header2.classList.toggle('header2-anim');
    menulineone.classList.toggle('menuline1-anim');
    menulinetwo.classList.toggle('menuline2-anim');
    menulinethree.classList.toggle('menuline3-anim');
}



//  li more li div anim  _____________ ________ ___ ___ __ __ _ _  @

var ServiceItemMob = document.getElementById('ServiceItemMob');
var downArow = document.getElementById('downArow');
var services = document.getElementById('services');


function serviceitems() {

    ServiceItemMob.classList.toggle('ServiceItemMob-anim');
    downArow.classList.toggle('downArow-anim')
}


//  hide nav when click li a  in responsive _____________ ________ ___ ___ __ __ _ _  @

function hideMobieNav() {

    header2.classList.toggle('header2-anim');
    menulineone.classList.toggle('menuline1-anim');
    menulinetwo.classList.toggle('menuline2-anim');
    menulinethree.classList.toggle('menuline3-anim');

}


// ... 

var preloader = document.getElementById('preloader');
var body = document.getElementById('body');

function PreLoader() {

    preloader.style.display = 'none';
    body.style.overflow = 'visible';

}