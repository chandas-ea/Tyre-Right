function abouthover()
{
    let x=document.getElementById('line1');
    let y=document.getElementById('about');
    y.style.color="white";
    x.style.left="30px";
}
function unabouthover()
{
    let x= document.getElementById('line1');
    let y=document.getElementById('about');
    y.style.color="black";
    x.style.left="-1000px";
}
function howhover()
{
    let x=document.getElementById('line2');
    let y=document.getElementById('howtoplay');
    x.style.right="35px";
    y.style.color="black";
}
function unhowhover()
{
    let x=document.getElementById('line2');
    let y=document.getElementById('howtoplay');
    x.style.right="100%";
    y.style.color="white";
}
function change()
{
    let x=document.getElementById('body');
    let y=document.getElementById('heading');
    let about=document.getElementById('about');
    let aboutthe=document.getElementById('aboutthe');
    let howtoplay=document.getElementById('howtoplay');
    let how=document.getElementById('how');
    how.style.color="black";
    howtoplay.style.color="black";
    aboutthe.style.color="white";
    about.style.color="white";
    x.style.background="linear-gradient(165deg,black 50%,white 50%)";
    x.style.backgroundRepeat="no-repeat";
    y.style.transform="scale(1.3)";
    y.style.color="white";
}
function unchange()
{
    let x=document.getElementById('body');
    let y=document.getElementById('heading');
    let about=document.getElementById('about');
    let aboutthe=document.getElementById('aboutthe');
    let howtoplay=document.getElementById('howtoplay');
    let how=document.getElementById('how');
    how.style.color="white";
    howtoplay.style.color="white";
    aboutthe.style.color="black";
    about.style.color="black";
    x.style.height="100vh";
    x.style.background="linear-gradient(165deg,white 50%,black 50%)";
    x.style.backgroundRepeat="no-repeat";
    y.style.transform="scale(1)";
    y.style.color="black";
}

var x=["absence","address","acquit","argument","begining","deceive","disastrous","odyssey","millennium","minuscule","playwright","sincerely","supersede","whether","liaison","embarrass","camaraderie","broccoli","humorous","jewelery","sincerely","mischievous","noticeable"];
var randomWord;
var point=0;

function getgo()
{
    random();
    setInterval(time,1000);
}
function random()
{
    var type=document.getElementById('words');
    var ran= Math.floor(Math.random()*x.length);
    randomWord = x[ran];
    type.innerHTML=randomWord;
}
function score()
{
    var z = document.getElementById('score');
    point++;
    z.innerHTML=point;

}

function changeword()
{
    var word=document.getElementById('type');
    if(word.value==randomWord && t>0)
    {
        random();
        score();
        word.value="";
    }
}
function marks()
{
    var mark=point/5;
    var result= document.getElementById('finalscore');
    result.innerHTML="Your writing speed is " + mark + " words per second";
}
var t=7;
function time()
{
    var demo=document.getElementById('time');
    if(t>0)
    {
        demo.innerHTML=t+"s";
        t--;
    }
    else{
        demo.innerHTML="Time Up";
        marks();
        let z=document.getElementById('game');
        z.style.boxShadow="10px 10px 9px rgba(255, 0, 0, 0.8)";
        
    }
}

function shift()
{
    let a=document.getElementById('ccon');
    let b=document.getElementById('dcon');
    a.style.width="0px";
    a.style.fontSize="0px";
}
function unshit()
{
    let a=document.getElementById('ccon');
    let b=document.getElementById('dcon');
    a.style.width="250px";
    a.style.fontSize="25px";
}








