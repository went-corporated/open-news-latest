console.log("script.js is connected.");

let changelogToggled = false;
function changelogToggle(){
    if (changelogToggled === false){
        document.getElementById('changelog').style = 'transform: translateX(0%);';
        changelogToggled = true;
    } else {
        document.getElementById('changelog').style = 'transform: translateX(-100%);';
        changelogToggled = false;
    }
}

if (localStorage.getItem('notif') === '5'){
    localStorage.setItem('notif', '4');
}
else if (localStorage.getItem('notif') === '4'){
    localStorage.setItem('notif', '3');
}
else if (localStorage.getItem('notif') === '3'){
    localStorage.setItem('notif', '2');
}
else if (localStorage.getItem('notif') === '2'){
    localStorage.setItem('notif', '1');
}
else{
    toggleNotif();
    localStorage.setItem('notif', '5');
}

function toggleNotif(){
    document.getElementById('notif').classList.add('show-notif');
}

// document.getElementById('notif').onclick = function(){
//     window.open('https://github.com/went-lab/selected');
// }

function launchVideoOnMouseOver(id){
    document.getElementById(`${id}`).play();
}

function stopVideoOnMouseOut(id){
    document.getElementById(`${id}`).pause();
}