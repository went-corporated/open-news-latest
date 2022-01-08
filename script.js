console.log("script.js is connected.");

var rotate = 0;
function rotateNinety()
{
    if (rotate == 0)
    {
        document.getElementById('one').style.transform = 'rotate(90deg)';
        document.getElementById('two').style.transform = 'rotate(90deg)';
        document.getElementById('three').style.transform = 'rotate(90deg)';
        document.getElementById('four').style.transform = 'rotate(90deg)';
        document.getElementById('five').style.transform = 'rotate(90deg)';
        document.getElementById('six').style.transform = 'rotate(90deg)';
        rotate = 90;
    }
    else if (rotate == 90)
    {
        document.getElementById('one').style.transform = 'rotate(180deg)';
        document.getElementById('two').style.transform = 'rotate(180deg)';
        document.getElementById('three').style.transform = 'rotate(180deg)';
        document.getElementById('four').style.transform = 'rotate(180deg)';
        document.getElementById('five').style.transform = 'rotate(180deg)';
        document.getElementById('six').style.transform = 'rotate(180deg)';
        rotate = 180;
    }
    else if (rotate == 180)
    {
        document.getElementById('one').style.transform = 'rotate(270deg)';
        document.getElementById('two').style.transform = 'rotate(270deg)';
        document.getElementById('three').style.transform = 'rotate(270deg)';
        document.getElementById('four').style.transform = 'rotate(270deg)';
        document.getElementById('five').style.transform = 'rotate(270deg)';
        document.getElementById('six').style.transform = 'rotate(270deg)';
        rotate = 270;
    }
    else if (rotate == 270)
    {
        document.getElementById('one').style.transform = 'rotate(0deg)';
        document.getElementById('two').style.transform = 'rotate(0deg)';
        document.getElementById('three').style.transform = 'rotate(0deg)';
        document.getElementById('four').style.transform = 'rotate(0deg)';
        document.getElementById('five').style.transform = 'rotate(0deg)';
        document.getElementById('six').style.transform = 'rotate(0deg)';
        rotate = 0;
    }
}