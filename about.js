console.log('about.js is connected.');

let spanTag = document.getElementById('about_title_span');
let tagDuration = 5000;
let tags = [ 'div','p','border','span','input','nav','img','button' ];

let tag = 0;
function changeTag(){
    spanTag.innerText = tags[tag];
    tag++;
    if (tag == tags.length) { tag = 0; }
    setTimeout(() => { changeTag(); }, tagDuration);
}

window.onload = function(){
    changeTag();
}